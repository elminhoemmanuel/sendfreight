import React from 'react'
import PriBtn from './PriBtn'
import Input from './Input'

const NewsLetter = () => {
    return (
        <div className="bg-graybg py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
                <div className="py-3">
                    <h1 className="text-2xl md:text-3xl text-header font-bold mb-5">Subscribe to our Newsletter</h1>
                    <p className="text-sm text-graytext mb-6">Get latest update lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                </div>

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-8 gap-4 mb-5'>
                        <div className="col-span-8 md:col-span-6">
                            <Input addStyle="py-3" />
                        </div>
                        <div className="col-span-8 md:col-span-2">
                            <PriBtn btnText="Submit" addStyle="block w-full py-3" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex md:justify-end items-center justify-center pr-0 md:pr-12 lg:pr-24">
                <div>
                    <img src="/images/mail.svg" alt="mail icon" />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
