import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Actions from './Actions'
import Acteurs from './Acteurs'

export default function LandingPage() {
  return (
    <div className='min-h-screen'>
      <Header/>
      <Hero/>
      <section id="piliers">
        <Features/>
      </section>
      <Actions/>
      <section id="acteurs">
        <Acteurs/>
      </section>
    </div>
  )
}
