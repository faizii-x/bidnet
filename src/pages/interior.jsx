import { useEffect } from "react";
import Banner from "../components/banner";
import IntComp from "../components/intComp";
import InteriorImg from "../components/interiorImg";
import NewCompp from "../components/newCompp";
// import PropsTwo from "../components/propsTwo";
import SliderStyle from "../components/sliderStyle";
import Software from "../components/software";
import Steps from "../components/steps";
// import One from "../../public/png/one.png";

function Interior() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);



  // const data2 = {
  //   imageSrc: One,
  //   title: "Program",
  //   description: `Welcome to Bidnet Estimating! We're experts in CPM scheduling, Construction takeoff, planning and construction cost Estimating Services. With over 10 years of experience, we've mastered commercial, residential, industrial, and corporate projects. Count on us for precise planning and successful outcomes tailored to your needs.`,
  //   buttonText: "Read More",
  // };

  return (
    <>
      <InteriorImg />
      <SliderStyle />
      {/* <PropsTwo
        imageSrc={data2.imageSrc}
        title={data2.title}
        description={data2.description}
        buttonText={data2.buttonText}
      /> */}
      <IntComp />
      <Banner />
      <NewCompp />
      <Software />
      <Steps />
    </>
  );
}

export default Interior;
