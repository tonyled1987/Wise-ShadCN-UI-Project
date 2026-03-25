"use client"

import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, Sun, Moon } from "lucide-react"

/**
 * DESIGNER NOTE: Wise-style top header
 * — Left: sidebar trigger + WISE logo. Right: Earn CTA + user profile (avatar, name, dropdown).
 * — Restyle: edit button variants, avatar size, or add --wise-* CSS variables in globals.css.
 */
export function AppHeader() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggleTheme() {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(html.classList.contains("dark"))
  }

  return (
    <header className="shrink-0 bg-background mt-16">
      <div className="mx-auto flex h-14 w-full max-w-[976px] items-center gap-4 px-4">
        <div className="flex flex-1" />
        <div className="flex items-center gap-2">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Earn €90
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarImage src="" alt="Anton Lebedev" />
                  <AvatarFallback className="bg-muted text-foreground text-xs font-medium">
                    AL
                  </AvatarFallback>
                </Avatar>
                <span className="hidden text-sm font-medium sm:inline-block">
                  Anton Lebedev
                </span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <span className="font-normal">Account</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={toggleTheme} className="flex items-center justify-between">
                <span>{isDark ? "Light mode" : "Dark mode"}</span>
                {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
