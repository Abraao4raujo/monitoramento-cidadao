"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BarChart3, TrendingDown, TrendingUp } from "lucide-react"
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
        <div className="mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Dados e Estatísticas</h1>
              <p className="text-lg text-muted-foreground">Acesse dados oficiais sobre criminalidade em Maceió</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/90 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center gap-1 text-chart-2 text-sm">
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
                <div className="bg-primary/90 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center gap-1 text-chart-2 text-sm">
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
                <div className="bg-primary/90 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
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
                <div className="bg-primary/90 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center gap-1 text-chart-2 text-sm">
                  <TrendingDown className="h-4 w-4" />
                  <span>-15%</span>
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">523</p>
              <p className="text-sm text-muted-foreground">Furtos</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 mb-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Tendência Mensal</CardTitle>
              <CardDescription>Ocorrências registradas por mês em 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-muted/20 rounded-lg p-6">
                <div className="h-full flex items-end justify-around gap-2">
                  {[65, 72, 58, 81, 69, 54, 48, 52, 45, 41, 38, 35].map((value, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full">
                      <div className="w-full flex flex-col justify-end flex-1">
                        <div
                          className="w-full bg-primary rounded-t transition-all hover:bg-primary/90"
                          style={{ height: `${value}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"][i]}
                      </span>
                    </div>
                  ))}
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
                          className={`text-sm flex items-center gap-1 ${neighborhood.change < 0 ? "text-chart-2" : "text-destructive"}`}
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
