import React from 'react' ;// rafce
import Delivery from "./bike.png";
import harsh from "./harsh.jpg";
import { harshdata } from './utils/data';


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1  md:grid-cols-2 
    gap-2 w-full 
    ' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start 
       justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center
         bg-orange-200 px-4 py-1 rounded-full' >
        <p className='text-base text-orange-500 font-semibold'>
        Bike Delivery
        </p>
        <div className='w-8 h-8 bg-white rounded-full 
        overflow-hidden drop-shadow-xl'>
        <img src = {Delivery} className="w-full h-full object-contain"
        alt="Delivery" />
        </div>
        </div>
        <p className='text-[2.5rem] lg:text-[4.5rem] 
        font-bold tracking-wide text-headingColor'>
        The Fastest Delivery in 
         <span className='text-orange-600 text-[3rem] 
         lg:text-[5rem]'> Your city </span>
        </p>
        <p className='text-base text-textColor 
        text-center md:text-left md:w-[80%]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Dignissimos cupiditate incidunt molestias fuga architecto voluptatibus, veniam tenetur, numquam est totam officia consequatur 
        color deleniti amet dolores consectetur hic eum!
        </p>
        <button type='button' className='bg-gradient-to-br 
        from-orange-400 to-orange-500
        md:w-auto px-4 py-2 rounded-lg hover:shadow-lg
        transition-all ease-in-out duration-100 w-full
         '>
         Order Now 
         </button>
         </div>
      <div className='py-2  flex-1 items-center relative'>
      <img src= {harsh} alt="harsh" className=' ml-auto h-420
       w-full lg:h-650 lg:w-auto' />

      <div className='w-full h-full absolute top-0 left-0 
      flex items-center lg:px-30
      justify-center  py-4 gap-5 flex-wrap '>
      {harshdata && harshdata.map(n =>(
        <div key={n.id} className='lg:w-190 
         p-4 bg-cardOverlay backdrop-blur-md
       rounded-3xl flex flex-col items-center justify-center
       drop-shadow-lg'>
       <img src={n.imageSrc} alt="" className='w-20 lg:w-40 -mt-10
       lg:-mt-20 ' />
       <p className='text-base lg:text-xl font-semibold
        text-textColor mt-2 lg:mt-4'>{n.name}</p>
       <p className=' text-[12px] g:text-sm 
       text-lighttextGray font-semibold 
        my-1
       lg:my-3'>
       {n.decp}
       </p>
       <p className='text-sm  font-semibold text-headingColor'>
       <span className='text-xs text-red-600'>$</span>
       {n.price}
       </p>
       

       </div>
      ))}
      </div>
      </div>
  </section>
  )
}

export default HomeContainer
