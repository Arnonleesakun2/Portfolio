import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    serverActions:{
      bodySizeLimit: '5mb',
    }
  },
  images:{
    remotePatterns:[
      {
        protocol:'https', 
        hostname:'uxmrqzfnbahsoeffokmw.supabase.co',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;

