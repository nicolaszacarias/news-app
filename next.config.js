/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    domains: ["www.gannett-cdn.com", "media.cnn.com", "www.reuters.com", "assets2.cbsnewsstatic.com", "www.apple.com", "images.macrumors.com", "s.abcnews.com", "cdn.vox-cdn.com", "hips.hearstapps.com", "profootballtalk.nbcsports.com", "a3.espncdn.com", "kubrick.htvapps.com", "www.washingtonpost.com", "ichef.bbci.co.uk", "assets-prd.ignimgs.com", "img.huffingtonpost.com"],
  },
  swcMinify: true,
}

module.exports = nextConfig
