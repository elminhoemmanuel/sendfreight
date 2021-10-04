import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import { testData } from './TestimonialData'


const TestimonialsPage = ({  }) => {

    // console.log(testData)
    // console.log("Page data", data);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 pb-16">
            {
                testData.map(item =>(
                    <TestimonialsCard used={item}  key={item.id} />
                    ) )
            }
            {/* {getCards()} */}
        </div>
    )
}

export default TestimonialsPage
