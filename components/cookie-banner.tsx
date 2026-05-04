"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookies-accepted")
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/97 backdrop-blur-sm border-t border-primary/20 p-4 md:p-5 z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">
      {/* Gold top line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground flex items-start gap-3">
          {/* Cookie icon text */}
          <span className="text-primary text-base mt-0.5 shrink-0">♦</span>
          <p>
            O <span className="text-foreground font-medium">TopPortugalCasino.com</span> utiliza cookies para
            personalizar a sua experiência e apresentar as melhores ofertas de casinos. Ao continuar, aceita a nossa{" "}
            <Link href="/politica-cookies" className="text-primary hover:underline font-medium">
              política de cookies
            </Link>{" "}
            e{" "}
            <Link href="/politica-privacidade" className="text-primary hover:underline font-medium">
              política de privacidade
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button
            onClick={acceptCookies}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 tracking-wide"
          >
            Aceitar Cookies
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
