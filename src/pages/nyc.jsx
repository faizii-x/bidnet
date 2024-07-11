import { useEffect } from "react"
import AnimateAbout from "../components/animateAbout"
// import CompTwo from "../components/compTwo"
import Counter from "../components/counter"
import NewComp from "../components/newComp"
import NycComp from "../components/nycComp"
import Steps from "../components/steps"

function Nyc() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
    
    <NycComp/>
    <AnimateAbout/>
    <Counter/>
    {/* <CompTwo/> */}
    <NewComp/>
<Steps/>
    
    
    </>
  )
}

export default Nyc