import React, {  useReducer, useState } from 'react'


const reduce = (state , action) => {
      if(action.type ===  "INCR")
      state = state +1 ;

      if(state > 0 && action.type ===  "DECR")
      state = state  -1 ;
      return state ;
}
const UseReducer = () => {
  const inititalData = 10 ;
  const [state , hellow] = useReducer(reduce , inititalData) ;
return (
  <>

   <div className='center_div'>
      <p>{state}</p>
  <div class ='button2' onClick = { () => hellow({type : "INCR"})
    
  }>
  <span></span>
  <span></span>
  <span></span  >
  <span></span>
     INCR
  </div>

  <div class ='button2' onClick={() => hellow({ type : "DECR"})}>
  <span></span>
  <span></span>
  <span></span>
   <span></span>

      DECR
       
  </div>

  </div>
  </>
)
}

export default UseReducer
