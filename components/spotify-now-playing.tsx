"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
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
        const response = await fetch("/api/spotify/now-playing")

        // Check if the response is ok and has valid content type
        if (!response.ok) {
          console.warn("Spotify API returned error:", response.status, response.statusText)
          setData({ isPlaying: false })
          return
        }

        const contentType = response.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          console.warn("Spotify API returned non-JSON response")
          setData({ isPlaying: false })
          return
        }

        const nowPlaying = await response.json()
        setData(nowPlaying)
      } catch (error) {
        console.warn("Error fetching now playing:", error)
        setData({ isPlaying: false })
      } finally {
        setLoading(false)
      }
    }

    fetchNowPlaying()
    // Refresh every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000)

    return () => clearInterval(interval)
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
      {data.isPlaying ? (
        <>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
              Now Playing
            </Badge>
          </div>
          <div className="space-y-1">
            <h4 className="font-medium text-sm leading-tight">{data.title}</h4>
            <p className="text-xs text-muted-foreground">{data.artist}</p>
          </div>
          {data.songUrl && (
            <Link
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              Listen on Spotify
              <ExternalLink className="h-3 w-3" />
            </Link>
          )}
        </>
      ) : (
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Not currently playing</p>
          <p className="text-xs text-muted-foreground">Check back later!</p>
        </div>
      )}
    </div>
  )
}
