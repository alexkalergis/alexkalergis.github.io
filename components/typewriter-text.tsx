"use client"

import { useState, useEffect, useRef } from "react"

interface TypewriterTextProps {
  text: string
  delay?: number
  className?: string
  showCursor?: boolean
  cursorDuration?: number
  onComplete?: () => void
  skipAnimation?: boolean
}

export function TypewriterText({
  text,
  delay = 100,
  className = "",
  showCursor = true,
  cursorDuration = 1000,
  onComplete,
  skipAnimation = false,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCursorVisible, setIsCursorVisible] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)
  const [animationStarted, setAnimationStarted] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Cleanup function
  const cleanup = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Initialize animation only once
  useEffect(() => {
    if (animationStarted) return // Prevent restarting

    if (skipAnimation) {
      setDisplayText(text)
      setCurrentIndex(text.length)
      setTypingComplete(true)
      setIsCursorVisible(false)
      setAnimationStarted(true)
      if (onComplete) {
        onComplete()
      }
    } else {
      setAnimationStarted(true)
    }

    return cleanup
  }, [text, skipAnimation, onComplete, animationStarted])

  // Typing animation effect
  useEffect(() => {
    if (!animationStarted || skipAnimation || typingComplete || currentIndex >= text.length) {
      if (currentIndex >= text.length && !typingComplete) {
        setTypingComplete(true)
        if (onComplete) {
          onComplete()
        }
      }
      return
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayText((prev) => prev + text[currentIndex])
      setCurrentIndex((prev) => prev + 1)
    }, delay)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [currentIndex, text, delay, animationStarted, skipAnimation, typingComplete, onComplete])

  // Cursor blinking and hiding effect
  useEffect(() => {
    if (skipAnimation || !showCursor) {
      setIsCursorVisible(false)
      return
    }

    if (typingComplete) {
      // Start blinking
      intervalRef.current = setInterval(() => {
        setIsCursorVisible((prev) => !prev)
      }, 530)

      // Hide cursor after duration
      const hideTimeout = setTimeout(() => {
        setIsCursorVisible(false)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }, cursorDuration)

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
        clearTimeout(hideTimeout)
      }
    } else if (animationStarted) {
      // Cursor visible while typing
      setIsCursorVisible(true)
    }
  }, [typingComplete, skipAnimation, showCursor, cursorDuration, animationStarted])

  return (
    <span className={className}>
      {displayText}
      {isCursorVisible && <span className="inline-block w-0.5 h-[1em] bg-current ml-1 align-bottom" />}
    </span>
  )
}
