import Banner from "../components/banner"
import CopyHome from "../components/copyHome"
import Faqs from "../components/faqs"
import Gallery from "../components/gallery"
import HalfText from "../components/halfText"
import Hero from "../components/hero"
import MiniSlider from "../components/miniSlider"
import Project from "../components/project"
import SecondText from "../components/secondText"
import ServiceComp from "../components/serviceComp"
import Steps from "../components/steps"

function Landing() {
  return (
    <>
    
    <Hero/>
    <HalfText/>
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