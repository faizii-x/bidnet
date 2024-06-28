import { useEffect } from "react"
import ElecComp from "../components/elecComp"
import ElecImg from "../components/elecImg"
import Software from "../components/software"
import Steps from "../components/steps"


function Electrical() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <ElecImg/>
    <ElecComp/>
    <Software/>
    <Steps/>
    
    </>
  )
}

export default Electrical