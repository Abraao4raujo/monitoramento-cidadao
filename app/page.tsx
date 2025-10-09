import { Shield, AlertTriangle, Users, TrendingDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import InteractiveMap from "@/components/interactive-map"
import StatsOverview from "@/components/stats-overview"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-balance">Monitoramento Cidadão</h1>
                <p className="text-sm text-muted-foreground">Maceió/AL 2025</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link
                href="/dados"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Dados
              </Link>
              <Link
                href="/comunidade"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Comunidade
              </Link>
              <Link href="/relatar">
                <Button className="bg-primary hover:bg-primary/90">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Relatar Ocorrência
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Dados Abertos para uma Cidade Mais Segura
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Plataforma colaborativa de monitoramento da violência urbana em Maceió. Acesse dados oficiais e contribua
            anonimamente para construir uma comunidade mais informada.
          </p>
        </div>

        <StatsOverview />
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Mapa de Ocorrências</h3>
          <p className="text-muted-foreground">Visualize os índices de criminalidade por bairro em Maceió</p>
        </div>
        <InteractiveMap />
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Relatar Ocorrência</CardTitle>
              <CardDescription>
                Contribua anonimamente com informações sobre situações de violência na sua região
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/relatar">
                <Button className="w-full bg-primary hover:bg-primary/90">Fazer Relato</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Dados Oficiais</CardTitle>
              <CardDescription>Acesse estatísticas e gráficos detalhados sobre criminalidade em Maceió</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dados">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Estatísticas
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Comunidade</CardTitle>
              <CardDescription>Participe de oficinas e aprenda a usar dados abertos para prevenção</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/comunidade">
                <Button variant="outline" className="w-full bg-transparent">
                  Saiba Mais
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Alertas Recentes</h3>
          <p className="text-muted-foreground">Últimas notificações e relatos da comunidade</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { bairro: "Pajuçara", tipo: "Furto", tempo: "2 horas atrás" },
            { bairro: "Ponta Verde", tipo: "Roubo", tempo: "5 horas atrás" },
            { bairro: "Farol", tipo: "Assalto", tempo: "8 horas atrás" },
            { bairro: "Jatiúca", tipo: "Furto", tempo: "12 horas atrás" },
          ].map((alert, i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold">{alert.bairro}</h4>
                      <span className="text-xs text-muted-foreground">{alert.tempo}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Tipo: {alert.tipo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-card/50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-semibold">Monitoramento Cidadão</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Projeto acadêmico de extensão em Ciência da Computação, focado em segurança pública.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/dados" className="hover:text-primary transition-colors">
                    Dados Abertos
                  </Link>
                </li>
                <li>
                  <Link href="/comunidade" className="hover:text-primary transition-colors">
                    Oficinas
                  </Link>
                </li>
                <li>
                  <Link href="/relatar" className="hover:text-primary transition-colors">
                    Relatar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-sm text-muted-foreground">
                Para dúvidas ou sugestões sobre a plataforma, entre em contato com a equipe do projeto.
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Monitoramento Cidadão - Maceió/AL. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
