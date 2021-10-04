import React from 'react'
import Link from 'next/link'

const Footer = () => {

    const company = ["About Us", "Contact Us", "Terms of Use", "Privacy Policy"]
    const features = ["Timeline", "Peer Review", "Create Account", "Sign In"]
    const contact = ["inquiry@thaapp.com", "1-800-200-300", "54 Curragh birin, Castletroy,Limerick, Ireland"]

    return (
        <div className="py-12 px-6 md:px-24 bg-footerbg text-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center pr-0 md:pr-28 mb-4">
                    <div className="mb-5">
                        <p className="text-sm">This platform for minority groups to express their opinions on employment, workplace experiences and rate employers. </p>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <Link href="/">
                                <a className="block">
                                    <img src="/images/facebook.svg" alt="facebook icon" />
                                </a>
                            </Link>
                        </div>
                        <div className="mr-2">
                            <Link href="/">
                                <a className="block">
                                    <img src="/images/twitter.svg" alt="twitter icon" />
                                </a>
                            </Link>

                        </div>
                        <div className="mr-2">
                            <Link href="/">
                                <a className="block">
                                    <img src="/images/instagram.svg" alt="instagram icon" />
                                </a>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3">
                    <div>
                        <h1 className="text-lg font-bold mb-5">Company</h1>
                        {
                            company.map(item => (
                                <Link key={item} href="/">
                                    <a className="block mb-2">
                                        <p className="text-sm">{item}</p>
                                    </a>
                                </Link>
                            ))
                        }
                    </div>

                    <div>
                        <h1 className="text-lg font-bold mb-5">Features</h1>
                        {
                            features.map(item => (
                                <Link key={item} href="/">
                                    <a className="block mb-2">
                                        <p className="text-sm">{item}</p>
                                    </a>
                                </Link>
                            ))
                        }
                    </div>

                    <div>
                        <h1 className="text-lg font-bold mb-5">Contact Us</h1>
                        {
                            contact.map(item => (
                                
                                <p key={item} className="text-sm mb-2">{item}</p>
                                   
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
