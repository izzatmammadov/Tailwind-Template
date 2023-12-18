import React from 'react'
import { Header } from './components/Header/Header'
import { Services } from './components/Section_1/Services'
import { Prices } from './components/Section_2/Prices'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  return (
    <>
    <Header/>
    <Services/>
    <Prices/>
    <Footer/>
    </>
  )
  }
