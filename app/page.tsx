import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Info, AlertCircle } from "lucide-react"
import ColorPalette from "@/components/color-palette"
import ComponentCard from "@/components/component-card"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-10 px-4 md:px-6">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Tailwind CSS Styleguide</h2>
            <p className="text-muted-foreground max-w-3xl">
              A comprehensive collection of UI components built with Tailwind CSS. Use this styleguide as a reference
              for your design system.
            </p>
          </section>

          <Tabs defaultValue="components" className="space-y-4">
            <TabsList>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-8">
              {/* Buttons Section */}
              <section id="buttons" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight">Buttons</h3>
                  <Badge variant="outline">Interactive</Badge>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ComponentCard title="Primary Button" code="<Button>Primary Button</Button>">
                    <Button>Primary Button</Button>
                  </ComponentCard>

                  <ComponentCard title="Secondary Button" code='<Button variant="secondary">Secondary Button</Button>'>
                    <Button variant="secondary">Secondary Button</Button>
                  </ComponentCard>

                  <ComponentCard title="Outline Button" code='<Button variant="outline">Outline Button</Button>'>
                    <Button variant="outline">Outline Button</Button>
                  </ComponentCard>

                  <ComponentCard
                    title="Destructive Button"
                    code='<Button variant="destructive">Destructive Button</Button>'
                  >
                    <Button variant="destructive">Destructive Button</Button>
                  </ComponentCard>

                  <ComponentCard title="Ghost Button" code='<Button variant="ghost">Ghost Button</Button>'>
                    <Button variant="ghost">Ghost Button</Button>
                  </ComponentCard>

                  <ComponentCard title="Link Button" code='<Button variant="link">Link Button</Button>'>
                    <Button variant="link">Link Button</Button>
                  </ComponentCard>
                </div>
              </section>

              {/* Cards Section */}
              <section id="cards" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight">Cards</h3>
                  <Badge variant="outline">Layout</Badge>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ComponentCard
                    title="Basic Card"
                    code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`}
                    className="col-span-1"
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Card Content</p>
                      </CardContent>
                      <CardFooter>
                        <p>Card Footer</p>
                      </CardFooter>
                    </Card>
                  </ComponentCard>

                  <ComponentCard
                    title="Interactive Card"
                    code={`<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
    <CardDescription>Hover to see effect</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has hover effects</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="ghost">Cancel</Button>
    <Button>Submit</Button>
  </CardFooter>
