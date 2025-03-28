import About from '@/components/ui/About/About'
import Client from '@/components/ui/Client/Client'
import Contact from '@/components/ui/Contact/Contact'
import ContactForm from '@/components/ui/ContactForm/ContactForm'
import Home from '@/components/ui/Home/Home'
import React from 'react'

const page = () => {
  return (
    <>
    <Home/>
    <About/>
    <Client/>
    <Contact/>
    <ContactForm/>
    </>
  )
}

export default page