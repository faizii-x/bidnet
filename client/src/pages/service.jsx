import AnimatedComp from "../components/animatedComp";
import ServiceTwo from "../components/serviceTwo";
import Software from "../components/software";
import ThirdComp from "../components/thirdComp";
import Banner from "../components/banner"
import Steps from "../components/steps"
import { useEffect } from "react";



function Service() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
      <ServiceTwo />
      <AnimatedComp />
      <ThirdComp/>
      <Software/>
      <Banner/>
      <Steps/>
    </>
  );
}

export default Service;
