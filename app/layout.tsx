import '../styles/globals.css'
import { Inter } from '@next/font/google'  // Old font import pattern

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS App 04',
  description: 'Sample NextJS 14.1 application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
