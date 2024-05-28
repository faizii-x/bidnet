import Logo from "../../public/png/logo.png";
import Logo2 from "../../public/png/logo2.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Example from "./example";
// import "flowbite";
// import {  useHistory } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  const [isHovered, setIsHovered] = useState(false);
  const [oneIsHover, setOneIsHover] = useState(false);
  const [isHoverTwo, setIsHoverTwo] = useState(false);
  const [isHoverThree, setIsHoverThree] = useState(false);
  const [isHoverFour, setIsHoverFour] = useState(false);
  const [isHoverFive, setIsHoverFive] = useState(false);
  const [isHoverSix, setIsHoverSix] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  //   const [hide, setHide ] = useState(false)

  // const [isShow, setIsShow] = useState(false);
  //   const [input, setInput] = useState("");
  // const history = useHistory();
  // const handleEnter = () => {
  //   setIsShow(true);
  // };
  // const handleLeave = () => {
  //   setIsShow(false);
  // };

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll value from the window's scrollTop property
      const currentScrollValue =
        window.scrollY || document.documentElement.scrollTop;
        //  console.log(currentScrollValue)

      // Update the state with the current scroll value
      setScrollValue(currentScrollValue);

    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
};
},[]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOneIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setOneIsHover(true);
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

  // const handleDelete = () => {
  //   setHide(true)
  //   setInput("")
  // }


  return (
    <>
    <div className="fixed w-full mx-auto z-30">
      <div className= {` relative  p-1 z-20 ${scrollValue>10 ? "class-clr": "class-clr-2"}`} >
        <div className="flex justify-between gap-12 ml-4 mr-4">
          <Link to="/">
            <img
              className="cursor-pointer mx-auto w-[100%] h-[70px] "
              src={scrollValue>10 ?  Logo2 : Logo}
              alt=""
            />
          </Link>

          <div className="class-hide-nav">
            <div className="flex justify-center gap-6 mt-6 ">
              <Link to="/">
                <h2 className="text-[16px]  font-san font-normal">
                  {pathname === "/" ? (
                    <div className=" text-red-500 ">Home</div>
                  ) : (
                    "Home"
                  )}
                </h2>
              </Link>

              <Link to="/service">
                <div className="flex justify-start gap-1">
                <h2 className="text-[16px]  font-san font-normal ">
                  {pathname === "/service" ? (
                    <div className=" text-red-500">Services</div>
                  ) : (
                    "Services"
                  )}
                </h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mt-[5px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </Link>

              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-start gap-1 cursor-pointer">
                  <Link
                    to="/our-trades/"
                    className="fonty  font-san text-[16px] font-normal cursor-pointer"
                  >
                    {pathname === "/our-trades/" ? (
                      <div className="text-">Our Trade</div>
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
                    className="w-4 h-4  mt-[5px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                {isHovered && (
                  <div className="absolute bg-customBlue-light rounded-md shadow-lg p-8 w-[840px] mt-1 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-x ">
                      <div className="col-span-1 ">
                        <Link to="/general-requirements/">
                          <h2 className="text-[14px] text-white font-normal cursor-pointer  hover:text-red">
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
                              className="fonty text-white font-inter text-[14px] font-normal mt-4 hover:text-red cursor-pointer"
                            >
                              {pathname === "/sitework-estimating-services/" ? (
                                <div className="text-red">Sitework</div>
                              ) : (
                                "Sitework"
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
                                <Link to="/landscape-estimating-services/">
                                  <li className="text-[14px] font-normal hover:text-red">
                                    Landscaping Estimating
                                  </li>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>

                        <Link to="/concrete-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-red">
                            Concrete
                          </h2>
                        </Link>
                        <Link to="/masonry-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-red">
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
                              className="fonty  text-white font-inter text-[14px] font-normal hover:text-red cursor-pointer"
                            >
                              {pathname === "/metals-estimating-services/" ? (
                                <div className="text-red">Metals</div>
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
                                  <li className="text-[14px] font-normal hover:text-red">
                                    Rebar Estimating Services
                                  </li>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>

                        <Link to="/lumber-takeoff-services/">
                          <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-red">
                            Lumber Takeoff
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
                              className="fonty  text-white font-inter text-[14px] mt-3 font-normal hover:text-red cursor-pointer"
                            >
                              {pathname ===
                              "/thermal-moisture-protection-estimating-services/" ? (
                                <div className="text-red">
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
                                  <li className="text-[14px] font-normal hover:text-red">
                                    Roofing
                                  </li>
                                </Link>
                                <Link to="/insulation-estimating-services/">
                                  <li className="text-[14px] font-normal mt-1 hover:text-red">
                                    Insulation
                                  </li>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>

                        <Link to="/framing-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-red">
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
                              className="fonty  text-white font-inter text-[14px] font-normal hover:text-red cursor-pointer"
                            >
                              {pathname === "/interior-exterior-finishes/" ? (
                                <div className="text-red">
                                  Interior & Exterior Finishes
                                </div>
                              ) : (
                                " Interior & Exterior Finishes"
                              )}
                            </Link>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 text-white mt-[4px] mr-4"
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
                                  <li className="text-[14px]  font-normal hover:text-red">
                                    Drywall Estimating
                                  </li>
                                </Link>
                                <Link to="/flooring-estimating-services/">
                                  <li className="text-[14px]  mt-1 font-normal hover:text-red">
                                    Flooring Estimating
                                  </li>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>

                        <Link to="/specialties/">
                          <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-red">
                            Specialties
                          </h2>
                        </Link>
                        <Link to="/equipment-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-red">
                            Equipment
                          </h2>
                        </Link>
                        <Link to="/furnishing-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-red">
                            Furnishing
                          </h2>
                        </Link>
                      </div>
                      <div className="col-span-1 pl-6">
                        <Link to="/special-construction-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal  cursor-pointer hover:text-red">
                            Special Construction
                          </h2>
                        </Link>
                        <Link to="/conveying-system-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-red">
                            Conveying Systems
                          </h2>
                        </Link>

                        <div
                          className="relative"
                          onMouseEnter={handleMouseEnterSix}
                          onMouseLeave={handleMouseLeaveSix}
                        >
                          <div className="flex justify-start gap-1 cursor-pointer">
                            <Link
                              to="/mep-estimating-services/"
                              className="fonty mt-3 text-white font-inter text-[14px] font-normal hover:text-red cursor-pointer"
                            >
                              {pathname === "/mep-estimating-services/" ? (
                                <div className="text-red">MEP</div>
                              ) : (
                                "MEP"
                              )}
                            </Link>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 text-white mt-[15px]"
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
                                  <li className="text-[14px] font-normal hover:text-red">
                                    Mechanical
                                  </li>
                                </Link>

                                <Link to="/electrical-estimating-services/">
                                  <li className="text-[14px]  mt-2 font-normal hover:text-red">
                                    Electrical
                                  </li>
                                </Link>

                                <Link to="/plumbing-estimating-services/">
                                  <li className="text-[14px] mt-2 font-normal hover:text-red">
                                    Plumbing
                                  </li>
                                </Link>

                                <Link to="/gutter-estimating-services/">
                                  <li className="text-[14px] mt-2 font-normal hover:text-red">
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
                          <h2 className="text-[14px] text-white font-normal   cursor-pointer hover:text-red">
                            HVAC
                          </h2>
                        </Link>
                        <Link to="/commercial-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-red">
                            Commercial Estimating
                          </h2>
                        </Link>
                        <Link to="/industrial-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal mt-3 cursor-pointer hover:text-red">
                            Industrial Estimating
                          </h2>
                        </Link>
                        <Link to="/residential-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal mt-3 cursor-pointer hover:text-red">
                            Residential Estimating
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/about-us/">
                <div className="flex justify-start gap-1">
                  <h2 className="text-[16px]  font-san font-normal ">
                    {pathname === "/about-us/" ? (
                      <div className=" text-">About Us</div>
                    ) : (
                      "About Us"
                    )}
                  </h2>
                </div>
              </Link>

              <Link to="/payment">
                <h2 className="text-[16px]  font-san font-normal  ">
                  {pathname === "/payment" ? (
                    <div className=" text-red"> Payment</div>
                  ) : (
                    "Payment"
                  )}
                </h2>
              </Link>

              <Link to="/testimonials">
                <h2 className="text-[16px] font-san font-normal">
                  {pathname === "/testimonials" ? (
                    <div className=" text-red"> Testimonials</div>
                  ) : (
                    "Testimonials"
                  )}
                </h2>
              </Link>

              <Link to="/estimating-fee/">
                <h2 className="text-[16px]  font-san font-normal ">
                  {pathname === "/estimating-fee/" ? (
                    <div className=" text-red"> Estimating fee</div>
                  ) : (
                    " Estimating fee"
                  )}
                </h2>
              </Link>

              <Link to="/contact-us/">
                <h2 className="text-[16px]  font-san font-normal">
                  {pathname === "/contact-us/" ? (
                    <div className=" text-red"> Contact Us</div>
                  ) : (
                    " Contact Us"
                  )}
                </h2>
              </Link>
            </div>
          </div>
          <div className="hidden md:block self-center">
            <div className=" border w-[140px] font-san hover:bg-[#004750] hover:text-white h-[50px] self-center flex justify-center items-center cursor-pointer">
              <button className="">Quick Estimate</button>
            </div>
          </div>

          <div className="flex md:hidden justify-end mt-5">
            <svg
              onClick={() => setOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-red rounded-md text-[#004750]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        <Example open={open} setOpen={handleOnClose} />
      </div>
      </div>
    </>
  );
}

export default Navbar;
