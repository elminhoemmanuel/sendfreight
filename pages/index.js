import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Body from '../components/Body'
import Navbar from '../components/Navbar'




export default function Home() {

  return (
    <>
      <Head>
        <title>Send Freight</title>
        <meta name="keywords" content="Send Freight" />
      </Head>

      <div className='home'>
        <Navbar />
        <Body />
        
        
      </div>
    </>
  )
}
