import HalfText from "./halfText";
import Second from "../../public/png/second.png";
// import One from "../../public/png/one.png";
// import PropsTwo from "./propsTwo";

function PropsPractise() {
  const data = {
    imageSrc: Second,
    title: "BIDNET ESTIMATING",
    description: `Welcome to Bidnet Estimating! We're experts in CPM scheduling, Construction takeoff, planning and construction cost Estimating Services. With over 10 years of experience, we've mastered commercial, residential, industrial, and corporate projects. Count on us for precise planning and successful outcomes tailored to your needs.`,
    buttonText: "Read More",
  };
  // const data2 = {
  //   imageSrc: One,
  //   title: "Program",
  //   description: `Welcome to Bidnet Estimating! We're experts in CPM scheduling, Construction takeoff, planning and construction cost Estimating Services. With over 10 years of experience, we've mastered commercial, residential, industrial, and corporate projects. Count on us for precise planning and successful outcomes tailored to your needs.`,
  //   buttonText: "Read More",
  // };

  return (
    <>
      <HalfText
        imageSrc={data.imageSrc}
        title={data.title}
        description={data.description}
        buttonText={data.buttonText}
      />

      {/* <PropsTwo
      imageSrc={data2.imageSrc}
      title={data2.title}
      description={data2.description}
      buttonText={data2.buttonText}
      
      /> */}

    </>
  );
}

export default PropsPractise;
