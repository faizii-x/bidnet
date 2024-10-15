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
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
// import StateManage from "../components/stateManage"

function Landing() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/front/contact/submit`,
        formData
      );
      if (data?.success) {
        toast.success(data?.message || "Message sent successfully!");
        reset(); // Clear form fields after successful submission
      } else {
        toast.error(data?.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Unexpected error occurred!");
    } finally {
      setIsSubmitting(false);
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
          className="border-2 cursor-pointer hover:bg-customBlue-light border-white mr-1 w-[30px] h-[25px] rounded-lg -mt-[420px] flex justify-center items-center"
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
        <img src={Fast} alt="Fast" className="w-[60px] h-[60px] -mt-5" />
        <p className="text-customBlue-light text-center font-san text-[18px] font-semibold">
          Bid Better, Save Bigger!
        </p>
      </div>
      <p className="text-customBlue-light text-center font-san text-[18px] font-light">
        Accurate cost predictions for confident bidding
        <br /> and securing the best deals.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input Field */}
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border w-[250px] mt-3 outline-none"
            {...register("name", { required: "Name is required" })}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 text-center">
            {errors.name.message}
          </p>
        )}

        {/* Email Input Field */}
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border w-[250px] mt-3 outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 text-center">
            {errors.email.message}
          </p>
        )}

        {/* Phone Number Input Field */}
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="border w-[250px] mt-3 outline-none"
            {...register("phoneNo", { required: "Phone number is required" })}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {errors.phoneNo && (
          <p className="text-red-500 text-sm mt-1 text-center">
            {errors.phoneNo.message}
          </p>
        )}

        {/* Message Input Field */}
        <div className="flex justify-center items-center">
          <textarea
            rows={3}
            placeholder="Enter Your Message"
            className="border w-[250px] mt-3 outline-none resize-none"
            {...register("message", { required: "Message is required" })}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 text-center">
            {errors.message.message}
          </p>
        )}

        {/* Submit Button */}
        <div
          className={`flex justify-center items-center mt-3  ${
            isSubmitting ? "opacity-50" : ""
          } text-white`}
        >
          <button type="submit" className="border w-[130px] bg-customBlue-light p-2 mx-auto" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Send"}
          </button>
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
