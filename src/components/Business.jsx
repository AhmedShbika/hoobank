
import { features } from '../constants/index2'
import styles ,{layout} from '../style'
import Button from './Button'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../index.css"
// eslint-disable-next-line react/prop-types
const FeatcherCard=({index,icon,title,content})=>(
  <div className={`flex flex-row p-6 rounded-[20px]  ${index!==features.length-1?"mb-6":"mb-0" }  feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icons" className='w-[50%] h-[50%] object-contain' />
    </div>
 <div className={`flex-1 flex flex-col  ml-3`}>
  <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
    {title}
  </h4>
<p className='font-poppins font-normal text-dimWhite  leading-[24px] text-[16px] mb-1'> 
{content}

</p>
 </div>
  </div>
)
const Business = () => {
  return (
<section  id='featchers'    className={`${layout.section}  relative bottom-[200px] `} >

<div className={`${layout.sectionInfo} md:mt-0 mt-8`}>
  
<h2 className={`${styles.heading2}`}> you do the Bussiness, <br className='sm:block hidden'/> well handel the money</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5]`}>With the right credit card, you can improve your financial life by building credit,
   earning rewards and saving money. But with hundreds of credit cards on the market.</p>
<Button style="mt-10"/>
</div>
<div className={`${layout.sectionImg}  flex-col`}>
  {features.map((featcher,index)=>(
<FeatcherCard key={featcher.id} {...featcher} index={index}/>

  ))}
</div>
</section>
  )
}
 export default Business



