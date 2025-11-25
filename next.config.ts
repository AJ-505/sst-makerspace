import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: '/public/**',
      },
      {
        pathname: '/professional-portrait-*.jpg',
      },
      {
        pathname: '/smiling-man-portrait.png',
      },
      {
        pathname: '/makerspace-workshop-with-students-gathered-on-mult.jpg'
      },
      {
        pathname: '/small-robots-racing-on-track.jpg'
      },
      {
        pathname: '/industrial-robotic-arm-gripper-orange.jpg'
      }
    ],
  },
};

export default nextConfig;
