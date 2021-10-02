import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'



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
        {/* <SearchArea />
        <FeaturesArea />
        <Footer /> */}
      </div>
    </>
  )
}
