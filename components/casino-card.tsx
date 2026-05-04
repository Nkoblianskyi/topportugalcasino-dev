"use client"

import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"
import Link from "next/link"

interface CasinoCardProps {
  casino: Casino
  index: number
}

export function CasinoCard({ casino, index }: CasinoCardProps) {
  const isFirstCard = casino.rank === 1

  const renderStars = (rating: number) => {
    const starRating = rating / 2
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          const fillPercentage = Math.min(Math.max((starRating - i) * 100, 0), 100)
          return (
            <div key={i} className="relative h-3 w-3 md:h-4 md:w-4">
              <Star className="absolute inset-0 h-full w-full text-primary/30" strokeWidth={1.5} />
              {fillPercentage > 0 && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
                >
                  <Star className="h-full w-full fill-primary text-primary" strokeWidth={1.5} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  const formatVotes = (votes: number) => votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  return (
    <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block group">
      {/* Desktop Layout */}
      <div
        className={`hidden lg:block relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
          isFirstCard
            ? "bg-gradient-to-r from-primary/10 via-card to-card border border-primary/30"
            : "bg-card border border-border hover:border-primary/30"
        }`}
      >
        {/* Gold accent line for first card */}
        {isFirstCard && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        )}

        {/* Badge */}
        {casino.badge && (
          <div
            className={`absolute top-0 left-8 px-4 py-1 text-[10px] tracking-[0.15em] uppercase ${
              isFirstCard ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            }`}
          >
            {casino.badge}
          </div>
        )}

        <div className="p-8">
          <div className="flex items-center gap-8">
            {/* Rank */}
            <div className="text-center">
              <span className={`text-4xl font-serif font-light ${isFirstCard ? "gold-text" : "text-muted-foreground"}`}>
                {String(casino.rank).padStart(2, "0")}
              </span>
            </div>

            {/* Logo */}
            <div
              className={`w-56 h-32 flex items-center justify-center p-4 ${
                isFirstCard ? "bg-background/50" : "bg-muted/50"
              }`}
            >
              <img
                src={casino.logo || "/placeholder.svg"}
                alt={casino.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Casino Info */}
            <div className="flex-1 text-center">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Bónus</span>
              <p className="text-3xl text-primary font-light">{casino.bonus}</p>
            </div>

            {/* Rating */}
            <div className="text-center px-8 border-l border-border">
              <div className={`text-4xl font-serif font-light mb-2 ${isFirstCard ? "gold-text" : "text-foreground"}`}>
                {casino.rating}
              </div>
              {renderStars(casino.rating)}
              <p className="text-[10px] text-muted-foreground mt-2 tracking-wider uppercase">
                {formatVotes(casino.reviews)} votos
              </p>
            </div>

            {/* CTA */}
            <Button
              className={`group/btn font-light tracking-wider uppercase text-xs px-8 py-6 transition-all duration-300 ${
                isFirstCard
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              Visitar
              <ExternalLink className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Responsible gaming terms */}
        <div className="px-8 pb-3 flex items-center gap-2 border-t border-border/40 pt-2">
          <span className="text-[10px] tracking-wider text-muted-foreground uppercase">+18</span>
          <span className="text-muted-foreground/40 text-[10px]">|</span>
          <span className="text-[10px] tracking-wider text-muted-foreground">Jogo Responsável</span>
          <span className="text-muted-foreground/40 text-[10px]">|</span>
          <a
            href="https://jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] tracking-wider text-primary/60 hover:text-primary transition-colors"
          >
            jogoresponsavel.pt
          </a>
        </div>

        {/* Bottom accent line for first card */}
        {isFirstCard && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        )}
      </div>

      {/* Mobile Layout */}
      <div
        className={`lg:hidden relative overflow-hidden ${
          isFirstCard
            ? "bg-gradient-to-b from-primary/10 to-card border border-primary/30"
            : "bg-card border border-border"
        }`}
      >
        {/* Badge */}
        {casino.badge && (
          <div
            className={`absolute top-0 left-4 px-3 py-1 text-[8px] tracking-[0.15em] uppercase ${
              isFirstCard ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            }`}
          >
            {casino.badge}
          </div>
        )}

        <div className="p-5 pt-8">
          {/* Header */}
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* Logo */}
            <div
              className={`w-36 h-20 flex items-center justify-center p-2 ${
                isFirstCard ? "bg-background/50" : "bg-muted/50"
              }`}
            >
              <img
                src={casino.logo || "/placeholder.svg"}
                alt={casino.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Casino Info */}
            <div className="text-center">
              <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">Bónus</span>
              <p className="text-xl text-primary font-light">{casino.bonus}</p>
            </div>
          </div>

          {/* Rating & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <span className={`text-2xl font-serif font-light ${isFirstCard ? "gold-text" : "text-foreground"}`}>
                {casino.rating}
              </span>
              {renderStars(casino.rating)}
            </div>
            <Button
              size="sm"
              className={`font-light tracking-wider uppercase text-[10px] ${
                isFirstCard
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              Visitar
            </Button>
          </div>

          {/* Responsible gaming terms */}
          <div className="flex items-center gap-1.5 pt-3 mt-2 border-t border-border/40 flex-wrap">
            <span className="text-[9px] tracking-wider text-muted-foreground uppercase">+18</span>
            <span className="text-muted-foreground/40 text-[9px]">|</span>
            <span className="text-[9px] tracking-wider text-muted-foreground">Jogo Responsável</span>
            <span className="text-muted-foreground/40 text-[9px]">|</span>
            <a
              href="https://jogoresponsavel.pt/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[9px] tracking-wider text-primary/60 hover:text-primary transition-colors"
            >
              jogoresponsavel.pt
            </a>
          </div>
        </div>
      </div>
    </Link>
  )
}
