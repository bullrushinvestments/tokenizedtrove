import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TokenizedTrove',
  description: 'TokenizedTrove is an innovative platform that allows small businesses to tokenize and trade their digital assets (like content, user data, or loyalty points) on the blockchain, enabling them to enhance customer engagement and unlock new revenue streams. It combines sustainable business practices with Web3 technology for a unique value proposition.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">TokenizedTrove</h1>
      <p className="mt-4 text-lg">TokenizedTrove is an innovative platform that allows small businesses to tokenize and trade their digital assets (like content, user data, or loyalty points) on the blockchain, enabling them to enhance customer engagement and unlock new revenue streams. It combines sustainable business practices with Web3 technology for a unique value proposition.</p>
    </main>
  )
}
