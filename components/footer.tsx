import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#020a14] text-white relative overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 top-6 text-[260px] font-serif text-amber-500/[0.025] select-none pointer-events-none leading-none"
      >
        ♠
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
        {/* Brand */}
        <div className="text-center mb-14 md:mb-16">
          <span className="text-amber-400/50 text-[10px] tracking-[0.4em] uppercase font-sans block mb-3">
            Portugal
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-wide mb-4">
            <span className="text-amber-400">Top</span>
            <span className="text-white">Portugal</span>
            <span className="text-amber-400">Casino</span>
          </h2>
          {/* Suit divider */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-20 bg-amber-400/20" />
            <span className="text-amber-400/30 text-sm font-serif tracking-widest">♠ ♥ ♦ ♣</span>
            <div className="h-px w-20 bg-amber-400/20" />
          </div>
          <p className="text-white/40 text-sm max-w-md mx-auto font-sans font-light leading-relaxed">
            O seu guia premium para casinos online licenciados em Portugal
          </p>
          <a
            href="mailto:contact@topportugalcasino.com"
            className="inline-block mt-5 text-amber-300/80 hover:text-amber-300 text-sm font-sans tracking-wide transition-colors"
          >
            contact@topportugalcasino.com
          </a>
        </div>

        {/* Links grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-14 md:mb-16">
          <div className="text-center md:text-left">
            <h4 className="text-amber-400 text-[10px] tracking-[0.25em] uppercase font-sans mb-6">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="text-white/40 hover:text-amber-300 transition-colors duration-200 font-sans font-light"
                >
                  Página Inicial
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-amber-400 text-[10px] tracking-[0.25em] uppercase font-sans mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/politica-privacidade"
                  className="text-white/40 hover:text-amber-300 transition-colors duration-200 font-sans font-light"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-cookies"
                  className="text-white/40 hover:text-amber-300 transition-colors duration-200 font-sans font-light"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-amber-400 text-[10px] tracking-[0.25em] uppercase font-sans mb-6">
              Jogo Responsável
            </h4>
            <p className="text-sm text-white/40 font-sans font-light mb-3 leading-relaxed">
              Jogue com responsabilidade. Apenas maiores de 18 anos.
            </p>
            <p className="text-sm text-white/20 font-sans font-light">
              O jogo pode causar dependência.
            </p>
          </div>
        </div>

        {/* Regulatory logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 py-10 border-t border-white/8">
          <Link
            href="https://www.jogoresponsavel.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-80 transition-opacity"
          >
            <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 w-auto" />
          </Link>
          <Link
            href="https://www.srij.turismodeportugal.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-80 transition-opacity"
          >
            <img src="/srij.svg" alt="SRIJ" className="h-8 w-auto" />
          </Link>
          <Link
            href="https://www.icad.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-80 transition-opacity"
          >
            <img src="/icad.png" alt="ICAD" className="h-9 w-auto bg-white p-1.5 rounded" />
          </Link>
          <Link
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-80 transition-opacity"
          >
            <img src="/gamecare.svg" alt="GamCare" className="h-9 w-auto bg-white p-1.5 rounded" />
          </Link>
          <Link
            href="https://www.gambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-80 transition-opacity"
          >
            <img src="/gamble.webp" alt="GambleAware" className="h-9 w-auto bg-white p-1.5 rounded" />
          </Link>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center space-y-3 border-t border-white/5">
          <p className="text-xs text-white/25 font-sans font-light">
            Este site contém links de afiliados. Podemos receber comissões quando clica nestes links.
          </p>
          <p className="text-xs text-white/20 tracking-wider font-sans">
            © 2026 topportugalcasino.com
          </p>
        </div>
      </div>
    </footer>
  )
}
