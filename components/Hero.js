import React from 'react'
import PriBtn from './PriBtn'
import { useRouter } from "next/router"
import Input from './Input'
import Link  from 'next/link'

const Hero = () => {

    const router = useRouter()

    return (
        <div className="pt-24 pb-16 px-6 md:px-12 gap-6 grid grid-cols-1 md:grid-cols-2 bg-orangelight">
            <div className="pt-16">
                <div className='mb-7'>
                    <h1 className='text-3xl md:text-4xl text-header font-bold'>Grow your business</h1>
                    <h1 className='text-3xl md:text-4xl text-header font-bold'>with real-time reviews</h1>
                    <p className='text-sm text-body'>Find out more on what people and saying about your </p>
                    <p className='text-sm text-body'>company, with real time reveiw and data.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-8 bg-white p-2 mb-7'>
                    <div className="col-span-8 md:col-span-6">
                        <Input addStyle="" />
                    </div>
                    <div className="col-span-8 md:col-span-2">
                        <PriBtn btnText="Search" addStyle="block w-full" />
                    </div>
                </div>

                <div className="mb-5">
                    <p className="text-sm">Already have an account? 
                        <Link href="/">
                            <a className="text-revorange"> Sign In</a>
                        </Link>
                    </p>
                </div>

                <div className="relative">
                    {/* <img src="/images/quoteleft.svg"  alt="quote" className="absolute left-0 top-0" />
                    <img src="/images/quoteright.svg"  alt="quote" className="absolute right-12 top-4" />
                    <p className="text-xs text-gray-500">A life spent making mistakes is not only more honorable, <br/>
                    but more useful than a life spent doing nothing.</p> */}
                    <img src="/images/quote.svg" alt="quote" />

                </div>

            </div>
            <div className="pt-8 pl-20 pr-16 relative">
                <img src="/images/biz.svg" alt="hero image" className="w-4/5 h-full" />
                <img src="/images/numcard.svg" alt="" className="absolute  top-32 right-6 h-20" />
                <img src="/images/speedometer.svg" alt="" className="absolute top-12 left-0 h-16" />
                <img src="/images/usercard.svg" alt="" className="absolute -bottom-8 -left-10 h-28 hidden lg:inline" />
            </div>
        </div>
    )
}

export default Hero
