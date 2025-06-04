import { getTopTracks } from "@/lib/spotify"

export async function GET() {
  const response = await getTopTracks()

  if (response.status !== 200) {
    return Response.json({ tracks: [] })
  }

  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
    album: track.album.name,
    albumImageUrl: track.album.images[0]?.url,
  }))

  return Response.json({ tracks })
}
