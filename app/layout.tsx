import { AppProvider } from '../components/AppContext';
import '../styles/site.scss';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body><AppProvider>{children}</AppProvider></body>
    </html>
  )
}
