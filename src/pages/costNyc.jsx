import { useEffect } from "react"
import Compcost from "../components/compcost"
import Counter from "../components/counter"
import NewComp from "../components/newComp"
import Steps from "../components/steps"


function CostNyc() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <Compcost/>
   <Counter/>
    <NewComp/>
    <Steps/>
    </>
  )
}

export default CostNyc