import FirstTrade from "../components/firstTrade"
import TradeMap from "../components/tradeMap"
import Steps from "../components/steps"
import Software from "../components/software"
import { useEffect } from "react"

function Trade() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
    <FirstTrade/>
    <TradeMap/>
    <Software/>
    <Steps/>
   
    
    
    </>
  )
}

export default Trade