import BannerGeneral from "../components/bannerGeneral"
import Dryone from "../components/dryone"
import DrywallComp from "../components/drywallComp"
import TextDry from "../components/textDry"
import Software from "../components/software"
import Steps from "../components/steps"
import { useEffect } from "react"


function Drywall() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
    
    <DrywallComp/>
    <TextDry/>
    <BannerGeneral/>
    <Dryone/>
    <Software/>
    <Steps/>
    </>
  )
}

export default Drywall