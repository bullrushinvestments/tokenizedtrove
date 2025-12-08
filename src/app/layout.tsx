import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TokenizedTrove',
  description: 'TokenizedTrove is an innovative platform that allows small businesses to tokenize and trade their digital assets (like content, user data, or loyalty points) on the blockchain, enabling them to enhance customer engagement and unlock new revenue streams. It combines sustainable business practices with Web3 technology for a unique value proposition.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
