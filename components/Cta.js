import React from 'react'
import PriBtn from './PriBtn'

const Cta = () => {
    return (
        <div className="py-12 px-6 md:px-24 ">
            <div className="bg-orangelight rounded grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                <div className="">
                    <h1 className="text-2xl text-header">Get started today sign up and</h1>
                    <h1 className="text-2xl text-header">start reveiwing business. </h1>
                </div>

                <div className="shapes flex justify-start items-start md:items-center md:justify-center">
                    <PriBtn
                        btnText="Create free Account"
                        addStyle="px-8 block"
                    />
                </div>
            </div>
        </div>
    )
}

export default Cta
