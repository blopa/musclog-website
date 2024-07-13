import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {DumbbellIcon, MenuIcon} from "@/components/ui/icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musclog - Your Ultimate Fitness Companion",
  description: "Discover a world of personalized workouts, expert guidance, and a supportive community with Musclog. Achieve your fitness goals with our comprehensive fitness app.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col min-h-dvh bg-background">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
          <div className="container flex items-center justify-between h-14 px-4 md:px-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <DumbbellIcon className="w-6 h-6" />
              <span className="font-bold text-lg">Musclog</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Features
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Workouts
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Testimonials
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Download
              </Link>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-muted p-6 md:p-12">
          <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
            <div className="grid gap-1">
              <h3 className="font-semibold">Company</h3>
              <Link href="#" prefetch={false}>
                About Us
              </Link>
              <Link href="#" prefetch={false}>
                Careers
              </Link>
              <Link href="#" prefetch={false}>
                Contact
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Products</h3>
              <Link href="#" prefetch={false}>
                Musclog App
              </Link>
              <Link href="#" prefetch={false}>
                Workout Plans
              </Link>
              <Link href="#" prefetch={false}>
                Nutrition Guides
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Resources</h3>
              <Link href="#" prefetch={false}>
                Blog
              </Link>
              <Link href="#" prefetch={false}>
                FAQ
              </Link>
              <Link href="#" prefetch={false}>
                Support
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Legal</h3>
            </div>
          </div>
        </footer>
      </div>
      </body>
      </html>
  );
}
