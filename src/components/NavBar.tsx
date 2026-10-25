import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_LINKS } from "@/config/navLinks";
import { cn } from "@/lib/utils";

/**
 * Site header.
 * - md and up: logo on the left, links on the right.
 * - below md: links collapse into a hamburger that opens a dropdown.
 */
export default function NavBar() {
  const { pathname } = useLocation();

  // Home only matches "/" exactly; other links also match nested routes.
  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-40 bg-background">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo />

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              aria-current={isActive(to) ? "page" : undefined}
              className={cn(
                "text-lg transition-colors hover:text-primary",
                isActive(to) ? "text-primary" : "text-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger + dropdown */}
        <div className="md:hidden">
          <DropdownMenu>
            {/* Base UI: `render` swaps the trigger's element for our Button */}
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu className="size-6" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48 p-2">
              {NAV_LINKS.map(({ to, label }) => (
                // `render` makes the item a real <Link>, so taps navigate
                // natively and the menu closes on click.
                <DropdownMenuItem
                  key={to}
                  render={
                    <Link
                      to={to}
                      aria-current={isActive(to) ? "page" : undefined}
                    />
                  }
                  className={cn(
                    "cursor-pointer px-4 py-2 text-base hover:text-primary focus:text-primary data-highlighted:text-primary",
                    isActive(to) ? "text-primary" : "text-foreground",
                  )}
                >
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </header>
  );
}