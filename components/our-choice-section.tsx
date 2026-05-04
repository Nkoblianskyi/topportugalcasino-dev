"use client"

import Image from "next/image"
import Link from "next/link"
import { getTopCasino } from "@/lib/casinos"
import { Star, Calendar, Check, Shield, Zap } from "lucide-react"

export function OurChoiceSection() {
  const topCasino = getTopCasino()

  const getCurrentDate = () => {
    const now = new Date()
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
    ]
    return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`
  }

  return (
    <section className="py-12 md:py-16 bg-[#06101e] relative overflow-hidden">
      {/* Gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      {/* Background suit decoration */}
      <div
        aria-hidden="true"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[220px] font-serif text-amber-500/[0.03] select-none pointer-events-none leading-none"
      >
        ♣
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 border border-amber-400/30 bg-amber-400/5 px-5 py-2 mb-4">
            <span className="text-amber-400 text-xs font-sans font-semibold tracking-[0.25em] uppercase">
              Editor&apos;s Pick
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
            A Nossa <span className="text-amber-400 italic">Escolha</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/35 text-xs font-sans mt-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Atualizado: {getCurrentDate()}</span>
          </div>
        </div>

        {/* Card */}
        <div className="relative border border-amber-400/25 bg-[#0a1628] overflow-hidden">
          {/* Top gold bar */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          {/* #1 Portugal ribbon */}
          <div className="absolute top-0 right-0 bg-amber-400 text-[#06101e] font-bold text-[10px] tracking-widest uppercase px-5 py-1.5">
            #1 Portugal
          </div>

          {/* Corner suit decoration */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 right-4 text-7xl font-serif text-amber-500/[0.06] select-none pointer-events-none leading-none"
          >
            ♠
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              {/* Logo */}
              <div className="shrink-0 flex justify-center md:justify-start">
                <div className="relative w-28 h-28 bg-black border border-amber-400/30 flex items-center justify-center p-3">
                  <Image
                    src={topCasino.logo || "/placeholder.svg"}
                    alt={topCasino.name}
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                  {/* Rating badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-400 text-[#06101e] font-bold px-3 py-0.5 text-sm flex items-center gap-1 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-current" />
                    {topCasino.rating}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-xl md:text-2xl text-white mb-1">{topCasino.name}</h3>
                <p className="text-amber-400 text-2xl md:text-3xl font-serif font-bold mb-4">{topCasino.bonus}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-1.5 mb-4">
                  {topCasino.features.map((feature, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-white/60 text-sm font-sans">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center md:justify-start gap-6">
                  <span className="flex items-center gap-1.5 text-white/35 text-xs font-sans">
                    <Shield className="w-3.5 h-3.5 text-amber-400/60" />
                    Licenciado SRIJ
                  </span>
                  <span className="flex items-center gap-1.5 text-white/35 text-xs font-sans">
                    <Zap className="w-3.5 h-3.5 text-amber-400/60" />
                    Pagamentos Rápidos
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="shrink-0 flex flex-col items-center gap-3">
                <Link
                  href={topCasino.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-[#06101e] font-bold text-sm tracking-wider uppercase px-8 py-3.5 transition-colors duration-200 whitespace-nowrap"
                >
                  Obter Bónus
                </Link>
                <span className="text-white/25 text-xs font-sans">
                  {topCasino.reviews.toLocaleString()} avaliações
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
