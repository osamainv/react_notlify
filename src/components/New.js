import { useState, useEffect } from "react"
const New = () => {
    let ooo = ['red','green','yellow'][Math.floor(Math.random()*3)]
    useEffect(()=>{
        ooo = ['red','green','yellow'][Math.floor(Math.random()*3)]
    },[])
    
  return (
    <header>
      <h1>{ooo}</h1>
    </header>
  )
}

export default New
