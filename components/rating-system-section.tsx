export function RatingSystemSection() {
  const steps = [
    {
      number: "01",
      suit: "♠",
      title: "Verificação Legal",
      description:
        "Confirmamos que cada casino possui licença válida e activa emitida pelo SRIJ, garantindo operação 100% legal em Portugal e conformidade com a lei.",
    },
    {
      number: "02",
      suit: "♥",
      title: "Análise de Segurança",
      description:
        "Testamos protocolos de encriptação SSL, políticas de proteção de dados pessoais e a robustez dos sistemas de pagamento adoptados pelo operador.",
    },
    {
      number: "03",
      suit: "♦",
      title: "Avaliação de Bónus",
      description:
        "Examinamos em detalhe as ofertas de boas-vindas, condições de rollover, freespins disponíveis e a qualidade geral das promoções recorrentes.",
    },
    {
      number: "04",
      suit: "♣",
      title: "Teste de Usabilidade",
      description:
        "Avaliamos a navegação, velocidade de carregamento, compatibilidade mobile e a qualidade do suporte ao cliente em língua portuguesa.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#06101e] text-white relative overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      {/* Decorative background suit */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-serif text-amber-500/[0.025] select-none pointer-events-none leading-none"
      >
        ♦
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-amber-400/40" />
            <span className="text-amber-400 text-xs tracking-[0.35em] uppercase font-sans">Metodologia</span>
            <div className="h-px w-16 bg-amber-400/40" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Como <span className="text-amber-400 italic">Avaliamos</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base font-sans leading-relaxed">
            Processo transparente em quatro etapas para garantir recomendações fiáveis e imparciais
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-[#06101e] p-8 md:p-10 overflow-hidden hover:bg-[#0a1628] transition-colors duration-300"
            >
              {/* Large number watermark */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 text-7xl font-serif text-amber-500/8 select-none leading-none"
              >
                {step.number}
              </span>

              {/* Suit icon */}
              <div className="w-11 h-11 flex items-center justify-center border border-amber-400/20 bg-amber-400/5 mb-5">
                <span className="text-amber-400 text-xl font-serif">{step.suit}</span>
              </div>

              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-sans">{step.description}</p>

              {/* Bottom hover bar */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Score note */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="border border-amber-400/20 bg-amber-400/5 px-8 py-5 text-center">
            <p className="text-white/60 text-sm font-sans">
              A pontuação final{" "}
              <span className="text-amber-400 font-semibold">(0–10)</span> reflecte o desempenho global em
              todas as etapas de avaliação
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
