import React from 'react'
import {logo} from'../assets'
import styles from '../style'
import { footerLink,socialMedia } from '../constants/index2'
const Footer = () => 
  (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col text-white `}>
<div className={`${styles.flexCenter} md:flex-row  flex-col mb-8 w-full`}>
  <div className={`flex-1 flex-col justify-start mr-10`}>
    <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain'/>
  <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
  A new way to make the payments easy, reliable and secure.
  </p>
  </div>
<div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-10 mt-10'>
  {footerLink.map((footerLinks)=>(
     <div key={footerLinks.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
      <h4 className='font-poppins font-medium text-[18px] leading-[72px] text-white '> {footerLinks.title}</h4>
   
   <ul className='list-none mt-4'>
{footerLinks.links.map((link,index)=>(
<li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite
 hover:text-secondary  cursor-pointer ${index !== link.length -1? "mb-4":"mb-0"} `}
 >
{link.name}

</li>

))}

   </ul>
    </div>
  ))}
</div>
</div>

<div className='flex justify-between w-full items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
  <p className='font-poppins font-normal text-[18px] text-center leading-[72px] text-white '>
  2021 HooBank. All Rights Reserved
  </p>
<div className='flex flex-row md:mt-0 mt-6'>

{socialMedia.map((social,index)=>(<img src={social.icon} alt={social.id}
key={social.id}
className={` w-[21px] h-[21px] object-contain cursor-pointer ${index!==socialMedia.length-1? "mr-6":"mr-0"} `}
/>))}
</div>
</div>
  </section>
   
   )


export default Footer