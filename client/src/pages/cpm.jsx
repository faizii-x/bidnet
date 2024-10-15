import Cpmbg from "../components/cpmbg"
import MainBanner from "../components/mainBanner"
import Banner from "../components/banner"
import StyleBlue from "../components/styleBlue"
import Work from "../components/work"
import Steps from "../components/steps"
import { useEffect } from "react"


function Cpm() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);



  return (
    <>
    
    
    <Cpmbg/>
    <MainBanner/>
    <StyleBlue/>
    <Banner/>
    <Work/>
    <Steps/>

    </>
  )
}

export default Cpm