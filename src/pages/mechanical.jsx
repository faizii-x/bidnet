import { useEffect } from "react"
import MechText from "../components/mechText"
import MechanicalImg from "../components/mechanicalImg"
import Software from "../components/software"
import Steps from "../components/steps"

function Mechanical() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <MechanicalImg/>
    <MechText/>
    <Software/>
    <Steps/>
    </>
  )
}

export default Mechanical