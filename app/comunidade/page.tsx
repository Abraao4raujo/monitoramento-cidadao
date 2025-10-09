import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users } from "lucide-react"
import Link from "next/link"

export default function ComunidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Comunidade e Oficinas</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Aprenda a usar dados abertos para prevenção da violência e reivindicação de melhorias na sua comunidade
            </p>
          </div>

          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>Sobre o Projeto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                O Monitoramento Cidadão é um projeto acadêmico de extensão em Ciência da Computação, desenvolvido com
                foco na segurança pública de Maceió – AL. Nossa missão é democratizar o acesso a dados sobre
                criminalidade e empoderar a comunidade com informações para promover mudanças positivas.
              </p>
              <p className="text-muted-foreground">
                Através de oficinas e materiais educativos, ensinamos cidadãos, organizações comunitárias e gestores
                públicos a interpretar e utilizar dados abertos para identificar padrões, propor soluções e cobrar ações
                das autoridades competentes.
              </p>
            </CardContent>
          </Card>


          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Entre em Contato</CardTitle>
              <CardDescription>Tem dúvidas ou sugestões? Nossa equipe está pronta para ajudar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">monitoramentocidadao@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Telefone</p>
                  <p className="text-sm text-muted-foreground">(82) 3333-4444</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
