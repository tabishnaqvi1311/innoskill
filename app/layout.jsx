import { Poppins } from 'next/font/google'
import '@/styles/globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: 'InnoSkill 2024',
  description: 'Register For InnoSkill 2024',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
