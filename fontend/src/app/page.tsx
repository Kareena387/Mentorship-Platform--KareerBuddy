import React from 'react'
import Home from "./../../src/pages/Home/page"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
