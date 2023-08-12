import './globals.css'
import { Roboto } from 'next/font/google'
import { Kanit } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Farewell',
  description: 'Farewell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
