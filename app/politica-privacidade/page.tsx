import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl md:text-5xl font-semibold font-serif mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground">topportugalcasino.com</p>
            <p className="text-sm text-muted-foreground mt-1">
              Última atualização:{" "}
              {new Date().toLocaleDateString("pt-PT", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                O TopPortugalCasino.com está comprometido em proteger a sua privacidade e os seus dados pessoais.
                Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e protegemos as suas
                informações quando visita o nosso website de análises e rankings de casinos online em Portugal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao utilizar o nosso website, concorda com a recolha e utilização de informações de acordo com esta
                política, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
              </p>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-6">2. Informações que Recolhemos</h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-3">2.1 Informações Fornecidas Diretamente</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Podemos recolher informações que nos fornece diretamente quando:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-1">
                  <li>Se regista para receber a nossa newsletter de ofertas e bónus de casinos</li>
                  <li>Preenche formulários de contacto no site</li>
                  <li>Participa em inquéritos ou promoções</li>
                  <li>Comunica connosco via email ou chat</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">2.2 Informações Recolhidas Automaticamente</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Quando visita o TopPortugalCasino.com, recolhemos automaticamente certas informações sobre o seu
                  dispositivo e comportamento de navegação, incluindo páginas visitadas, duração da visita e origem do
                  tráfego.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Para mais informações, consulte a nossa{" "}
                  <Link href="/politica-cookies" className="text-primary hover:underline font-medium">
                    Política de Cookies
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-6">
                3. Como Utilizamos as Suas Informações
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Fornecer serviços", desc: "Operar, manter e melhorar o nosso website de rankings de casinos" },
                  { title: "Comunicação", desc: "Enviar newsletters com as melhores ofertas e bónus de casinos em Portugal" },
                  { title: "Personalização", desc: "Personalizar recomendações de casinos com base nas suas preferências" },
                  { title: "Segurança", desc: "Detetar, prevenir e resolver problemas técnicos e de segurança" },
                ].map((item) => (
                  <div key={item.title} className="bg-muted/30 rounded-lg p-4 border border-border">
                    <p className="font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">4. Partilha de Informações</h2>
              <p className="text-foreground font-medium mb-4">
                Não vendemos, alugamos nem comercializamos as suas informações pessoais a terceiros.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No entanto, podemos partilhar informações com parceiros de serviço que nos auxiliam na operação do
                site, com operadores de casinos parceiros para efeitos de afiliação, ou quando exigido por lei ou
                autoridade reguladora.
              </p>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">5. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger as suas
                informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  Nenhum método de transmissão pela internet é 100% seguro. Embora nos esforcemos para proteger as
                  suas informações, não podemos garantir a sua segurança absoluta.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">6. Os Seus Direitos (RGPD)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD), tem os seguintes direitos
                relativamente aos seus dados pessoais:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Direito de acesso:</strong> Solicitar uma cópia das suas
                  informações pessoais que tratamos
                </li>
                <li>
                  <strong className="text-foreground">Direito de retificação:</strong> Corrigir informações incorretas
                  ou incompletas
                </li>
                <li>
                  <strong className="text-foreground">Direito ao apagamento:</strong> Solicitar a eliminação dos seus
                  dados pessoais
                </li>
                <li>
                  <strong className="text-foreground">Direito de oposição:</strong> Opor-se ao tratamento para fins de
                  marketing direto
                </li>
                <li>
                  <strong className="text-foreground">Direito à portabilidade:</strong> Receber os seus dados num
                  formato estruturado e legível por máquina
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">7. Jogo Responsável</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O TopPortugalCasino.com promove ativamente o jogo responsável e seguro. O jogo deve ser sempre uma
                forma de entretenimento, nunca uma fonte de rendimento ou uma obrigação. Se sentir que o jogo está
                a afetar negativamente a sua vida, procure ajuda.
              </p>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="font-medium text-primary mb-2">Recursos de Apoio ao Jogo Responsável:</p>
                <ul className="text-sm space-y-2">
                  <li>
                    <a
                      href="https://www.jogoresponsavel.pt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Jogo Responsável Portugal — jogoresponsavel.pt
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.icad.pt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      SICAD — Serviço de Intervenção nos Comportamentos Aditivos
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gamcare.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GamCare — Apoio internacional
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-semibold font-serif mb-4">8. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se tiver questões relacionadas com esta Política de Privacidade ou desejar exercer os seus direitos
                RGPD, pode contactar-nos através do formulário disponível em{" "}
                <span className="text-primary font-medium">topportugalcasino.com</span>. Responderemos ao seu pedido
                no prazo máximo de 30 dias úteis.
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
