// Spotify OAuth Setup Script
// Run this once to get your refresh token

const CLIENT_ID = "your_client_id_here" // Replace with your Spotify Client ID
const CLIENT_SECRET = "your_client_secret_here" // Replace with your Spotify Client Secret
const REDIRECT_URI = "http://localhost:3000/callback" // This should match your Spotify app settings

// Step 1: Generate the authorization URL
function generateAuthUrl() {
  const scopes = ["user-read-currently-playing", "user-top-read", "user-read-recently-played"].join("%20")

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${scopes}`

  console.log("🎵 Spotify Setup Instructions:")
  console.log("1. Replace CLIENT_ID and CLIENT_SECRET above with your actual values")
  console.log("2. Visit this URL to authorize your app:")
  console.log("\n" + authUrl + "\n")
  console.log("3. After authorization, you'll be redirected to a URL like:")
  console.log("   http://localhost:3000/callback?code=AUTHORIZATION_CODE")
  console.log("4. Copy the AUTHORIZATION_CODE and use it in getRefreshToken() below")

  return authUrl
}

// Step 2: Exchange authorization code for tokens
async function getRefreshToken(authorizationCode) {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: authorizationCode,
        redirect_uri: REDIRECT_URI,
      }),
    })

    const data = await response.json()

    if (data.error) {
      console.error("❌ Error:", data.error_description)
      return
    }

    console.log("✅ Success! Here are your tokens:")
    console.log("Access Token:", data.access_token)
    console.log("Refresh Token:", data.refresh_token)
    console.log("Expires in:", data.expires_in, "seconds")
    console.log("\n🔑 Add this to your environment variables:")
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`)

    return data
  } catch (error) {
    console.error("❌ Error getting tokens:", error)
  }
}

// Step 3: Test the refresh token
async function testRefreshToken(refreshToken) {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    })

    const data = await response.json()

    if (data.error) {
      console.error("❌ Error testing refresh token:", data.error_description)
      return
    }

    console.log("✅ Refresh token works! New access token:", data.access_token)
    return data
  } catch (error) {
    console.error("❌ Error testing refresh token:", error)
  }
}

// Run the setup
console.log("🚀 Starting Spotify OAuth Setup...\n")

// Uncomment the line below to generate the auth URL
generateAuthUrl()

// After you get the authorization code, uncomment and run this:
// getRefreshToken('YOUR_AUTHORIZATION_CODE_HERE')

// After you get the refresh token, test it:
// testRefreshToken('YOUR_REFRESH_TOKEN_HERE')
