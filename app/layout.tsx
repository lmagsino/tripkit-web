import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TripKit Web Admin',
  description: 'Web admin interface for TripKit trip management',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
