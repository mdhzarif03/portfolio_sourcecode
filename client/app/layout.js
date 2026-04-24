import './globals.css'
import Navbar from '../components/Navbar'
import Cursor from '../components/Cursor'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
