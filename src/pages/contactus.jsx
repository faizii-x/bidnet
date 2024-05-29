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


function ContactUs() {
  return (
    <>
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para pt-24">
        CONTACT US
      </h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 w-[80%] container mx-auto mt-8">
        <div className="col-span-1 ">
          <p className="text-center text-black font-san text-[24px] font-semibold">
            GET IN <span className="text-customBlue-light">TOUCH</span>
          </p>
          <p className="mt-3 text-[18px] font-san font-normal">Name</p>
          <input
            type="text"
            placeholder="Muhammad Faizan"
            className="lg:w-[70%] w-full mt-2 pl-3 outline-none border-b"
          />

          <p className="mt-3 text-[18px] font-san font-normal">Email</p>
          <input
            type="text"
            placeholder="faizanramzan670@gmail.com"
            className="lg:w-[70%] w-full mt-2 pl-3 outline-none border-b"
          />

          <p className="mt-3 text-[18px] font-san font-normal">Phone Number</p>
          <input
            type="text"
            placeholder="03085170759"
            className="lg:w-[70%] w-full mt-2 pl-3 outline-none border-b"
          />

          <p className="mt-3 text-[18px] font-san font-normal">Message</p>
          <textarea
            cols={30}
            rows={1}
            type="text"
            placeholder="Write your message..."
            className="mb-5 lg:w-[70%] w-full mt-2 pl-3 outline-none border-b resize-none"
          />
          <div className="flex justify-center gap-2 rounded-lg mb-5 items-center lg:w-[70%] w-full bg-customBlue-light p-3 text-white">
            <button>Send Message</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
        <div className="col-span-1">
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
  <img src={Loca} alt="" className="w-[20px] h-[24px]"/>
  <p className="text-[#414141] text-[16px] font-san font-normal">Location</p>
</div>

<div className="flex justify-start gap-2 mt-3">
  <img src={Calli} alt="" className="w-[20px] h-[24px]"/>
  <p className="text-[#414141] text-[16px] font-san font-normal">+1 917 300 1079</p>
</div>


<div className="flex justify-start gap-2 mt-3">
  <img src={Messe} alt="" className="w-[24px] h-[24px]"/>
  <p className="text-[#414141] text-[16px] font-san font-normal">BiddingHelp@Bidnetestimating.com</p>
</div>

<p className="text-[16px] font-san font-normal mt-6 text-[#414141]">We have mentioned our phone number and mail address as well, on our site . We are just one click away from you. Contact us for any construction estimation service, construction takeoffs and other such mentioned services at our website.
Further, you can write to us by uploading your plan or any estimation service you want. So, save your precious money and catch us.</p>


<div className="flex justify-start gap-5 mt-6">
  <img src={Instaa} alt="" className="w-[28px] h-[28px]"/>
  <img src={Linkk} alt="" className="w-[28px] h-[28px]"/>
  <img src={Facee} alt="" className="w-[28px] h-[28px]"/>
</div>


        </div>
      </div>

    </>
  );
}

export default ContactUs;
