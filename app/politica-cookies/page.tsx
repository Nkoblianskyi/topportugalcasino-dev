import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-[60px] md:pt-[72px]">
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-semibold font-serif mb-4">Política de Cookies</h1>
            <p className="text-muted-foreground">topportugalcasino.com</p>
            <p className="text-sm text-muted-foreground mt-1">
              Última atualização:{" "}
              {new Date().toLocaleDateString("pt-PT", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                O TopPortugalCasino.com utiliza cookies e tecnologias semelhantes para melhorar a sua experiência de
                navegação, analisar o tráfego do site e personalizar conteúdo relevante para jogadores portugueses.
                Esta Política de Cookies explica o que são cookies, como os utilizamos e como pode controlá-los.
              </p>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">2. O que são Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Estes
                ficheiros permitem que o site reconheça o seu dispositivo e memorize preferências sobre a sua visita,
                tornando a experiência de navegação mais personalizada e eficiente.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Tipos:</strong> Os cookies podem ser "persistentes" (permanecem
                  até expirarem ou serem eliminados) ou "de sessão" (eliminados automaticamente quando fecha o
                  navegador).
                </p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-6">3. Tipos de Cookies que Utilizamos</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-5 border border-border">
                  <h3 className="font-semibold text-primary mb-2">Cookies Necessários</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Essenciais para o funcionamento correto do website, incluindo a memória das suas preferências de
                    cookies. Não podem ser desativados.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-5 border border-border">
                  <h3 className="font-semibold text-primary mb-2">Cookies de Análise</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Permitem medir e melhorar o desempenho do site através de dados agregados e anónimos sobre o
                    comportamento dos visitantes.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-5 border border-border">
                  <h3 className="font-semibold text-primary mb-2">Cookies de Funcionalidade</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fornecem funcionalidades melhoradas, como memorizar preferências de idioma e personalização da
                    experiência de navegação.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-5 border border-border">
                  <h3 className="font-semibold text-primary mb-2">Cookies de Marketing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Utilizados para apresentar ofertas de casinos e bónus relevantes com base nos seus interesses e
                    historial de navegação.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">4. Cookies de Terceiros</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Alguns cookies são colocados por serviços de terceiros que aparecem nas nossas páginas. Não controlamos
                a definição destes cookies de terceiros.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Terceiros incluem:</strong> fornecedores de análise (Google
                Analytics), plataformas de publicidade, redes sociais, parceiros de afiliados de casinos e fornecedores
                de ferramentas de jogo responsável.
              </p>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">5. Como Gerir Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pode controlar e eliminar cookies através das configurações do seu navegador:
              </p>
              <div className="space-y-3">
                {[
                  { browser: "Google Chrome", path: "Definições → Privacidade e segurança → Cookies" },
                  { browser: "Mozilla Firefox", path: "Opções → Privacidade e Segurança → Cookies" },
                  { browser: "Safari", path: "Preferências → Privacidade → Cookies" },
                  { browser: "Microsoft Edge", path: "Definições → Cookies e permissões do site" },
                ].map((item) => (
                  <div key={item.browser} className="flex items-center gap-3 bg-muted/30 rounded-lg p-3">
                    <span className="font-medium text-sm">{item.browser}</span>
                    <span className="text-xs text-muted-foreground">{item.path}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/10 rounded-lg p-4 mt-4">
                <p className="text-sm text-foreground">
                  <strong>Nota:</strong> Se desativar cookies, algumas funcionalidades do TopPortugalCasino.com podem
                  não funcionar corretamente, nomeadamente a personalização de conteúdo e rankings.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">6. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se tiver questões sobre a nossa Política de Cookies ou sobre o tratamento dos seus dados, pode
                contactar-nos através do formulário de contacto disponível no nosso website em{" "}
                <span className="text-primary font-medium">topportugalcasino.com</span>.
              </p>
            </section>
          </div>

          <div className="text-center mt-10 pt-8 border-t border-border">
            <p className="text-lg font-semibold font-serif">TopPortugalCasino.com</p>
            <p className="text-sm text-muted-foreground mt-1">Todos os direitos reservados © 2026</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
