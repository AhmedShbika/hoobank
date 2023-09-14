import {React,useState,useEffect} from 'react'
import { navLinks } from '../constants/index2'
import {close,logo,menu}  from '../assets'
const Navbar = () => {
  const [toogle,setToogle]=useState(false)
  return (
<nav className='w-full flex py-6 justify-between  items-center navbar'>
  <img src={logo} alt="hoobank" className='w-[123px] h-[32px]'/>

<ul className='list-none sm:flex hidden justify-end items-center flex-1'>

{navLinks.map((nav,index)=>(
  <li
  key={nav.id} className={` cursor-pointer text[16px] ${index=== navLinks.length-1? "mr-1":"mr-10"} text-white mr-10`} >
<a href={`#${nav.id}`} > {nav.title}</a>
  </li>
))}

</ul>
<div className='sm:hidden flex flex-1 justify-end items-center'>
<img src={toogle? close:menu }alt='menu' className="width-[28px] h-[28px] object-contain" onClick={function set(){setToogle(!toogle)}}/>
<div className={`${toogle?'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
<ul className='list-none flex justify-end items-center flex-1 flex-col'>

{navLinks.map((nav,index)=>(
  <li
  key={nav.id} className={` cursor-pointer text[16px] ${index=== navLinks.length-1? "mr-1":"mb-10"} text-white mr-10`} >
<a href={`#${nav.id}`} > {nav.title}</a>
  </li>
))}

</ul>
  
</div>
</div>
</nav>
  )
}
export default Navbar