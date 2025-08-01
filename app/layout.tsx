import { NextIntlClientProvider } from "next-intl"
import "./globals.css"
import { Inter } from "next/font/google"
import { getLocale } from "next-intl/server"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactFooter from "@/components/ContactFooter"
import { Metadata } from "next"
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
   const messages = (await import(`@/messages/${locale}.json`)).default
  return {
    title: {
      template: "%s - Alubassa",
      default: `Alubassa - ${messages.metadata.title}`
    },
    description: messages.metadata.description,
    keywords: ["alubassa, aluminium, aluminum, alucam"],
    authors: [{name:"krestdev", url:"https://krestdev.com"}, {name:"alubassa"}],
    publisher: "krestdev",
    icons: {
      icon:"/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: {
        template: "%s - Alubassa",
        default: `Alubassa - ${messages.metadata.title}`
      },
      url: "https://www.alubassa.com",
      siteName: "Alubassa",
      description: messages.metadata.description,
      images: [{
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Alubassa"
      }]
    }
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={cn("bg-background antialiased font-sans", inter.variable)}>
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
          <ContactFooter />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
