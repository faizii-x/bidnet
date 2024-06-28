import { useEffect } from "react"
import Banner from "../components/banner"
import CopyHome from "../components/copyHome"
import Faqs from "../components/faqs"
import Gallery from "../components/gallery"
// import HalfText from "../components/halfText"
import Hero from "../components/hero"
import MiniSlider from "../components/miniSlider"
import Project from "../components/project"
import SecondText from "../components/secondText"
import ServiceComp from "../components/serviceComp"
import Steps from "../components/steps"
import PropsPractise from "../components/propsPractise"
import StateManage from "../components/stateManage"


function Landing() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
    <Hero/>
    {/* <HalfText/> */}
    <PropsPractise/>

<StateManage/>

    <ServiceComp/>
    <CopyHome/>
    <Project/>
    <Gallery/>
    <SecondText/>
    <Banner/>
    <MiniSlider/>
    <Faqs/>
    <Steps/>
    
    </>
  )
}

export default Landing