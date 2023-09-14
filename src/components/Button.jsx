import React from 'react'

const Button = (props) => {
  return (
<button tybe="button" className={`py-4 px-6 bg-blue-gradient font-poppoins font=medium text-[18px]
text-primary outline-none ${props.style}
   rounded-[10px]                 `}> Get Started</button>
  )
}
export default Button