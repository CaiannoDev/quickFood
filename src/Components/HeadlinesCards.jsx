import React from 'react'
import fotoO1 from './../assets/fotoO1.jpg'
import fotoD1 from './../assets/fotoD1.jpg'
import fotoC1 from './../assets/fotoC1.jpg'






const HeadlinesCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* cards */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out </p>
                <p className='px-2'>Até 26/8</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Peça Já</button>
            </div>
            <img 
                src={fotoO1}
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
                alt="" />
        </div>

         {/* cards */}
         <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'> Vai um Café</p>
                <p className='px-2'>Tasty</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Peça Já</button>
            </div>
            <img 
                src={fotoC1}
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
                alt="" />
        </div>

         {/* cards */}
         <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Novos Restaurantes </p>
                <p className='px-2'>recentes</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Peça Já</button>
            </div>
            <img 
                src={fotoD1}
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
                alt="" />
        </div>
    </div>
  )
}

export default HeadlinesCards;
