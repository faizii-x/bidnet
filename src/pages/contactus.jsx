import Cont from "../../public/png/cont.png";
import Banner from "../components/banner";
import Line from "../../public/png/line.png";
import Loc from "../../public/png/loc.png";
import Map from "../../public/png/map.png";
import Loca from "../../public/png/loca.png";
import Calli from "../../public/png/calli.png";
import Messe from "../../public/png/messe.png";
import Instaa from "../../public/png/instaa.png";
import Linkk from "../../public/png/linkk.png";
import Facee from "../../public/png/facee.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactUs() {
  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFileName(e.target.files[0]);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [filelink, setFileLink] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [disableButton, setDisableButton] = useState(true);

  const Emailchangefunction = (e) => {
    setEmail(e.target.value);
    setDisableButton(!disableButton);
  };
  console.log(email);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Contact", Contact);
    formData.append("attachment", selectedFileName);
    formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    try {
      const response = await fetch("https://api.quickbidestimating.com/", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        alert("Email sent successfully");
        setEmail("");
        setName("");
        setContact("");
        setFileLink("");
        setRequirements("");
        setAttachment("");
        setSelectedFileName("");
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
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <h1 className="text-[24px] font-san font-semibold text-center text-customBlue-para pt-24">
        CONTACT US
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 w-[70%] container mx-auto mt-8">
        <div className="col-span-1 ">
          <p className=" text-black font-san text-[24px] font-semibold">
            GET IN <span className="text-customBlue-light">TOUCH</span>
          </p>
          <p className="mt-3 text-[15px] font-san font-semibold">Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Muhammad Faizan"
            className="lg:w-[70%] w-full mt-2  outline-none border-b"
          />

          <p className="mt-3 text-[15px] font-san font-semibold">Email</p>
          <input
            type="text"
            value={email}
            onChange={Emailchangefunction}
            placeholder="faizanramzan670@gmail.com"
            className="lg:w-[70%] w-full mt-2  outline-none border-b"
          />

          <p className="mt-3 text-[15px] font-san font-semibold">
            Phone Number
          </p>
          <input
            type="text"
            placeholder="03085170759"
            value={Contact}
            onChange={(e) => setContact(e.target.value)}
            className="lg:w-[70%] w-full mt-2  outline-none border-b"
          />

          <p className="mt-3 text-[15px] font-san font-semibold">Message</p>
          <textarea
            cols={30}
            rows={1}
            type="text"
            value={Requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="Write your message..."
            className="mb-5 lg:w-[70%] w-full mt-2 outline-none border-b resize-none"
          />
          <div
            disabled={disableButton}
            onClick={onFormSubmit}
            className="flex justify-center hover:shadow-lg cursor-pointer gap-2 rounded-lg mb-5 items-center lg:w-[70%] w-full bg-customBlue-light p-3 text-white"
          >
            <button>Send Message</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
        <div
          className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center"
          data-aos="fade-right"
        >
          <img src={Cont} alt="" className=" lg:h-[400px] h-auto mx-auto" />
        </div>
      </div>
      {/* .................................... */}
      <Banner />
      {/* ................................. */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Loc} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        LOCATION
      </h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 container mx-auto w-[80%] mt-6">
        <div className="col-span-1">
          <img src={Map} alt="" />
        </div>
        <div className="col-span-1">
          <div className="flex justify-start gap-2">
            <img src={Loca} alt="" className="w-[20px] h-[24px]" />
            <p className="text-[#414141] text-[16px] font-san font-normal">
              Location
            </p>
          </div>

          <div className="flex justify-start gap-2 mt-3">
            <img src={Calli} alt="" className="w-[20px] h-[24px]" />
            <a href="tel:+1 917 300 1079">
              <p className="text-[#414141] text-[16px] font-san font-normal">
                +1 917 300 1079
              </p>
            </a>
          </div>

          <div className="flex justify-start gap-2 mt-3">
            <img src={Messe} alt="" className="w-[24px] h-[20px]" />
            <a href="mailto:bidnetestimators@gmail.com">
              <p className="text-[#414141] sm:text-[16px] text-[14px] font-san font-normal">
                BiddingHelp@Bidnetestimating.com
              </p>
            </a>
          </div>

          <p className="text-[16px] font-san font-normal mt-6 text-[#414141]">
            We have mentioned our phone number and mail address as well, on our
            site . We are just one click away from you. Contact us for any
            construction estimation service, construction takeoffs and other
            such mentioned services at our website. Further, you can write to us
            by uploading your plan or any estimation service you want. So, save
            your precious money and catch us.
          </p>

          <div className="flex justify-start gap-5 mt-6">
            <img
              src={Instaa}
              alt=""
              className="w-[28px] h-[28px] cursor-pointer"
            />
            <img
              src={Linkk}
              alt=""
              className="w-[28px] h-[28px] cursor-pointer"
            />
            <img
              src={Facee}
              alt=""
              className="w-[28px] h-[28px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
