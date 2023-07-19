import React from 'react'

function Hero() {
    return (
        <div className='hero bg-gray-800 py-24'>
           <div className='container mx-auto px-4'>
               <div className='max-w-lg mx-auto text-center'>
                   <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
                       Fresh And <span className='text-yellow-400'>Organic</span> Products For You
                   </h1>
                   <p className='text-lg md:text-xl text-white mt-4'>
                       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
                   </p>
               </div>
           </div>
        </div>
    )
}

export default Hero
