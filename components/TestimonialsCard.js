import React from 'react'

const TestimonialsCard = ({ used }) => {

    // console.log("card", used)

    return (
        <div className="rounded shadow-lg ">

            {/* for white part of card */}
            <div className="p-4">
                <div className="flex items-center mb-4">
                    <div className="mr-2">
                        <img src={used.stars} alt="rating" />
                    </div>
                    <div>
                        <p className="text-sm text-header">{used.rating}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <p className="text-sm text-graytext">{used.testimony}</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-sm text-tagred p-2 bg-orangelight rounded-full">{used.tag}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <img className="h-4 w-4" src="/images/briefcase.svg" alt="briefcase icon" />
                        </div>
                        <div>
                            <p className="text-sm text-header">{used.company}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* for grey part of card */}
            <div className="p-4 bg-gray-100 flex items-center">
                <div className="mr-2">
                    <img src={used.avatar} alt="avatar" />
                </div>
                <div>
                    <p className="text-xs text-gray-800 ">Anonymous</p>
                    <p className="text-xs text-graytext">Business Analyst</p>
                </div>
            </div>

        </div>
    )
}

export default TestimonialsCard
