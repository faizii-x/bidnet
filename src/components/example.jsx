import { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Logo from "../../public/png/logo.png";
import { Link, useLocation } from "react-router-dom";
// import Modal from "./modal";

export default function Example({ open, setOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverThree, setIsHoverThree] = useState(false);
  const [isHoverFour, setIsHoverFour] = useState(false);
  const [isHoverFive, setIsHoverFive] = useState(false);
  const [isHoverSix, setIsHoverSix] = useState(false);
  const [isHoverTwo, setIsHoverTwo] = useState(false);
//   const [hello, setHello] = useState(false);

//   const openModal = () => {
//     setHello(true);
//   };

//   const closeModal = () => {
//     setHello(false);
//   };

  const handleMouseEnter = () => {     
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnterTwo = () => {
    setIsHoverTwo(true);
  };
  const handleMouseLeaveTwo = () => {
    setIsHoverTwo(false);
  };


  const handleMouseEnterThree = () => {
    setIsHoverThree(true);
  };
  const handleMouseLeaveThree = () => {
    setIsHoverThree(false);
  };

  const handleMouseEnterFour = () => {
    setIsHoverFour(true);
  };
  const handleMouseLeaveFour = () => {
    setIsHoverFour(false);
  };
  const handleMouseEnterFive = () => {
    setIsHoverFive(true);
  };
  const handleMouseLeaveFive = () => {
    setIsHoverFive(false);
  };
  const handleMouseEnterSix = () => {
    setIsHoverSix(true);
  };
  const handleMouseLeaveSix = () => {
    setIsHoverSix(false);
  };
      
  const { pathname } = useLocation();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>
        <div className="">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-1 right-2  flex">
                      <button
                        type="button"
                        className="rounded-md text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>        
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex  h-full flex-col overflow-y-scroll bg-[#393A3B] z-999 py-6 shadow-xl">
                    <div className="container grid grid-cols-1 p-3">
                      <Link to="/">
                      <img src={Logo} />
                      </Link>
                      <Link to="/">
                        <p className="hover:text-hover  text-white pt-5">
                          Home
                        </p>
                      </Link>
                      <Link to="/services/">
                        <p className="hover:text-hover  text-white pt-5">
                          Service
                        </p>
                      </Link>

          
                       <div
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex justify-start gap-1 cursor-pointer">
                        <Link
                          to="/our-trades/"
                          className="fonty mt-6 text-white font-inter lg:text-[14px] xl:text-[16px] font-normal  hover:text-[#15A7AD] cursor-pointer"
                        >
                          {pathname === "/our-trades/" ? (
                            <div className="text-[#15A7AD]">Our Trade</div>
                          ) : (
                            "Our Trade"
                          )}
                        </Link>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 text-white mt-[29px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>

                      {isHovered && (
                        <div className="absolute bg-[#212121] rounded-md shadow-lg p-8 w-[910px] mt-1 z-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-x ">
                            <div className="col-span-1 ">
                              <Link to="/general-requirements/">
                                <h2 className="text-[14px] text-white font-normal cursor-pointer hover:text-[15px] hover:font-semibold hover:text-[#15A7AD]">
                                  General Requirements
                                </h2>
                              </Link>

                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterTwo}
                                onMouseLeave={handleMouseLeaveTwo}
                              >
                                <div className="flex justify-start gap-1 cursor-pointer">
                                  <Link
                                    to="/sitework-estimating-services/"
                                    className="fonty text-white hover:text-[15px] hover:font-semibold font-inter text-[14px] font-normal mt-4 hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname ===
                                    "/sitework-estimating-services/" ? (
                                      <div className="text-[#15A7AD]">
                                        Site Works
                                      </div>
                                    ) : (
                                      "Site Works"
                                    )}
                                  </Link>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-white mt-[20px]"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverTwo && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[45px] z-[999px]">
                                      <Link to="/landscaping-estimating-services/">
                                        <li className="text-[14px] hover:font-bold font-normal hover:text-[#15A7AD]">
                                          Landscaping Estimating
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link to="/concrete-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Concrete
                                </h2>
                              </Link>
                              <Link to="/masonry-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Masonry
                                </h2>
                              </Link>
                            </div>
                            <div className="col-span-1 pl-6">
                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterThree}
                                onMouseLeave={handleMouseLeaveThree}
                              >
                                <div className="flex justify-start gap-1 cursor-pointer">
                                  <Link
                                    to="/metals-estimating-services/"
                                    className="fonty hover:text-[15px] hover:font-semibold text-white font-inter text-[14px] font-normal hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname ===
                                    "/metals-estimating-services/" ? (
                                      <div className="text-[#15A7AD]">
                                        Metals
                                      </div>
                                    ) : (
                                      "Metals"
                                    )}
                                  </Link>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-white mt-[4px]"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverThree && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[45px] z-[999px]">
                                      <Link to="/rebar-estimating-services/">
                                        <li className="text-[14px] hover:font-bold font-normal hover:text-[#15A7AD]">
                                          Rebar Estimating Services
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link to="/lumber-takeoff-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Lumber Estimating
                                </h2>
                              </Link>

                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterFive}
                                onMouseLeave={handleMouseLeaveFive}
                              >
                                <div className="grid justify-start gap-0 cursor-pointer">
                                  <Link
                                    to="/thermal-moisture-protection-estimating-services/"
                                    className="fonty hover:text-[15px] hover:font-semibold text-white font-inter text-[14px] mt-3 font-normal hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname ===
                                    "/thermal-moisture-protection-estimating-services/" ? (
                                      <div className="text-[#15A7AD]">
                                        Thermal and Moisture Protection
                                      </div>
                                    ) : (
                                      "Thermal and Moisture Protection"
                                    )}
                                  </Link>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-white mx-auto"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverFive && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[65px] z-[999px]">
                                      <Link to="/roofing-estimating-services/">
                                        <li className="text-[14px] hover:font-bold font-normal hover:text-[#15A7AD]">
                                          Roofing
                                        </li>
                                      </Link>
                                      <Link to="/insulation-estimating-services/">
                                        <li className="text-[14px] hover:font-bold font-normal mt-1 hover:text-[#15A7AD]">
                                          Insulation
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link to="/framing-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Framing
                                </h2>
                              </Link>
                            </div>
                            <div className="col-span-1 pl-6">
                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterFour}
                                onMouseLeave={handleMouseLeaveFour}
                              >
                                <div className="flex justify-start gap-1 cursor-pointer">
                                  <Link
                                    to="/interior-exterior-finishes/"
                                    className="fonty hover:text-[15px] hover:font-semibold text-white font-inter text-[14px] font-normal hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname ===
                                    "/interior-exterior-finishes/" ? (
                                      <div className="text-[#15A7AD]">
                                        Finishes
                                      </div>
                                    ) : (
                                      "Finishes"
                                    )}
                                  </Link>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-white mt-[4px]"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverFour && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[65px] z-[999px]">
                                      <Link to="/drywall-estimating-services/">
                                        <li className="text-[14px] hover:font-bold font-normal hover:text-[#15A7AD]">
                                          Drywall Estimation
                                        </li>
                                      </Link>
                                      <Link to="/flooring-estimating-services/">
                                        <li className="text-[14px] hover:font-bold mt-1 font-normal hover:text-[#15A7AD]">
                                          Flooring Estimation
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link to="/specialties/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Specialties
                                </h2>
                              </Link>
                              <Link to="/equipment-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Equipment
                                </h2>
                              </Link>
                              <Link to="/furnishing-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Furnishing
                                </h2>
                              </Link>
                            </div>
                            <div className="col-span-1 pl-6">
                              <Link to="/special-construction-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold cursor-pointer hover:text-[#15A7AD]">
                                  Special Construction
                                </h2>
                              </Link>
                              <Link to="/conveying-system/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Conveying Systems
                                </h2>
                              </Link>

                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterSix}
                                onMouseLeave={handleMouseLeaveSix}
                              >
                                <div className="flex justify-start gap-1 cursor-pointer">
                                  <p
                                    to=""
                                    className="fonty hover:text-[15px] mt-3 hover:font-semibold text-white font-inter text-[14px] font-normal hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname === "" ? (
                                      <div className="text-[#15A7AD]">MEP</div>
                                    ) : (
                                      "MEP"
                                    )}
                                  </p>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-white mt-[15px]"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverSix && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[135px] z-[999px]">
                                      <Link to="/mechanical-estimating-services/">
                                        <li className="text-[14px] hover:font-bold font-normal hover:text-[#15A7AD]">
                                          Mechanical
                                        </li>
                                      </Link>

                                      <Link to="/electrical-estimating-services/">
                                        <li className="text-[14px] hover:font-bold mt-2 font-normal hover:text-[#15A7AD]">
                                          Electrical
                                        </li>
                                      </Link>

                                      <Link to="/plumbing-estimating-services/">
                                        <li className="text-[14px] hover:font-bold mt-2 font-normal hover:text-[#15A7AD]">
                                          Plumbing
                                        </li>
                                      </Link>

                                      <Link to="/gutter-estimating-services/">
                                        <li className="text-[14px] hover:font-bold mt-2 font-normal hover:text-[#15A7AD]">
                                          Gutter
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="col-span-1 pl-6">
                              <Link to="/hvac-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold cursor-pointer hover:text-[#15A7AD]">
                                  HVAC
                                </h2>
                              </Link>
                              <Link to="/commercial-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Commercial Estimating
                                </h2>
                              </Link>
                              <Link to="/industrial-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Industrial Estimating
                                </h2>
                              </Link>
                              <Link to="/residential-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Residential Estimating
                                </h2>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                      <Link to="/about-us/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          About Us
                        </p>
                      </Link>
                      <Link to="/payment/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Payment
                        </p>
                      </Link>
                      <Link to="/testimonials/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Testimonials
                        </p>
                      </Link>

                      <Link to="/estimation-fee/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Estimation fee
                        </p>
                      </Link>
                      <Link to="/contact-us/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Contact
                        </p>
                      </Link>

                      <button
                    //    onClick={openModal} 
                       className="mt-[18px] w-[149px] h-[42px] bg-white hover:bg-[#15A7AD] font-inter text-[16px] text-black rounded-[15px]">
                        Quick Estimate
                      </button>
                    </div>
                  </div>
                  {/* {hello && <Modal closeModal={closeModal} />} */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    
  );
}
