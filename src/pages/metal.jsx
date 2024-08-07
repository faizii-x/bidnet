import MetalImg from "../components/metalImg"
import MetalText from "../components/metalText"
import SliderStyle from "../components/sliderStyle"
import BannerGeneral from "../components/bannerGeneral"
import Metbg from "../components/metbg"
import Software from "../components/software"
import Steps from "../components/steps"
import { useEffect } from "react"


function Metal() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
  <MetalImg/>
    <SliderStyle/>
    <MetalText/>
    <BannerGeneral/>
    <Metbg/>
    <Software/>
    <Steps/>
    </>
  )
}

export default Metal