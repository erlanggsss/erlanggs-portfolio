/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile the 'motion' package so its modern JS syntax
  // (e.g. private class fields) is compiled down for older browsers
  // like Safari 15 on iPhone 7 (iOS 15).
  transpilePackages: ['motion'],
};

export default nextConfig;
