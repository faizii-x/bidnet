import Messagee from "../../public/png/messagee.png";
import Locate from "../../public/png/location.png";
import Call from "../../public/png/call.png";
import Messeg from "../../public/png/messeg.png";
import Facebook from "../../public/png/facebook.png";
import Linkedin from "../../public/png/linkedin.png";
import Insta from "../../public/png/insta.png";

function Footer() {
  return (
    <>
      <div className="xxx bg-[#004750] mt-6 pb-4">
        <p className="font-san text-center padding-class pt-24 text-[18px] font-semibold text-white">
          Stay Updated with Our Latest Estimates!
        </p>

        <div className="bg-white w-[40%] h-[38px] mx-auto mt-4 mb-8">
          <div className="md:flex grid justify-between gap-2 ">
            <div className="flex justify-start gap-2 pl-2 pt-[5px]">
              <img src={Messagee} alt="" className="w-[24px] h-[24px]" />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="lg:w-[60%] w-full border-none outline-none -pt-3"
              />
            </div>
            <div className="mx-auto  bg-customBlue-dark cursor-pointer rounded-md mt-1 text-white p-1 w-[100px] border flex justify-center items-center self-center mr-2 ">
              <button className="font-san text-[14px]">SUBMIT</button>
            </div>
          </div>
        </div>
        
      </div>
      {/* ................................ */}

      <div className="bg-[#004750] p-2">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto mt-6">
          <div className="col-span-1">
            <p className="text-[16px] font-san text-white font-bold">
              QUICK LINKS
            </p>
            <div className="grid justify-start gap-1 mt-3">
              <a
                className="text-white text-[14px] font-san font-light "
                href=""
              >
                Home
              </a>
              <a
                className="text-white text-[14px] font-san font-light "
                href=""
              >
                About Us
              </a>
              <a
                className="text-white text-[14px] font-san font-light "
                href=""
              >
                Services
              </a>

              <a
                className="text-white text-[14px] font-san font-light "
                href=""
              >
                Payment
              </a>

              <a
                className="text-white text-[14px] font-san font-light "
                href=""
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-[16px] font-san text-white font-bold">
              SERVICES
            </p>

            <div className="grid justify-start gap-1 mt-3">
              <a
                className="text-white text-[14px] font-san font-light "
                href=""
              >
                Construction Cost Estimating
              </a>
              <a
                className="text-white text-[14px] font-san font-light "
                href=""
              >
                Construction Takeoff
              </a>

              <a
                className="text-white text-[14px] font-san font-light "
                href=""
              >
                CPM Scheduling
              </a>
              <a
                className="text-white text-[14px] font-san font-light "
                href=""
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
              <p className="text-white font-san text-[14px] font-light underline">
                +1 917 300 1079
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-3">
              <img src={Messeg} alt="" className="w-[22px] h-[16px] mt-1" />
              <p className="text-white font-san text-[14px] font-light underline">
                bidnetestimators@gmail.com
              </p>
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
                className="w-[24px] h-[24px] cursor-pointer"
              />
              <img
                src={Linkedin}
                alt=""
                className="w-[24px] h-[24px] cursor-pointer"
              />
              <img
                src={Insta}
                alt=""
                className="w-[24px] h-[24px] cursor-pointer"
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
