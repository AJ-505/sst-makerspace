import type React from "react"
import type { Metadata } from "next"
import { Urbanist, Poppins, Anaheim } from "next/font/google"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" })
const anaheim = Anaheim({ subsets: ["latin"], weight: "400", variable: "--font-anaheim" })

export const metadata: Metadata = {
  title: "SST Makerspace - More Than Robots. A Movement.",
  description:
    "SST Makerspace is your launchpad for building change. Come explore, build, and experience what happens when creativity meets engineering.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${poppins.variable} ${anaheim.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  )
}

