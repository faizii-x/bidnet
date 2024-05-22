import Messagee from "../../public/png/messagee.png";
import Locate from "../../public/png/location.png";

function Footer() {
  return (
    <>
      <div className="xxx bg-[#004750] mt-6 pb-8">
        <p className="font-san text-center pt-24 text-[20px] font-semibold text-white">
          Stay Updated with Our Latest Estimates!
        </p>

        <div className="bg-white w-[40%] h-[40px] mx-auto mt-4 mb-2">
          <div className="flex justify-between gap-2">
            <div className="flex justify-start gap-2 pl-2 pt-2">
              <img src={Messagee} alt="" className="w-[24px] h-[24px]" />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-[60%] border-none outline-none"
              />
            </div>
            <div className="bg-customBlue-dark cursor-pointer rounded-md mt-1 text-white p-1 w-[100px] border flex justify-center items-center self-center mr-4 ">
              <button className="font-san">SUBMIT</button>
            </div>
          </div>
        </div>
        {/* <hr className="mt-7" /> */}
      </div>
      {/* ................................ */}

      <div className="bg-[#004750] p-2 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container mx-auto ">
          <div className="col-span-1">
            <p className="text-[18px] font-san text-white font-bold">
              QUICK LINKS
            </p>
            <div className="grid justify-start gap-1 mt-3">
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                Home
              </a>
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                About Us
              </a>
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                Services
              </a>
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                Trades
              </a>
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                Payment
              </a>
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                Estimation fee
              </a>
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-[18px] font-san text-white font-bold">
              SERVICES
            </p>

            <div className="grid justify-start gap-1 mt-3">
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                Construction Cost Estimating
              </a>
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                Construction Takeoff
              </a>

              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                CPM Scheduling
              </a>
              <a
                className="text-white text-[16px] font-san font-light "
                href=""
              >
                Planning
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-[18px] font-san text-white font-bold">
              COME FIND US
            </p>
            <div className="flex justify-start gap-2">
                <img src={Locate} alt="" />
                <p className="">111 Fulton St, New York, NY 10038, USA</p>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-[18px] font-san text-white font-bold">
              STAY CONNECTED
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
