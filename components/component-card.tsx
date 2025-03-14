"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComponentCardProps {
  title: string
  children: React.ReactNode
  code: string
  className?: string
}

export default function ComponentCard({ title, children, code, className }: ComponentCardProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="p-4">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 border-y bg-muted/40 flex items-center justify-center">{children}</CardContent>
      <CardFooter className="p-4 flex justify-between items-center bg-muted/20">
        <div className="text-xs text-muted-foreground font-mono truncate max-w-[calc(100%-40px)]">
          {code.length > 50 ? code.substring(0, 50) + "..." : code}
        </div>
        <Button variant="ghost" size="icon" onClick={copyToClipboard} className="h-8 w-8">
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

