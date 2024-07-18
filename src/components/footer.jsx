import Messagee from "../../public/png/messagee.png";
import Locate from "../../public/png/location.png";
import Call from "../../public/png/call.png";
import Messeg from "../../public/png/messeg.png";
import Facebook from "../../public/png/facebook.png";
import Linkedin from "../../public/png/linkedin.png";
import Insta from "../../public/png/insta.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {

  const [email, setEmail] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const Emailchangefunction = (e) => {
    setEmail(e.target.value);
    setDisableButton(!disableButton);
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


  return (
    <>
   
      {/* ................................ */}

      <div className="bg-[#004750] w-[96%] round-class mx-auto p-2 mt-16">
      <p className="font-san text-center text-[18px] pt-2 font-semibold text-white">
          Stay Updated with Our Latest Estimates!
        </p>
        <div className="bg-white lg:w-[40%] w-[80%] h-[38px]  mx-auto mt-4 mb-8 p-1">
          <form onFormSubmit={onSubmit}>
          <div className="sm:flex grid justify-between gap-2 ">
            <div className="flex justify-start gap-2 pl-2 ">
              <img src={Messagee} alt="" className="w-[28px] h-[24px] " />
              
              <input
              required
                type="text"
                value={email}
              onChange={Emailchangefunction}
                placeholder="Enter Your Email"
                className=" w-full border-none h-[30px] outline-none"
              />
            </div>
            <div  
            className="mx-auto bg-customBlue-dark cursor-pointer rounded-md  text-white p-1 w-[100px] border flex justify-center items-center self-center mr-2 ">
              <button className="font-san text-[14px]">SUBMIT</button>
            </div>
          </div>
            </form>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-[90%] container mx-auto mt-6">
          <div className="col-span-1">
            <p className="text-[16px] font-san text-white font-bold">
              QUICK LINKS
            </p>
            <div className="grid justify-start gap-1 mt-3">
              <Link
                className="text-white text-[14px] font-san font-light hover:underline"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-white text-[14px] font-san font-light hover:underline"
                to="/about-us/"
              >
                About Us
              </Link>
              <Link
                className="text-white text-[14px] font-san font-light hover:underline"
                to="/services/"
              >
                Services
              </Link>

              <Link
                className="text-white text-[14px] font-san font-light hover:underline"
                to="/payment/"
              >
                Payment
              </Link>

              <Link
                className="text-white text-[14px] font-san font-light hover:underline"
                to="/contact-us/"
              >
                Contact Us 
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-[16px] font-san text-white font-bold">
              SERVICES
            </p>

            <div className="grid justify-start gap-1 mt-3">
              <a
                className="text-white text-[14px] font-san font-light hover:underline"
                href="/cost-estimating-services/"
              >
                Construction Cost Estimating
              </a>
              <a
                className="text-white text-[14px] font-san font-light hover:underline"
                href="/construction-takeoff-services/"
              >
                Construction Takeoff
              </a>

              <a
                className="text-white text-[14px] font-san font-light hover:underline"
                href="/cpm-scheduling/"
              >
                CPM Scheduling
              </a>
              <a
                className="text-white text-[14px] font-san font-light hover:underline"
                href="/planning/"
              >
                Planning
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-[16px] font-san text-white font-bold">
              COME FIND US
            </p>
            <div className="flex justify-start gap-2 mt-3">
              <img src={Locate} alt="" className="w-[18px] h-[22px]" />
              <p className="text-white font-san text-[14px] font-light">
                111 Fulton St, New York, NY 10038, USA
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-3">
              <img src={Call} alt="" className="w-[22px] h-[20px]" />
              <a href="tel:+1 917 300 1079">
              <p className="text-white font-san text-[14px] font-light underline">
                +1 917 300 1079
              </p>
              </a>
            </div>
            <div className="flex justify-start gap-2 mt-3">
              <img src={Messeg} alt="" className="w-[22px] h-[16px] mt-1" />
              <a href="mailto:bidnetestimators@gmail.com">
              <p className="text-white font-san text-[14px] font-light underline">
                bidnetestimators@gmail.com
              </p>
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-[16px] font-san text-white font-bold">
              STAY CONNECTED
            </p>
            <div className="flex justify-start gap-3 mt-3">
              <img
                src={Facebook}
                alt=""
                className="w-[24px] h-[24px] cursor-pointer  "
              />
              <img
                src={Linkedin}
                alt=""
                className="w-[24px] h-[24px] cursor-pointer "
              />
              <img
                src={Insta}
                alt=""
                className="w-[24px] h-[24px] cursor-pointer "
              />
            </div>
          </div>
        </div>

        <p className="text-white font-san text-center text-[13px] mt-4">
          Copyright © 2024 Bidnet Estimating Designed By{" "}
          <span className="text-[#0EC30E]">MF</span>{" "}
          <span className="text-[#FA8A42]">Bzone</span>{" "}
        </p>
      </div>
    </>
  );
}

export default Footer;
