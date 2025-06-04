// Spotify OAuth Setup Script - Complete with your credentials
const CLIENT_ID = "2c79700005d24820a88800690d083c7c"
const CLIENT_SECRET = "c69228c2dcff47cc938bfeb93ed93130"
const REDIRECT_URI = "https://alexkalergis.github.io/callback"

console.log("🎵 Spotify Setup for Alex Kalergis Portfolio")
console.log("=".repeat(50))

// Generate authorization URL
const scopes = ["user-read-currently-playing", "user-top-read", "user-read-recently-played"].join("%20")
const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${scopes}&show_dialog=true`

console.log("\n🔗 STEP 1: Visit this authorization URL:")
console.log("👇 Click this link to authorize your Spotify account:")
console.log(authUrl)

console.log("\n📋 STEP 2: After authorization:")
console.log("1. You'll be redirected to: https://alexkalergis.github.io/callback?code=XXXXXXX")
console.log("2. Copy the 'code' parameter from the URL")
console.log("3. The code will be a long string after 'code='")

// Function to exchange authorization code for tokens
async function getTokensFromCode(authorizationCode) {
  console.log(`\n🔄 Exchanging authorization code for tokens...`)
  console.log(`Code: ${authorizationCode.substring(0, 20)}...`)

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
      console.log("\n💡 Troubleshooting:")
      console.log("- Make sure the authorization code is fresh (expires in 10 minutes)")
      console.log("- Verify you copied the entire code from the URL")
      console.log("- Check that the redirect URI in Spotify app matches exactly")
      return
    }

    console.log("\n✅ SUCCESS! Here are your tokens:")
    console.log("=".repeat(50))
    console.log("🔑 REFRESH TOKEN (copy this!):")
    console.log(data.refresh_token)
    console.log("=".repeat(50))

    console.log("\n📋 Environment Variables to add to Vercel:")
    console.log(`SPOTIFY_CLIENT_ID=${CLIENT_ID}`)
    console.log(`SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}`)
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`)

    // Test the refresh token immediately
    await testRefreshToken(data.refresh_token)

    return data
  } catch (error) {
    console.error("❌ Network error:", error.message)
  }
}

// Function to test the refresh token
async function testRefreshToken(refreshToken) {
  console.log("\n🧪 Testing refresh token...")

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
      console.error("❌ Refresh token test failed:", data.error_description)
      return
    }

    console.log("✅ Refresh token works perfectly!")
    console.log("🎵 Your Spotify integration is ready!")
    console.log("\n🚀 Next steps:")
    console.log("1. Add the environment variables to your Vercel project")
    console.log("2. Deploy your site")
    console.log("3. Your 'Currently Listening' section will show live data!")

    return data
  } catch (error) {
    console.error("❌ Error testing refresh token:", error)
  }
}

console.log("\n🚀 Ready to start!")
console.log("1. First, visit the authorization URL above")
console.log("2. After you get the code, run: getTokensFromCode('YOUR_CODE_HERE')")

// Example usage (uncomment and replace with your actual code):
// getTokensFromCode('AQBzX8Y9Z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0D1E2F3G4H5I6J7K8L9M0N1O2P3Q4R5S6T7U8V9W0X1Y2Z3A4B5C6D7E8F9G0H1I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9A0B1C2D3E4F5G6H7I8J9K0L1M2N3O4P5Q6R7S8T9U0V1W2X
