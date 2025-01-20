import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Osborn Nyakaru - Full Stack Developer",
  description:
    "Personal portfolio showcasing expertise in Next.js, MongoDB, TailwindCSS, TypeScript, React, and Strapi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        </ThemeProvider>
      </body>
    </html>
  )
}

