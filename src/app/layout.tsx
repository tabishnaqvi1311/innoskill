import { Poppins } from 'next/font/google'
import "@/app/globals.css"
import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: 'InnoSkill 2025',
  description: 'Register For InnoSkill 2025',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={poppins.className}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}