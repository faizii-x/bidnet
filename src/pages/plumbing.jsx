import { useEffect } from "react";
import PlumImg from "../components/plumImg";
import PlumTwo from "../components/plumTwo";
import SliderStyle from "../components/sliderStyle";
import Software from "../components/software";
import Steps from "../components/steps";


function Plumbing() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>

      <PlumImg />
      <SliderStyle/>
      <PlumTwo/>
      <Software/>
      <Steps/>
    </>
  );
}

export default Plumbing;
