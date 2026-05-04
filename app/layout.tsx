import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Top Portugal Casino | Os Melhores Casinos Online em Portugal",
  description:
    "TopPortugalCasino.com — o guia definitivo para casinos online em Portugal. Rankings exclusivos, bónus, análises detalhadas e os melhores operadores licenciados pelo SRIJ.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
