import { useEffect } from "react"
import Banner from "../components/banner"
import Herotakeoff from "../components/herotakeoff"
import MainBanner from "../components/mainBanner"
import Primary from "../components/primary"
import Software from "../components/software"
import Steps from "../components/steps"
import TextTake from "../components/textTake"
import TextTakeoff from "../components/textTakeoff"


function Takeoff() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <Herotakeoff/>
    <MainBanner/>
    <Primary/>
    <TextTakeoff/>
    <Banner/>
    <TextTake/>
    <Software/>
    <Steps/>
    
    </>
  )
}

export default Takeoff