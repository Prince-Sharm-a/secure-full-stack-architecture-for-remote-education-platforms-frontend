import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images:{
    qualities:[1,10,15,20,25,30,35,40,45,50,60,65,70,75,80,85,90,95,100],
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '3000',
      // }
    ]
  }
};

export default nextConfig;
