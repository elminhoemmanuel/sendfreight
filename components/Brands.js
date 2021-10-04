import React from 'react'

const Brands = () => {
    return (
        <div className="bg-brandsbg py-10 px-6 md:px-12 border-b border-gray-100 grid 
        grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
            <div className=" flex items-center justify-center">
                <img className="block w-48 h-40 md:w-full md:h-auto" src="/images/ebay.svg" alt="ebay logo" />
            </div>
            <div className=" flex items-center justify-center">
                <img className="block w-48 h-40 md:w-full md:h-auto" src="/images/linkedin.svg" alt="linkedin logo" />
            </div>
            <div className=" flex items-center justify-center">
                <img className="block w-48 h-40 md:w-full md:h-auto" src="/images/indeed.svg" alt="indeed logo" />
            </div>
            <div className=" flex items-center justify-center">
                <img className="block w-48 h-40 md:w-full md:h-auto" src="/images/godaddy.svg" alt="godaddy logo" />
            </div>
            <div className=" flex items-center justify-center">
                <img className="block w-48 h-40 md:w-full md:h-auto" src="/images/monster.svg" alt="monster logo" />
            </div>
            
        </div>
    )
}

export default Brands
