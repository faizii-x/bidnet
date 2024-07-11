import { useEffect } from "react"
import IndImg from "../components/indImg"
import Indust from "../components/indust"
import SliderStyle from "../components/sliderStyle"
import Software from "../components/software"
import Steps from "../components/steps"

function Industrial() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
    <IndImg/>
    <SliderStyle/>
    <Indust/>
    <Software/>
    <Steps/>
    
    </>
  )
}

export default Industrial