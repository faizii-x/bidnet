import Planbg from "../components/planbg"
import MainBanner from "../components/mainBanner"
import Banner from "../components/banner"
import Software from "../components/software"
import Steps from "../components/steps"
import PlanText from "../components/planText"
import { useEffect } from "react"

function Plan() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    <Planbg/>
    <MainBanner/>
    <PlanText/>
    <Banner/>
    <Software/>
    <Steps/>
    </>
  )
}

export default Plan