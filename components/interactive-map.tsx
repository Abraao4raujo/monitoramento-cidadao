"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function InteractiveMap() {

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
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      default:
        return "bg-blue-500"
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
      {/* Map Container */}
      <Card>
        <CardContent className="p-0">
          <div className="relative bg-slate-100 w-full h-[600px] overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-50">
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
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
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <p className="text-sm font-semibold">{neighborhood.name}</p>
                  <p className="text-xs text-gray-600">{neighborhood.incidents} ocorrências</p>
                </div>
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white border border-gray-200 rounded-lg p-4 shadow-xl">
              <h4 className="text-sm font-semibold mb-3">Nível de Ocorrências</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-xs text-gray-600">Crítico (200+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                  <span className="text-xs text-gray-600">Alto (100-200)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <span className="text-xs text-gray-600">Médio (50-100)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-gray-600">Baixo (&lt;50)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}