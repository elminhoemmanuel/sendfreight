import Head from 'next/head'
import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactBody from '../components/ContactBody'

export default function Home() {
  return (
    <>
        <Head>
            <title>Cropshares | Contact</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
        </Head>

        <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <Navbar activePage='contact' />
        <ContactBody />
        <Footer />
        </div>
    </>
  )
}
