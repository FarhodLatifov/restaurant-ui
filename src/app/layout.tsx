import "./globals.css"
import { Inter } from "next/font/google"
import Notification from "@/components/Notification"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"

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
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <CartProvider>
          <Notification />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
