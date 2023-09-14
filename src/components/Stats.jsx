import React from 'react'
import styles from '../style'
import { stats } from '../constants/index2'
const Stats = () => {
  return (
  <section className={ `${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 relative sm:bottom-[200px] bottom-[120px] ` }>
{stats.map((stat)=>(
<div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
<h4 className='font-poppins font-semibold xs:text-[20px] xs:mb-10 xs:mt-5 text-[20px] xs:leading-[53px0] leading-[10px] text-white' >{stat.value} </h4 >
<p className='font-poppins font-normal xs:text-[10] xs:mb-10 xs:mt-5 text-[15px] xs:leading-[26px0] leading-[21px] text-gradient 
uppercase ml-3

'>{stat.title}</p>
</div>

))}
   
  </section>   
  )
}

export default Stats