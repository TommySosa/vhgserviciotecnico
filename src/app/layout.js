import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VHG Servicio Técnico',
  description: '¿Buscas un servicio técnico confiable en Yerba Buena, para reparar tus dispositivos electrónicos? En V.H.G, ofrecemos soluciones para la reparación, limpieza, cambio de pasta térmica, cambio de módulo, cambio de botones, cambio de pin de carga, cambio de sistemas operativos, y más! ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
