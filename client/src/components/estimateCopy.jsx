import Slider from "react-slick";


function EstimateCopy() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto mt-3">

        <div className=" mx-auto">
          <Slider {...settings}>
            <div className=" bg-customBlue-light rounded-lg p-6 mt-6 md:h-[240px] h-auto">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className=" ">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  Approval
                </h3>
                <p className="text-white text-[18px] mt-2 mb-3">
                  Following our thorough review, we will furnish you with a
                  comprehensive fee proposal for your careful consideration and
                  approval.
                </p>

                {/* <button className=" mx-auto rounded-md text-[15px] bg-white hover:bg-customBlue-dark hover:text-white  lg:w-[16%] w-[45%] h-auto p-3">
                  Upload plans
                </button> */}
              </div>
            </div>
            <div className=" bg-customBlue-light rounded-lg md:h-[240px] h-auto p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className="">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  RFI\Clarification
                </h3>
                <p className="text-white text-[18px] mt-2 mb-3">
                  The RFI email will always be sent to you if anything is
                  unclear in the plans/drawings/notes, or if required with your
                  approval we can complete the job with appropriate assumptions.
                </p>

                {/* <button className="mx-auto rounded-md text-[15px] bg-white hover:bg-customBlue-dark hover:text-white  lg:w-[16%] w-[45%] h-auto p-3">
                  Upload plans
                </button> */}
              </div>
            </div>
            <div className=" bg-customBlue-light rounded-lg md:h-[240px] h-auto p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className="">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  Submission
                </h3>

                <p className="text-white text-[18px] mt-2 mb-3">
                Our expert estimators provide detailed estimates covering materials and labor. We deliver estimates in EXCEL format, using our template or the client's preference.
                </p>

                {/* <button className="mx-auto rounded-md text-[15px] bg-white hover:bg-customBlue-dark hover:text-white  lg:w-[16%] w-[45%] h-auto p-3">
                  Upload plans
                </button> */}
              </div>
            </div>
            <div className=" bg-customBlue-light rounded-lg md:h-[240px] h-auto p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className="">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  Project
                </h3>

                <p className="text-white text-[18px] mt-2 mb-3">
                  Avail yourself of the option to either upload your plans
                  directly or forward them via email to
                  
                  <a
                    className="underline hover:text-red"
                    href="mailto:muhammad@mfbzone.com"
                  >
                    {" "}
                    muhammad@mfbzone.com
                  </a>
                </p>

                {/* <button className="mx-auto rounded-md text-[15px] bg-white hover:bg-customBlue-dark hover:text-white  lg:w-[16%] w-[45%] h-auto p-3">
                  Upload plans
                </button> */}
              </div>
            </div>
            <div className=" bg-customBlue-light rounded-lg md:h-[240px] h-auto p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className="">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  Reviewing
                </h3>

                <p className="text-white text-[18px] mt-2 mb-3">
                  Upon submission of the proposal, our team thoroughly examines
                  the drawings provided by you.
                </p>

                {/* <button className="mx-auto rounded-md text-[15px] bg-white hover:bg-customBlue-dark hover:text-white  lg:w-[16%] w-[45%] h-auto p-3">
                  Upload plans
                </button> */}
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="mt-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3 container mx-auto">
          <div className="col-span-2">
            <div className="bg-customBlue-light rounded-lg p-6">
              <p className="text-[22px] font-poppins font-bold text-white">
                Get a quote now
              </p>
              <p className="text-white text-[18px] font-poppins mt-2">
                We will send you a quote that includes the delivery time and
                date, and invoice. You can pay the amount through debit card,
                PayPal, credit card and begin with the estimate
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="bg-customBlue-light rounded-lg p-6">
              <p className="text-[22px] font-poppins font-bold text-white">
              Get your Estimate
              </p>
              <p className="text-white text-[18px] font-poppins mt-[4px]">
                Our customer support team will manage to send you a final gutter
                estimate in EXCEL format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EstimateCopy;
