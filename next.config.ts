const nextConfig = {
  output: 'export', // Export the app as static files
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Necessary for static site export with images
  },
};

export default nextConfig;
