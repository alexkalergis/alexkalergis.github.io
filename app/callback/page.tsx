"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, CheckCircle } from "lucide-react"

export default function SpotifyCallback() {
  const [code, setCode] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const authCode = urlParams.get("code")
    const error = urlParams.get("error")

    if (error) {
      console.error("Spotify authorization error:", error)
    } else if (authCode) {
      setCode(authCode)
    }
  }, [])

  const copyToClipboard = async () => {
    if (code) {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Spotify Authorization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {code ? (
            <>
              <p className="text-sm text-muted-foreground">
                Great! Here's your authorization code. Copy it and use it in your setup script:
              </p>
              <div className="bg-muted p-3 rounded text-sm font-mono break-all">{code}</div>
              <Button onClick={copyToClipboard} className="w-full" variant="outline">
                {copied ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Code
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground">
                Note: This code expires in 10 minutes, so use it quickly in your setup script.
              </p>
            </>
          ) : (
            <p className="text-muted-foreground">
              No authorization code found. Make sure you came here from the Spotify authorization flow.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
