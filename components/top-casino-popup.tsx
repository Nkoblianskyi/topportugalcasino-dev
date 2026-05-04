"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, X } from "lucide-react"
import { getTopCasino } from "@/lib/casinos"

export function TopCasinoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank")
  }

  const starRating = topCasino.rating / 2

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const fillPercentage = Math.min(Math.max((starRating - index) * 100, 0), 100)
      return (
        <div key={index} className="relative inline-block">
          <Star className="h-5 w-5 text-amber-900/40" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-card border border-primary/30 max-w-md p-0 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] [&>button]:hidden">
        {/* Header banner with casino feel */}
        <div className="relative bg-gradient-to-r from-[#0a1628] via-[#0f1f3d] to-[#0a1628] px-6 py-5 text-center border-b border-primary/20">
          {/* Gold top border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          {/* Decorative suits */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500/20 text-3xl font-serif">♠</span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-500/20 text-3xl font-serif">♦</span>

          <p className="text-[10px] tracking-[0.3em] text-amber-400/70 uppercase mb-1">Top Portugal Casino</p>
          <h3 className="text-2xl font-semibold font-serif text-white">Oferta Exclusiva</h3>
          <p className="text-xs text-amber-400/80 mt-1 tracking-wide">Melhor casino da semana</p>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-white/40 hover:text-white/80 transition-colors"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 cursor-pointer hover:bg-muted/20 transition-colors" onClick={handleModalClick}>
          {/* Casino logo */}
          <div className="flex justify-center mb-4">
            <div className="w-48 h-24 bg-muted/50 border border-border rounded-lg p-3 flex items-center justify-center">
              <img
                src={topCasino.logo || "/placeholder.svg"}
                alt={`${topCasino.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Rating stars */}
          <div className="flex justify-center items-center gap-1 mb-4">
            {renderStars()}
            <span className="text-lg font-bold text-amber-400 ml-2">{topCasino.rating}/10</span>
          </div>

          {/* Badge */}
          {topCasino.badge && (
            <div className="flex justify-center mb-3">
              <span className="bg-amber-500/20 text-amber-400 text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 border border-amber-500/30">
                {topCasino.badge}
              </span>
            </div>
          )}

          {/* Bonus highlight */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#0f1f3d] border border-primary/30 rounded-xl p-5 mb-5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
            <p className="text-[10px] text-amber-400/70 mb-1 uppercase tracking-[0.2em]">Bónus de Boas-Vindas</p>
            <p className="text-2xl font-semibold text-white font-serif">{topCasino.bonus}</p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {topCasino.features.map((feature) => (
              <span
                key={feature}
                className="text-[11px] text-muted-foreground bg-muted/40 border border-border px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-base tracking-wide uppercase">
            Obter Bónus Agora
          </Button>

          <p className="text-[11px] text-muted-foreground/60 mt-4 text-center">
            Oferta limitada. Termos e condições aplicam-se. Apenas para maiores de 18 anos. Jogue com responsabilidade.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
