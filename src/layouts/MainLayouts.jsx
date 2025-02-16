import React from 'react'
import Header from '../components/Header'

const MainLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
    </>
  )
}

export default MainLayouts