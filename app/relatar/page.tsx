"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, ArrowLeft, FileText, Lock, MapPin, Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RelatarPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
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
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Relato Enviado com Sucesso</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Obrigado por contribuir com a segurança da nossa comunidade. Seu relato foi registrado de forma anônima e
              segura.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="cursor-pointer">Voltar ao Início</Button>
              </Link>
              <Button onClick={() => setSubmitted(false)} className="bg-primary hover:bg-primary/90 cursor-pointer">
                Fazer Outro Relato
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-primary/90 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Relatar Ocorrência</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Contribua anonimamente com informações sobre situações de violência. Seus dados são protegidos e ajudam a
              construir uma comunidade mais segura.
            </p>
          </div>

          <Card className="bg-primary/5 border-primary/20 mb-8">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-2 rounded-lg h-fit">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Seu relato é anônimo e seguro</h3>
                  <p className="text-sm text-muted-foreground">
                    Não coletamos dados pessoais identificáveis. Todas as informações são criptografadas e utilizadas
                    apenas para fins estatísticos e de prevenção.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Formulário de Relato</CardTitle>
              <CardDescription>Preencha as informações abaixo. Todos os campos são obrigatórios.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bairro" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Bairro
                  </Label>
                  <Select required>
                    <SelectTrigger id="bairro">
                      <SelectValue placeholder="Selecione o bairro" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pajucara">Pajuçara</SelectItem>
                      <SelectItem value="ponta-verde">Ponta Verde</SelectItem>
                      <SelectItem value="jatiuca">Jatiúca</SelectItem>
                      <SelectItem value="farol">Farol</SelectItem>
                      <SelectItem value="centro">Centro</SelectItem>
                      <SelectItem value="benedito-bentes">Benedito Bentes</SelectItem>
                      <SelectItem value="cidade-universitaria">Cidade Universitária</SelectItem>
                      <SelectItem value="serraria">Serraria</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rua">Rua ou Referência (opcional)</Label>
                  <Input id="rua" placeholder="Ex: Próximo ao mercado central" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipo" className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-accent" />
                    Tipo de Ocorrência
                  </Label>
                  <Select required>
                    <SelectTrigger id="tipo">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="homicidio">Homicídio</SelectItem>
                      <SelectItem value="roubo">Roubo</SelectItem>
                      <SelectItem value="furto">Furto</SelectItem>
                      <SelectItem value="feminicidio">Feminicídio</SelectItem>
                      <SelectItem value="agressao">Agressão</SelectItem>
                      <SelectItem value="trafico">Tráfico de Drogas</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao" className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-secondary" />
                    Descrição
                  </Label>
                  <Textarea
                    id="descricao"
                    placeholder="Descreva brevemente o que aconteceu. Não inclua informações pessoais."
                    className="bg-background min-h-32"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Evite incluir nomes, endereços específicos ou outras informações que possam identificar pessoas.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="data">Data da Ocorrência</Label>
                    <Input id="data" type="date" className="bg-background" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hora">Horário Aproximado</Label>
                    <Input id="hora" type="time" className="bg-background" />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 cursor-pointer" size="lg">
                    <Lock className="h-4 w-4 mr-2" />
                    Enviar Relato Anônimo
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Ao enviar, você concorda que as informações serão utilizadas para fins estatísticos e de prevenção.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
