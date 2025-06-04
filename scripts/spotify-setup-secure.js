// Spotify OAuth Setup Script - Secure Version
// This uses a more production-friendly approach

const CLIENT_ID = "your_client_id_here" // Replace with your Spotify Client ID
const CLIENT_SECRET = "your_client_secret_here" // Replace with your Spotify Client Secret

// Option 1: Use a temporary secure redirect URI
const REDIRECT_URI = "https://alexkalergis.github.io/callback" // We'll handle this manually

// Option 2: Use Spotify's built-in redirect for testing
const SPOTIFY_REDIRECT_URI = "https://developer.spotify.com/dashboard/applications"

console.log("🎵 Spotify Setup Instructions (Secure Method):")
console.log("\n📋 Step 1: Set up your Spotify App")
console.log("1. Go to https://developer.spotify.com/dashboard")
console.log("2. Create a new app")
console.log("3. In Redirect URIs, add: https://alexkalergis.github.io/callback")
console.log("4. Save your app")

console.log("\n🔗 Step 2: Get Authorization Code")
const scopes = ["user-read-currently-playing", "user-top-read", "user-read-recently-played"].join("%20")
const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${scopes}&show_dialog=true`

console.log("Visit this URL:")
console.log(authUrl)
console.log("\n📝 Step 3: Extract the code")
console.log("1. After clicking 'Agree', you'll be redirected to example.com")
console.log("2. The page will show an error (that's normal!)")
console.log("3. Look at the URL bar - it will contain: ?code=XXXXXXXX")
console.log("4. Copy everything after 'code=' and before '&' (if any)")

// Function to exchange code for tokens
async function getTokensFromCode(authorizationCode) {
  console.log(`\n🔄 Exchanging code: ${authorizationCode.substring(0, 20)}...`)

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
      console.log("💡 Common issues:")
      console.log("- Make sure the authorization code is fresh (expires in 10 minutes)")
      console.log("- Check that CLIENT_ID and CLIENT_SECRET are correct")
      console.log("- Verify the redirect URI matches exactly")
      return
    }

    console.log("\n✅ Success! Here are your tokens:")
    console.log("🔑 Refresh Token (save this!):")
    console.log(data.refresh_token)
    console.log("\n📋 Environment Variables to add:")
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

// Function to test refresh token
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
    return data
  } catch (error) {
    console.error("❌ Error testing refresh token:", error)
  }
}

console.log("\n🚀 Ready to start? Follow the steps above!")
console.log("💡 After you get the authorization code, run:")
console.log("getTokensFromCode('YOUR_AUTHORIZATION_CODE_HERE')")

// Uncomment this line and add your authorization code:
// getTokensFromCode('YOUR_AUTHORIZATION_CODE_HERE')
