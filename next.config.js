/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    domains: ["resizer.glanacion.com", "www.infobae.com", "media.tycsports.com", "www.rosario3.com", "images.ole.com.ar", "www.lavoz.com.ar", "media.ambito.com", "www.ligaprofesional.ar"],
  },
  swcMinify: true,
}

module.exports = nextConfig
