
import { useState } from "react"
import Client3 from "../../public/png/client3.png"
import Client4 from "../../public/png/client4.png"

function StateManage() {

    const [change, setChange] = useState(false)

    const handleChange =() => {
        setChange(prevChange => !prevChange) 
    }

  return (
    <>
    <div onMouseEnter={handleChange} className="">
        <img src={change? Client4 : Client3} alt="" />
   
   </div>
    </>
  )
}

export default StateManage