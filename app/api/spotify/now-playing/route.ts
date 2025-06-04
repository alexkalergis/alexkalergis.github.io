import { getNowPlaying } from "@/lib/spotify"

export async function GET() {
  try {
    // Check if environment variables are set
    if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET || !process.env.SPOTIFY_REFRESH_TOKEN) {
      console.warn("Spotify environment variables not configured")
      return Response.json({ isPlaying: false, error: "Spotify not configured" })
    }

    const response = await getNowPlaying()

    if (response.status === 204 || response.status > 400) {
      return Response.json({ isPlaying: false })
    }

    const song = await response.json()

    if (song.item === null) {
      return Response.json({ isPlaying: false })
    }

    const isPlaying = song.is_playing
    const title = song.item.name
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(", ")
    const album = song.item.album.name
    const albumImageUrl = song.item.album.images[0]?.url
    const songUrl = song.item.external_urls.spotify

    return Response.json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    })
  } catch (error) {
    console.error("Spotify API error:", error)
    return Response.json({ isPlaying: false, error: "Failed to fetch data" })
  }
}
