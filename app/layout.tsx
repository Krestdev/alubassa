import { NextIntlClientProvider } from "next-intl"
import "./globals.css"
import { Inter } from "next/font/google"
import { getLocale } from "next-intl/server"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactFooter from "@/components/ContactFooter"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "Alubassa",
  description: "Spécialisée dans la production des articles manufacturés en aluminium pur",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={inter.variable}>
      <body className="font-sans bg-white text-black">
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
