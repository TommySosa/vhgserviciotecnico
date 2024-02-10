import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VHG Servicio Técnico',
  description: 'Servicio técnico en Yerba Buena, Tucumán. Especializado en reparación, limpieza, cambio de pasta térmica, reparación de módulos, cambio de botones y sistemas operativos para computadoras, celulares y consolas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
