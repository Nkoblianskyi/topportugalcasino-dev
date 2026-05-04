export function TopSitesPortugalSection() {
  const pillars = [
    {
      roman: "I",
      title: "Regulamentação SRIJ",
      description:
        "Modelo regulatório reconhecido internacionalmente pela sua eficácia e rigor. Todos os operadores são auditados continuamente.",
    },
    {
      roman: "II",
      title: "Licenças Obrigatórias",
      description:
        "Operadores verificados através de um processo rigoroso de idoneidade financeira e técnica antes de receberem autorização.",
    },
    {
      roman: "III",
      title: "Ofertas Competitivas",
      description:
        "Bónus atrativos, promoções regulares e programas de fidelização exclusivos para jogadores portugueses.",
    },
    {
      roman: "IV",
      title: "Pagamentos Locais",
      description:
        "MB Way, Multibanco, transferências bancárias e cartões. Todas as transações processadas em euros.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#0a1628] text-white relative overflow-hidden">
      {/* Top & bottom gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      {/* Corner brackets */}
      <div aria-hidden="true" className="absolute top-8 left-8 w-16 h-16 border-t border-l border-amber-500/20" />
      <div aria-hidden="true" className="absolute top-8 right-8 w-16 h-16 border-t border-r border-amber-500/20" />
      <div aria-hidden="true" className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-amber-500/20" />
      <div aria-hidden="true" className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-amber-500/20" />

      {/* Background roulette circle */}
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-amber-500/5 opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-amber-500/5 opacity-60"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-14 md:mb-16">
          <div>
            <span className="text-amber-400 text-xs tracking-[0.35em] uppercase mb-5 block font-sans">
              Portugal
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.05]">
              Mercado Regulamentado
              <span className="block text-amber-400 italic">Desde 2015</span>
            </h2>
          </div>
          <div className="flex items-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-amber-400/40" />
                <span className="text-amber-400/60 text-xs tracking-widest uppercase font-sans">
                  Enquadramento Legal
                </span>
              </div>
              <p className="text-white/60 text-lg leading-relaxed">
                Portugal estabeleceu um dos mercados de jogos online mais respeitados da Europa. Sob supervisão do SRIJ,
                garante padrões elevados de segurança e proteção ao consumidor em cada operação.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-amber-500/10">
          {pillars.map((p) => (
            <div
              key={p.roman}
              className="group bg-[#0a1628] p-8 relative overflow-hidden hover:bg-[#0d1c30] transition-colors duration-300"
            >
              {/* Roman numeral */}
              <span
                aria-hidden="true"
                className="text-[5rem] font-serif text-amber-500/10 block mb-5 leading-none select-none"
              >
                {p.roman}
              </span>

              {/* Gold line that grows on hover */}
              <div className="w-6 h-0.5 bg-amber-400/40 group-hover:w-12 transition-all duration-300 mb-4" />

              <h3 className="text-base font-serif font-semibold mb-3 text-white group-hover:text-amber-300 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed font-sans">{p.description}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
