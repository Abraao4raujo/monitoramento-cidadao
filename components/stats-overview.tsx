"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, MapPin, TrendingDown, Users } from "lucide-react"

export default function StatsOverview() {
  const stats = [
    {
      label: "Ocorrências Registradas",
      value: "1,247",
      change: "-12%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-primary",
    },
    {
      label: "Bairros Monitorados",
      value: "52",
      change: "100%",
      trend: "neutral",
      icon: MapPin,
      color: "text-primary",
    },
    {
      label: "Relatos Comunitários",
      value: "384",
      change: "+23%",
      trend: "up",
      icon: Users,
      color: "text-primary",
    },
    {
      label: "Redução no Último Mês",
      value: "8.5%",
      change: "vs. mês anterior",
      trend: "neutral",
      icon: TrendingDown,
      color: "text-primary",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <Card key={i} className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2 rounded-lg bg-${stat.color.split("-")[1]}/10`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p
                className={`text-xs ${stat.trend === "down" ? "text-destructive" : stat.trend === "up" ? "text-primary" : "text-muted-foreground"}`}
              >
                {stat.change}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
