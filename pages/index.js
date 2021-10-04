import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import NewsLetter from '../components/NewsLetter'
import Brands from '../components/Brands'
import Advert from '../components/Advert'
import Cta from '../components/Cta'
import Footer from '../components/Footer'



export default function Home() {

  return (
    <>
      <Head>
        <title>BizRev</title>
        <meta name="keywords" content="BizRev" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <Navbar />
        <Hero />
        <Reviews />
        <NewsLetter />
        <Brands />
        <Advert />
        <Cta />
        <Footer />
        
      </div>
    </>
  )
}
