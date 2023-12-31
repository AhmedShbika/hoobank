// eslint-disable-next-line no-unused-vars
import React from 'react'
import"../index.css"
import styles from "../style"
import {discount,robot} from "../assets" 
import GetStarted from './GetStarted'
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row  flex-col ${styles.paddingY} relative bottom-[80px] `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded[10px] mb-2">
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
 <p className={`${styles.paragraph}`}>
 <span className='text-white  '>20%{" "}</span>
     discount for {"   "}
     <span className='text-white  '> 1 month {" "}</span>
      account
      </p>
      </div>
 <div className='flex flex-row justify-between items-center w-full'>
  <h1 className='flex-1  font-poppins font-semibold ss:text-[72px]     text-[52px] text-white ss:leading-[80px]'>the next <br className='sm:block hidden'/> {" "} 
  <span className='text-gradient'>Generation</span> {" "}

  </h1>
 <div className='ss:flex md:mr-4 mr-0 hidden md:flex'>
  <GetStarted/>
 </div>
 </div>
 <h1 className=' font-poppins font-semibold  ss:text-[68px]   text-[52px] text-white ss:leading-[75px] leading-[100px]
  w-full'>payment method </h1>
   <p className={`${styles.paragraph} max-w-[470px] mt-5`}> 
   With the right credit card, you can improve your financial life by building credit, 
   earning rewards and saving money. But with hundreds of credit cards on the market.
   </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-10 relative`}>
      <img src={robot} alt="billing"  className="w-[80%] h-[100%]  relative z-[5] m-0"/>
      <div className=' absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'>
      
      </div>   
      <div className=' absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'>
      
      </div>
      <div className=' absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient'>
      
      </div>
    </div>
<div className={`ss:hidden md:mb-0 mb-8 ${styles.flexCenter}`}>
  <GetStarted/>
</div>
    </section>
 
    )
}

export default Hero