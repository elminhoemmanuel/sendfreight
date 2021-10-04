import React from 'react'

const Input = ({placeholder, addStyle }) => {

    let styling = `rounded block py-2 px-4 w-full bg-white placeholder-gray-300 border-none focus:outline-none text-gray-300 ${addStyle}`

    return (
        <input 
        type="text" 
        placeholder={placeholder}
        className={styling}
        />
    )
}

export default Input
