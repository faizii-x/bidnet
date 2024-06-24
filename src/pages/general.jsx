import BannerGeneral from "../components/bannerGeneral"
import Generalimg from "../components/generalimg"
// import SliderStyle from "../components/sliderStyle"
import TextGen from "../components/textGen"
import TextGeneral from "../components/textGeneral"
import Software from "../components/software"
import Steps from "../components/steps"
import { useEffect } from "react"
// import Login from "../components/login"


function General() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
  <Generalimg/>
  {/* <SliderStyle/> */}
  <TextGeneral/>
  <BannerGeneral/>
  {/* <Login/> */}
  <TextGen/>
  <Software/>
  <Steps/>
    
    </>
  )
}

export default General