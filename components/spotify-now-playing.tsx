"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface NowPlayingData {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
  songUrl?: string
}

export function SpotifyNowPlaying() {
  const [data, setData] = useState<NowPlayingData>({ isPlaying: false })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        // Check if we're in a browser environment and have the required env vars
        if (typeof window === "undefined") {
          setData({ isPlaying: false })
          setLoading(false)
          return
        }

        // For static builds, we'll show a fallback message
        // In a real deployment, you'd need to set up a serverless function
        // or use a different approach for the Spotify integration

        setData({ isPlaying: false })
      } catch (error) {
        console.warn("Spotify integration not available in static build")
        setData({ isPlaying: false })
      } finally {
        setLoading(false)
      }
    }

    fetchNowPlaying()
  }, [])

  if (loading) {
    return (
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded animate-pulse" />
        <div className="h-3 bg-muted rounded animate-pulse w-3/4" />
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Not currently playing</p>
        <p className="text-xs text-muted-foreground">Spotify integration available after deployment</p>
      </div>
      <Link
        href="https://open.spotify.com/user/alexkalergis"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
      >
        View my Spotify profile
        <ExternalLink className="h-3 w-3" />
      </Link>
    </div>
  )
}
