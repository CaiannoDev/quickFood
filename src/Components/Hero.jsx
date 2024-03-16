import React from 'react'
import fotoB1 from './../assets/fotoB1.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:tx-6xl lg:text-7xl font-bold'>Best <span className='text-orange-500'>Foods</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:tx-6xl lg:text-7xl font-bold' ><span className='text-orange-500'>Quick</span> <span>Delivery</span></h1>
            </div>
            <img 
                src={fotoB1} 
                className='w-full max-h-[500px] object-cover'
                alt="" />
        </div>
    </div>
  )
}

export default Hero;
