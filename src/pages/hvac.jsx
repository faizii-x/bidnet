import { useEffect } from "react";
import BannerGeneral from "../components/bannerGeneral";
import HavacImg from "../components/havacImg";
import HvacComp from "../components/hvacComp";
import ImgComp from "../components/imgComp";
import Software from "../components/software";
import Steps from "../components/steps";


function Hvac() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <HavacImg />
      <HvacComp />
      <BannerGeneral />
      <ImgComp />
      <Software />

      <Steps />
    </>
  );
}

export default Hvac;
