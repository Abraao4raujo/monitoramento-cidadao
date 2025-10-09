"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, BarChart3, Download, TrendingDown, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function DadosPage() {
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
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Dados e Estatísticas</h1>
              <p className="text-lg text-muted-foreground">Acesse dados oficiais sobre criminalidade em Maceió</p>
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Exportar Dados
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Select defaultValue="2025">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="todos">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Tipo de Crime" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Tipos</SelectItem>
                <SelectItem value="homicidios">Homicídios</SelectItem>
                <SelectItem value="roubos">Roubos</SelectItem>
                <SelectItem value="furtos">Furtos</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="todos-bairros">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Bairro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos-bairros">Todos os Bairros</SelectItem>
                <SelectItem value="pajucara">Pajuçara</SelectItem>
                <SelectItem value="centro">Centro</SelectItem>
                <SelectItem value="benedito-bentes">Benedito Bentes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-secondary text-sm">
                  <TrendingDown className="h-4 w-4" />
                  <span>-12%</span>
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">1,247</p>
              <p className="text-sm text-muted-foreground">Total de Ocorrências</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-destructive/10 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-destructive" />
                </div>
                <div className="flex items-center gap-1 text-secondary text-sm">
                  <TrendingDown className="h-4 w-4" />
                  <span>-8%</span>
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">89</p>
              <p className="text-sm text-muted-foreground">Homicídios</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-accent" />
                </div>
                <div className="flex items-center gap-1 text-destructive text-sm">
                  <TrendingUp className="h-4 w-4" />
                  <span>+5%</span>
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">456</p>
              <p className="text-sm text-muted-foreground">Roubos</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-secondary" />
                </div>
                <div className="flex items-center gap-1 text-secondary text-sm">
                  <TrendingDown className="h-4 w-4" />
                  <span>-15%</span>
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">523</p>
              <p className="text-sm text-muted-foreground">Furtos</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Tendência Mensal</CardTitle>
              <CardDescription>Ocorrências registradas por mês em 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-muted/20 rounded-lg flex items-end justify-around p-6 gap-2">
                {[65, 72, 58, 81, 69, 54, 48, 52, 45, 41, 38, 35].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-primary rounded-t transition-all hover:bg-primary/80"
                      style={{ height: `${value}%` }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Distribuição por Tipo</CardTitle>
              <CardDescription>Proporção de cada tipo de ocorrência</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(
                      rgb(var(--color-primary)) 0% 42%,
                      rgb(var(--color-accent)) 42% 78%,
                      rgb(var(--color-secondary)) 78% 91%,
                      rgb(var(--color-destructive)) 91% 100%
                    )`,
                    }}
                  />
                  <div className="absolute inset-8 bg-card rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold">1,247</p>
                      <p className="text-sm text-muted-foreground">Total</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm">Furtos (42%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm">Roubos (36%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-sm">Outros (13%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-sm">Homicídios (9%)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Bairros com Maior Incidência</CardTitle>
            <CardDescription>Ranking dos 10 bairros com mais ocorrências registradas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Benedito Bentes", count: 234, change: -5 },
                { name: "Centro", count: 156, change: -8 },
                { name: "Jatiúca", count: 123, change: 3 },
                { name: "Serraria", count: 98, change: -12 },
                { name: "Pajuçara", count: 89, change: -7 },
                { name: "Cidade Universitária", count: 78, change: -15 },
                { name: "Ponta Verde", count: 67, change: 2 },
                { name: "Farol", count: 45, change: -10 },
              ].map((neighborhood, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 text-center font-bold text-muted-foreground">{i + 1}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{neighborhood.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{neighborhood.count} ocorrências</span>
                        <span
                          className={`text-sm flex items-center gap-1 ${neighborhood.change < 0 ? "text-secondary" : "text-destructive"}`}
                        >
                          {neighborhood.change < 0 ? (
                            <TrendingDown className="h-3 w-3" />
                          ) : (
                            <TrendingUp className="h-3 w-3" />
                          )}
                          {Math.abs(neighborhood.change)}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(neighborhood.count / 234) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
