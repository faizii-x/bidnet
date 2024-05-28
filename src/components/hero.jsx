function Hero() {
  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${"/png/heroimg.png"})` }}
      >
        <p className="md:pt-[30vh] pt-[17vh]  md:p-16 p-5 sm:text-[36px] text-[24px] font-san font-semibold text-white sm:leading-[54px] leading-0px]">
          Accurate Construction Estimating
          <br /> Services | Win More Bids with Bidnet
          <br /> Estimating{" "}
        </p>

        <p className="-lg:mt-24 -mt-[110px] animated-background md:p-16 p-5 font-san text-white font-light class-media-manage">
          GET <span className="font-bold">40% OFF</span> ON YOUR FIRST ESTIMATE
        </p>
        <div className="md:flex grid justify-start gap-3 -sm:mt-24 -mt-[90px] p-16 class-media-manage-1">
          <div className="border p-3 font-san text-white hover:bg-white hover:text-black cursor-pointer flex justify-center items-center w-[170px]">
            <button>Our Services</button>
          </div>
          <div className=" border p-3 font-san text-white hover:bg-white hover:text-black cursor-pointer flex justify-center items-center w-[170px]">
            <button>Call Now</button>
          </div>
        </div>
      </div>
      {/* .............................. */}

      <div className="bg-customBlue-dark p-4 mt-[1px]">
        <div className="md:flex grid justify-between gap-1 ">
          <p className="text-[16px] text-white font-san self-center md:ml-16 ml-2">
            Schedule a Consultation with Our Expert Construction Estimators to
            Discuss Your Project Today!
          </p>
          <div className="flex justify-center hover:bg-white hover:text-[#004750] cursor-pointer text-white font-san items-center p-2 border w-[230px] mx-auto">
            <button>Book an Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
