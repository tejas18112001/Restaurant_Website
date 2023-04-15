import React, { useEffect, useReducer, useState } from 'react'

const UseEffect = () => {
    const initialData = 10 ;
    const [myNum , setmyNum]  = useReducer(initialData) ;
    
       useEffect(() => {
       document.title = `Chat( ${myNum})`;
    //   console.log("hii") ;
   })
  return (
    <>

    <div className='center_div'>
        <p>{myNum}</p>
    <div className ='button2' onClick={() => {
        
        setmyNum(myNum + 1) ;
    }}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
       INCR
    </div>

   

    </div>
    </>
  )
}

export default UseEffect
