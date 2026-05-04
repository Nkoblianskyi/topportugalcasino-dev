"use client"

function getCurrentDate(): string {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  const now = new Date()
  const day = now.getDate()
  const month = months[now.getMonth()]
  const year = now.getFullYear()
  return `${day} ${month} ${year}`
}

export function HeroSection() {
  const currentDate = getCurrentDate()

  return (
    <section className="relative h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Casino background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/casino-hero-bg.jpg')" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#060810]/75" />

      {/* Subtle gold vignette edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(212,175,55,0.08)]" />

      {/* Decorative card suits */}
      <div className="absolute top-[20%] left-[6%] text-amber-500/12 text-5xl md:text-7xl font-serif select-none pointer-events-none">
        ♠
      </div>
      <div className="absolute top-[45%] right-[4%] text-amber-500/12 text-4xl md:text-6xl font-serif select-none pointer-events-none">
        ♦
      </div>
      <div className="absolute bottom-[15%] left-[72%] text-amber-500/10 text-3xl md:text-5xl font-serif select-none pointer-events-none">
        ♣
      </div>
      <div className="absolute top-[12%] right-[28%] text-amber-500/10 text-2xl md:text-4xl font-serif select-none pointer-events-none">
        ♥
      </div>

      {/* Thin gold vertical accents */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/15 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-400/10 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Top label */}
        <div className="inline-flex items-center gap-3 mb-3 md:mb-5">
          <span className="w-6 md:w-10 h-px bg-amber-400/60" />
          <span className="text-[9px] md:text-[11px] tracking-[0.25em] text-amber-400/90 uppercase font-light">
            Atualizado: {currentDate}
          </span>
          <span className="w-6 md:w-10 h-px bg-amber-400/60" />
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light leading-[0.95] mb-3 md:mb-5">
          <span className="block text-white">Os Melhores Casinos</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 font-semibold mt-1 md:mt-2">
            em Portugal
          </span>
        </h1>

        <p className="text-xs md:text-sm text-white/65 font-light max-w-lg mx-auto mb-4 md:mb-6 leading-relaxed">
          Rankings exclusivos de casinos licenciados pelo SRIJ — bónus, análises e as melhores ofertas para jogadores portugueses.
        </p>

        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
          <div className="text-center">
            <span className="block text-xl md:text-2xl font-serif text-amber-400 mb-0.5">100%</span>
            <span className="text-[9px] md:text-[11px] tracking-[0.15em] text-white/50 uppercase">Legais &amp; SRIJ</span>
          </div>
          <div className="w-px h-10 bg-amber-400/20 hidden md:block self-center" />
          <div className="text-center">
            <span className="block text-xl md:text-2xl font-serif text-amber-400 mb-0.5">5+</span>
            <span className="text-[9px] md:text-[11px] tracking-[0.15em] text-white/50 uppercase">Casinos Analisados</span>
          </div>
          <div className="w-px h-10 bg-amber-400/20 hidden md:block self-center" />
          <div className="text-center">
            <span className="block text-xl md:text-2xl font-serif text-amber-400 mb-0.5">24/7</span>
            <span className="text-[9px] md:text-[11px] tracking-[0.15em] text-white/50 uppercase">Suporte</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
