import "./globals.css"
import { Inter } from "next/font/google"
import Notification from "@/components/Notification"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Providers from "@/app/providers"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Restaurant Massimo</title>
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Providers>
          <Notification />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
