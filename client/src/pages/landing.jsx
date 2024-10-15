import { useEffect, useState } from "react";
import Banner from "../components/banner";
import CopyHome from "../components/copyHome";
import Faqs from "../components/faqs";
import Gallery from "../components/gallery";
// import HalfText from "../components/halfText"
import Hero from "../components/hero";
import MiniSlider from "../components/miniSlider";
import Project from "../components/project";
import SecondText from "../components/secondText";
import ServiceComp from "../components/serviceComp";
import Steps from "../components/steps";
import PropsPractise from "../components/propsPractise";
import Fast from "../../public/png/shield.gif";
// import StateManage from "../components/stateManage"

function Landing() {
  const [email, setEmail] = useState("");

  const Emailchangefunction = (e) => {
    setEmail(e.target.value);
    
  };
  console.log(email);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("email", email);

    try {
      const response = await fetch("https://api.quickbidestimating.com/", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        alert("Email sent successfully");
        setEmail("");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email sending failed");
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div
        className={`popup-overlay ${showPopup ? "show" : ""}`}
        onClick={closePopup}
      >
        <div
          className="border-2 cursor-pointer hover:bg-customBlue-light border-white mr-1 w-[30px] h-[25px] rounded-lg -mt-[214px] flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            onClick={closePopup}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white font-bold w-6 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </div>

        <div
          className={`popup-container ${showPopup ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-start gap-8">
            <img src={Fast} alt="" className="w-[60px] h-[60px] -mt-5" />
            <p className="text-customBlue-light text-center font-san text-[18px] font-semibold">
              Bid Better, Save Bigger!
            </p>
          </div>
          <p className="text-customBlue-light text-center font-san text-[18px] font-light">
            Accurate cost predictions for confident bidding
            <br /> and securing the best deals.
          </p>
          <form onFormSubmit={onSubmit}>
          <div className="flex justify-center items-center">
            <input
            required
              type="text"
              value={email}
              onChange={Emailchangefunction}
              placeholder="Enter Your Email"
              className="border w-[250px] mt-3"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div    
            
            className="flex justify-center items-center border w-[130px] p-2 mx-auto mt-3 cursor-pointer bg-customBlue-light text-white"
            // onClick={(e) => e.stopPropagation()}
          >
            <button>Send</button>
          </div>
          </form>
        </div>
      </div>
    
      <Hero />
      {/* <HalfText/> */}
      <PropsPractise />

      {/* <StateManage/> */}

      <ServiceComp />
      <CopyHome />
      <Project />
      <Gallery />
      <SecondText />
      <Banner />
      <MiniSlider />
      <Faqs />
      <Steps />
    </>
  );
}

export default Landing;
