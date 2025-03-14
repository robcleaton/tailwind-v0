import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Tailwind Styleguide</span>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link href="#buttons" className="text-sm font-medium transition-colors hover:text-primary">
              Buttons
            </Link>
            <Link href="#cards" className="text-sm font-medium transition-colors hover:text-primary">
              Cards
            </Link>
            <Link href="#form-elements" className="text-sm font-medium transition-colors hover:text-primary">
              Forms
            </Link>
            <Link href="#feedback-elements" className="text-sm font-medium transition-colors hover:text-primary">
              Feedback
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="outline" size="sm">
            GitHub
          </Button>
          <Button size="sm">Download</Button>
        </div>
      </div>
    </header>
  )
}