</Card>`}
                    className="col-span-1"
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>Interactive Card</CardTitle>
                        <CardDescription>Hover to see effect</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This card has hover effects</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Submit</Button>
                      </CardFooter>
                    </Card>
                  </ComponentCard>
                </div>
              </section>

              {/* Form Elements Section */}
              <section id="form-elements" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight">Form Elements</h3>
                  <Badge variant="outline">Input</Badge>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ComponentCard
                    title="Input"
                    code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
                  >
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" id="email" placeholder="Email" />
                    </div>
                  </ComponentCard>

                  <ComponentCard
                    title="Textarea"
                    code={`<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="message">Message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`}
                  >
                    <div className="grid w-full max-w-sm gap-1.5">
                      <Label htmlFor="message">Message</Label>
                      <Textarea placeholder="Type your message here." id="message" />
                    </div>
                  </ComponentCard>

                  <ComponentCard
                    title="Select"
                    code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="framework">Framework</Label>
  <Select>
    <SelectTrigger id="framework">
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="next">Next.js</SelectItem>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
    </SelectContent>
  </Select>
</div>`}
                  >
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="react">React</SelectItem>
                          <SelectItem value="vue">Vue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </ComponentCard>

                  <ComponentCard
                    title="Checkbox"
                    code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                  </ComponentCard>

                  <ComponentCard
                    title="Radio Group"
                    code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
                  >
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                      </div>
                    </RadioGroup>
                  </ComponentCard>

                  <ComponentCard
                    title="Switch"
                    code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
                  >
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                  </ComponentCard>
                </div>
              </section>

              {/* Feedback Elements Section */}
              <section id="feedback-elements" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight">Feedback Elements</h3>
                  <Badge variant="outline">Notification</Badge>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ComponentCard
                    title="Alert"
                    code={`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert.
  </AlertDescription>
</Alert>`}
                  >
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Information</AlertTitle>
                      <AlertDescription>This is an informational alert.</AlertDescription>
                    </Alert>
                  </ComponentCard>

                  <ComponentCard
                    title="Alert (Destructive)"
                    code={`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>`}
                  >
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>Something went wrong. Please try again.</AlertDescription>
                    </Alert>
                  </ComponentCard>
                </div>
              </section>

              {/* Data Display Section */}
              <section id="data-display" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight">Data Display</h3>
                  <Badge variant="outline">Presentation</Badge>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ComponentCard
                    title="Badge"
                    code={`<div className="flex flex-wrap gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
</div>`}
                  >
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </ComponentCard>

                  <ComponentCard
                    title="Avatar"
                    code={`<div className="flex gap-2">
  <Avatar>
    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
</div>`}
                  >
                    <div className="flex gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </ComponentCard>

                  <ComponentCard title="Slider" code={`<Slider defaultValue={[50]} max={100} step={1} />`}>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </ComponentCard>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="colors" className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight">Color Palette</h3>
                <p className="text-muted-foreground">
                  The color system is designed to be accessible and consistent across the application.
                </p>
                <Separator />
                <ColorPalette />
              </section>
            </TabsContent>

            <TabsContent value="typography" className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight">Typography</h3>
                <p className="text-muted-foreground">
                  Typography is a critical part of the design system. It helps establish hierarchy and improve
                  readability.
                </p>
                <Separator />
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Headings</h4>
                    <div className="space-y-4">
                      <div>
                        <h1 className="text-4xl font-bold">Heading 1</h1>
                        <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">Heading 2</h2>
                        <p className="text-sm text-muted-foreground">text-3xl font-bold</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Heading 3</h3>
                        <p className="text-sm text-muted-foreground">text-2xl font-bold</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Heading 4</h4>
                        <p className="text-sm text-muted-foreground">text-xl font-bold</p>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold">Heading 5</h5>
                        <p className="text-sm text-muted-foreground">text-lg font-bold</p>
                      </div>
                      <div>
                        <h6 className="text-base font-bold">Heading 6</h6>
                        <p className="text-sm text-muted-foreground">text-base font-bold</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Body Text</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-lg">Large Text</p>
                        <p className="text-sm text-muted-foreground">text-lg</p>
                      </div>
                      <div>
                        <p className="text-base">Base Text</p>
                        <p className="text-sm text-muted-foreground">text-base</p>
                      </div>
                      <div>
                        <p className="text-sm">Small Text</p>
                        <p className="text-sm text-muted-foreground">text-sm</p>
                      </div>
                      <div>
                        <p className="text-xs">Extra Small Text</p>
                        <p className="text-sm text-muted-foreground">text-xs</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Font Weights</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-base font-light">Light Text</p>
                        <p className="text-sm text-muted-foreground">font-light</p>
                      </div>
                      <div>
                        <p className="text-base font-normal">Normal Text</p>
                        <p className="text-sm text-muted-foreground">font-normal</p>
                      </div>
                      <div>
                        <p className="text-base font-medium">Medium Text</p>
                        <p className="text-sm text-muted-foreground">font-medium</p>
                      </div>
                      <div>
                        <p className="text-base font-semibold">Semibold Text</p>
                        <p className="text-sm text-muted-foreground">font-semibold</p>
                      </div>
                      <div>
                        <p className="text-base font-bold">Bold Text</p>
                        <p className="text-sm text-muted-foreground">font-bold</p>
                      </div>
                      <div>
                        <p className="text-base font-extrabold">Extrabold Text</p>
                        <p className="text-sm text-muted-foreground">font-extrabold</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Tailwind Styleguide. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              GitHub
            </Button>
            <Button variant="ghost" size="sm">
              Documentation
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

