import { useEffect } from "react"
import CommerImg from "../components/commerImg"
import NewCommer from "../components/newCommer"
import Software from "../components/software"
import Steps from "../components/steps"

function Commercial() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <CommerImg/>
    <NewCommer/>
    <Software/>
    <Steps/>
    
    </>
  )
}

export default Commercial