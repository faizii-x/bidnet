import MepCard from "../components/mepCard";
import MepImg from "../components/mepImg";
import MepText from "../components/mepText";
import TextTwo from "../components/textTwo";
import Software from "../components/software";
import Steps from "../components/steps";
import { useEffect } from "react";


function Mep() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MepImg />
      <MepCard />
      <MepText />
      <TextTwo />
      <Software/>
      <Steps/>
    </>
  );
}

export default Mep;
