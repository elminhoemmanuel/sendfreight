import React from 'react'
import Testimonials from './Testimonials'
import TestimonialsPage from './TestimonialsPage'

const Reviews = () => {
    return (
        <div className="py-16 px-6 md:px-12">
            <div className="py-5">
                <h1 className="text-2xl md:text-3xl text-header font-bold text-center">Featured Reviews</h1>
                <p className="text-sm text-graytext text-center">Here are some from the review been done by some of the employees on this platform.</p>
            </div>

            <div className="">
                {/* <TestimonialsPage /> */}
                <Testimonials />
            </div>
        </div>
    )
}

export default Reviews
