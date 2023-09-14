import { card } from '../assets'
import styles,{layout} from '../style'
import React from 'react'
import Button from "./Button"
export const CardDeal = () => 
  (
   <section className={`${layout.section}  relative bottom-[150px]`}>
<div className={`${layout.sectionInfo}`}>
  <h2 className={`${styles.heading2}`}>find a better card deal <br className='sm:block hidden '/> in
  vew easy steps
   </h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer 
  faucibus. Aliquet quis aliquet eget mauris 
  tortor.ç Aliquet ultrices ac, ametau.</p>
<Button style="mt-10"/>
</div>
<div className={`${layout.sectionImg}`}>
  <img src={card} alt="card" className={`w-[100%] h-[100%]`} />
</div>
   </section>
  )

export default CardDeal