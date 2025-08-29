import Link from "next/link";
import { Button } from "./button";

export function Navbar() {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold">
            Polly
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/polls" className="hover:text-foreground">
              Polls
            </Link>
            <Link href="/polls/new" className="hover:text-foreground">
              Create Poll
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


