export function AboutUsSection() {
  const features = [
    {
      number: "01",
      suit: "♠",
      title: "Especialistas em Casinos Portugueses",
      description:
        "A nossa equipa testa cada casino como um jogador real — fazemos depósitos, testamos levantamentos, contactamos o suporte e avaliamos cada detalhe da experiência. Só publicamos o que efetivamente funciona.",
    },
    {
      number: "02",
      suit: "♥",
      title: "Rankings Imparciais e Verificados",
      description:
        "As nossas classificações baseiam-se em critérios objectivos: licença SRIJ activa, RTP dos jogos, velocidade de pagamento, variedade de oferta e qualidade do serviço de apoio ao cliente.",
    },
    {
      number: "03",
      suit: "♦",
      title: "Apenas Operadores Licenciados pelo SRIJ",
      description:
        "Todos os casinos listados no TopPortugalCasino.com possuem licença válida emitida pelo Serviço de Regulação e Inspeção de Jogos. O seu dinheiro e os seus dados estão sempre protegidos.",
    },
  ]

  const stats = [
    { value: "5+", label: "Casinos Avaliados" },
    { value: "100%", label: "Licenciados SRIJ" },
    { value: "24/7", label: "Suporte ao Jogador" },
    { value: "18+", label: "Jogo Responsável" },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#0a1628] text-white relative overflow-hidden">
      {/* Top & bottom gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      {/* Large decorative suit - right */}
      <div
        aria-hidden="true"
        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[280px] font-serif text-amber-500/[0.04] select-none pointer-events-none leading-none"
      >
        ♠
      </div>
      {/* Large decorative suit - left bottom */}
      <div
        aria-hidden="true"
        className="absolute left-[-1rem] bottom-0 text-[200px] font-serif text-amber-500/[0.04] select-none pointer-events-none leading-none"
      >
        ♣
      </div>

      {/* Roulette ring decoration */}
      <div
        aria-hidden="true"
        className="absolute top-12 right-12 w-32 h-32 rounded-full border border-amber-500/10 opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute top-8 right-8 w-48 h-48 rounded-full border border-amber-500/5 opacity-40"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-14">
          {/* Left column */}
          <div className="md:col-span-5">
            <span className="text-amber-400 text-xs tracking-[0.35em] uppercase mb-5 block font-sans">
              Quem Somos
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.05] mb-6">
              A Referência em{" "}
              <span className="text-amber-400 italic">Casinos Online</span>{" "}
              em Portugal
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-amber-400" />
              <span className="text-amber-400/60 text-xs tracking-widest uppercase font-sans">
                Desde 2024
              </span>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              O <span className="text-amber-300 font-medium">TopPortugalCasino.com</span> é o guia mais completo e
              independente para jogadores portugueses. Analisamos os melhores casinos online licenciados pelo SRIJ com
              rigor e transparência.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              A nossa missão é simples: ajudá-lo a encontrar o casino certo, com os melhores bónus, jogos de qualidade
              e suporte em português — de forma segura e responsável.
            </p>

            {/* Divider with suits */}
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-amber-500/40 text-sm tracking-widest font-serif">♠ ♥ ♦ ♣</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>

          {/* Right column — feature cards */}
          <div className="md:col-span-7 flex flex-col gap-4">
            {features.map((f) => (
              <div
                key={f.number}
                className="group relative bg-white/[0.03] border border-white/8 hover:border-amber-400/40 transition-all duration-300 overflow-hidden"
              >
                {/* Left gold accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-amber-400/0 group-hover:bg-amber-400/80 transition-all duration-300" />

                <div className="flex items-start gap-5 p-6 md:p-7 pl-7 md:pl-8">
                  {/* Suit badge */}
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-amber-500/20 bg-amber-500/5">
                    <span className="text-amber-400 text-2xl font-serif leading-none">{f.suit}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-amber-500/30 font-serif text-sm">{f.number}</span>
                      <h3 className="text-white text-lg font-serif font-medium">{f.title}</h3>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-14 bg-white/5">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0a1628] text-center py-8 px-4">
              <p className="text-4xl md:text-5xl font-serif text-amber-400 mb-2">{s.value}</p>
              <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-sans">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
