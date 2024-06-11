import AboutComp from "../components/aboutComp"
import AboutHalf from "../components/aboutHalf"
import AnimateAbout from "../components/animateAbout"
import Counter from "../components/counter"
import Banner from "../components/banner"
import NewComp from "../components/newComp"
import Steps from "../components/steps"
import { useEffect } from "react"


function About() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <AboutComp/>
    <AnimateAbout/>
    <Counter/>
    <AboutHalf/>
    <Banner/>
    <NewComp/>
    <Steps/>
    
    </>
  )
}

export default About