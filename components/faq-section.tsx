"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Os casinos online são legais em Portugal?",
    answer:
      "Sim, completamente legais desde 2015. O mercado português de jogos online é regulamentado pelo SRIJ (Serviço de Regulação e Inspeção de Jogos), entidade dependente do Turismo de Portugal. Todos os operadores devem possuir licença válida para operar legalmente no território nacional.",
  },
  {
    question: "Como verificar se um casino tem licença portuguesa?",
    answer:
      "Consulte a lista oficial de operadores licenciados no site do SRIJ (www.srij.turismodeportugal.pt). Todos os casinos legais exibem o número de licença no rodapé do site. Os casinos recomendados no TopPortugalCasino.com possuem licença SRIJ válida e verificada pela nossa equipa.",
  },
  {
    question: "Que métodos de pagamento estão disponíveis?",
    answer:
      "Os casinos portugueses suportam MB Way, Multibanco, transferências bancárias, cartões Visa e Mastercard, Neteller, Skrill e outras carteiras digitais. Todas as transações são processadas em euros. Os depósitos são geralmente instantâneos.",
  },
  {
    question: "Quanto tempo demoram os levantamentos de fundos?",
    answer:
      "Os prazos variam por método: carteiras digitais (0–24 horas), cartões de crédito/débito (1–3 dias úteis), transferências bancárias (1–5 dias úteis). Os casinos licenciados devem processar pedidos de levantamento dentro dos prazos estabelecidos pelo SRIJ.",
  },
  {
    question: "É possível jogar através de dispositivos móveis?",
    answer:
      "Sim, todos os casinos modernos oferecem versões móveis optimizadas ou aplicações dedicadas para iOS e Android. Pode aceder à totalidade dos jogos e funcionalidades através de qualquer smartphone ou tablet com ligação à internet.",
  },
  {
    question: "Como funcionam os bónus de boas-vindas?",
    answer:
      "Os bónus de boas-vindas são ofertas promocionais para novos jogadores, geralmente consistindo num matching percentual do primeiro depósito ou freespins. Todos os bónus têm requisitos de apostas (rollover) que devem ser cumpridos antes de poder levantar os ganhos. Leia sempre os termos e condições.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-[#06101e] relative overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      {/* Background decorative suits */}
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 text-[220px] font-serif text-amber-500/[0.03] select-none pointer-events-none leading-none"
      >
        ♥
      </div>
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 text-[160px] font-serif text-amber-500/[0.03] select-none pointer-events-none leading-none"
      >
        ♦
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-amber-400/40" />
            <span className="text-amber-400 text-xs tracking-[0.35em] uppercase font-sans">FAQ</span>
            <div className="h-px w-16 bg-amber-400/40" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Perguntas <span className="text-amber-400 italic">Frequentes</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-base font-sans leading-relaxed">
            Respostas às questões mais comuns sobre casinos online em Portugal
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-white/8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/8">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="flex items-center gap-5">
                  <span className="text-amber-400/40 font-serif text-base shrink-0 w-7">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/85 font-sans font-medium text-base group-hover:text-amber-300 transition-colors duration-200">
                    {faq.question}
                  </span>
                </span>
                <span
                  className={`shrink-0 ml-4 w-7 h-7 flex items-center justify-center border border-amber-400/30 text-amber-400 text-xl leading-none transition-all duration-300 ${
                    openIndex === index ? "rotate-45 bg-amber-400/10" : "bg-transparent"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-64 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-white/50 leading-relaxed text-sm font-sans pl-12 pr-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
