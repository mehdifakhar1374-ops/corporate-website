import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import ScrollManager from './ScrollManager.jsx'

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        پرش به محتوا
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
