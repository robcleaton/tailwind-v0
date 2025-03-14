import { Card, CardContent } from "@/components/ui/card"

export default function ColorPalette() {
  const colors = [
    { name: "Primary", base: "bg-primary", text: "text-primary", foreground: "bg-primary-foreground" },
    { name: "Secondary", base: "bg-secondary", text: "text-secondary", foreground: "bg-secondary-foreground" },
    { name: "Accent", base: "bg-accent", text: "text-accent", foreground: "bg-accent-foreground" },
    { name: "Muted", base: "bg-muted", text: "text-muted", foreground: "bg-muted-foreground" },
    { name: "Card", base: "bg-card", text: "text-card", foreground: "bg-card-foreground" },
    { name: "Destructive", base: "bg-destructive", text: "text-destructive", foreground: "bg-destructive-foreground" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {colors.map((color) => (
        <Card key={color.name} className="overflow-hidden">
          <div className={`h-24 ${color.base}`} />
          <CardContent className="p-4 space-y-2">
            <h4 className="font-medium">{color.name}</h4>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Base</span>
                <code className="text-xs bg-muted px-1 py-0.5 rounded">{color.base}</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Text</span>
                <code className="text-xs bg-muted px-1 py-0.5 rounded">{color.text}</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Foreground</span>
                <code className="text-xs bg-muted px-1 py-0.5 rounded">{color.foreground}</code>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

