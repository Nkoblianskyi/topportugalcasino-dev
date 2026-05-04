"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-primary/20 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Left: SRIJ Link */}
          <div className="flex items-center">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/srij.svg"
                alt="SRIJ logo"
                width={32}
                height={32}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>

          {/* Center: Luxury Logo */}
          <Link href="/" className="flex flex-col items-center hover:opacity-90 transition-opacity">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-light tracking-wide uppercase">
              <span className="gold-text font-medium">Top</span>
              <span className="text-foreground">Portugal</span>
              <span className="gold-text font-medium">Casino</span>
            </h1>
          </Link>

          {/* Right: 18+ luxury badge */}
          <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 border border-primary/40 text-primary">
            <span className="text-xs md:text-sm font-light tracking-wider">18+</span>
          </div>
        </div>
      </div>
    </header>
  )
}
