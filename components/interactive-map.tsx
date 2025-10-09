"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ZoomIn, ZoomOut, Layers } from "lucide-react"

export default function InteractiveMap() {
  const [selectedFilter, setSelectedFilter] = useState("todos")

  const filters = [
    { id: "todos", label: "Todos", count: 1247 },
    { id: "homicidios", label: "Homicídios", count: 89 },
    { id: "roubos", label: "Roubos", count: 456 },
    { id: "furtos", label: "Furtos", count: 523 },
    { id: "feminicidios", label: "Feminicídios", count: 12 },
    { id: "outros", label: "Outros", count: 167 },
  ]

  const neighborhoods = [
    { name: "Pajuçara", incidents: 89, x: 45, y: 35, severity: "high" },
    { name: "Ponta Verde", incidents: 67, x: 55, y: 40, severity: "medium" },
    { name: "Jatiúca", incidents: 123, x: 65, y: 30, severity: "high" },
    { name: "Farol", incidents: 45, x: 35, y: 50, severity: "medium" },
    { name: "Centro", incidents: 156, x: 40, y: 60, severity: "high" },
    { name: "Benedito Bentes", incidents: 234, x: 25, y: 70, severity: "critical" },
    { name: "Cidade Universitária", incidents: 78, x: 50, y: 55, severity: "medium" },
    { name: "Serraria", incidents: 98, x: 30, y: 45, severity: "high" },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-destructive"
      case "high":
        return "bg-accent"
      case "medium":
        return "bg-primary"
      default:
        return "bg-secondary"
    }
  }

  const getSeveritySize = (incidents: number) => {
    if (incidents > 200) return "w-20 h-20"
    if (incidents > 100) return "w-16 h-16"
    if (incidents > 50) return "w-12 h-12"
    return "w-10 h-10"
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="bg-card border-border">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className={selectedFilter === filter.id ? "bg-primary" : ""}
              >
                {filter.label}
                <Badge variant="secondary" className="ml-2">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Map Container */}
      <Card className="bg-card border-border overflow-hidden">
        <CardContent className="p-0">
          <div className="relative bg-muted/20 aspect-[16/10] overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/40 to-muted/10">
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(var(--color-border)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-border)) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            {/* Neighborhood Markers */}
            {neighborhoods.map((neighborhood, i) => (
              <div
                key={i}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${neighborhood.x}%`, top: `${neighborhood.y}%` }}
              >
                <div
                  className={`${getSeverityColor(neighborhood.severity)} ${getSeveritySize(neighborhood.incidents)} rounded-full opacity-70 hover:opacity-100 transition-all flex items-center justify-center shadow-lg hover:scale-110`}
                >
                  <span className="text-xs font-bold text-white">{neighborhood.incidents}</span>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card border border-border rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <p className="text-sm font-semibold">{neighborhood.name}</p>
                  <p className="text-xs text-muted-foreground">{neighborhood.incidents} ocorrências</p>
                </div>
              </div>
            ))}

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button size="icon" variant="secondary" className="bg-card border border-border">
                <Search className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="bg-card border border-border">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="bg-card border border-border">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="bg-card border border-border">
                <Layers className="h-4 w-4" />
              </Button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-card border border-border rounded-lg p-4 shadow-xl">
              <h4 className="text-sm font-semibold mb-3">Nível de Ocorrências</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-destructive"></div>
                  <span className="text-xs text-muted-foreground">Crítico (200+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-accent"></div>
                  <span className="text-xs text-muted-foreground">Alto (100-200)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <span className="text-xs text-muted-foreground">Médio (50-100)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-secondary"></div>
                  <span className="text-xs text-muted-foreground">Baixo (&lt;50)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
