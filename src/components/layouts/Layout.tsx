/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
interface LayoutProps {
  children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
