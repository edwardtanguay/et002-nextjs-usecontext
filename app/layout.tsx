import { AppProvider } from '../components/AppContext';
import '../styles/site.scss';
import '../styles/globals.css';
import Header from '../components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
       <Header/> 
        <AppProvider>{children}</AppProvider></body>
    </html>
  )
}
