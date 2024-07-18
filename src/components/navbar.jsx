import Logo2 from "../../public/png/logo2.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Example from "./example";
import "flowbite";
import Modal from "./modal";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  const [clickForm, setClickForm] = useState(false)
  const handleClick = () => setClickForm(false);

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollValue =
        window.scrollY || document.documentElement.scrollTop;

      setScrollValue(currentScrollValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  return (
    <>
      <div className="fixed max-w-full container mx-auto z-30 shadow-lg bg-white">
        <div
          className=""
          // {` relative  p-1 z-20 ${scrollValue>10 ? "class-clr": "class-clr-2"}`}
        >
          <div className="flex justify-between gap-12 ml-4 mr-4">
            <Link to="/">
              <img
                className="cursor-pointer mx-auto w-[100%] h-[70px] "
                src={Logo2}
                // {scrollValue>10 ?  Logo2 : Logo}
                alt=""
              />
            </Link>

            <div className="class-hide-nav">
              <div className="flex justify-center gap-6 mt-6 ">
                <Link to="/">
                  <h2 className="text-[15px]  font-san font-semibold hover:text-customBlue-light">
                    {pathname === "/" ? (
                      <div className=" text-customBlue-light ">Home</div>
                    ) : (
                      "Home"
                    )}
                  </h2>
                </Link>
                <div className="relative group ">
                    <Link to="/services">
                      <div
                        id="multiLevelDropdownButton"
                        className="flex justify-start gap-1"
                      >
                        <h2 className="text-[15px]  font-san font-semibold hover:text-customBlue-light cursor-pointer">
                          {pathname === "/Services" ? (
                            <div className=" text-customBlue-light">
                             Services
                            </div>
                          ) : (
                            "Services"
                          )}
                        </h2>
                        <svg
                          className="w-2.5 h-2.5 mt-2 cursor-pointer"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </div>
                    </Link>
                    <div
                      id="multi-dropdown"
                      className="absolute w-[260px] hidden bg-white divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700 group-hover:block"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="multiLevelDropdownButton"
                      >
                        <li>
                          <a
                            href="/cost-estimating-services/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Cost Estimating Services
                          </a>
                        </li>
                        <li className="relative group">
                          <Link to="/construction-takeoff-services/">
                          <button
                            id="doubleDropdownButton"
                            type="button"
                            className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Construction Takeoff Services
                            <svg
                              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                              />
                            </svg>
                          </button>
                          </Link>
                          <div
                            id="doubleDropdown"
                            className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="doubleDropdownButton"
                            >
                              <li>
                                <a
                                  href="/material-takeoff-services/"
                                  className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Material Takeoff Services
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/quantity-takeoff-services/"
                                  className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Quantity Takeoff Services
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                       
                       
                       
                        
                    
                        <li>
                          <a
                            href="/cpm-scheduling/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            CPM Scheduling
                          </a>
                        </li>
                      
                        
                        <li>
                          <a
                            href="/planning"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Planning
                          </a>
                        </li>
                       
                      </ul>
                    </div>
                  </div>

             

                

                  <div className="relative group">
                    <Link to="/our-trades/">
                      <div
                        id="multiLevelDropdownButton"
                        className="flex justify-start gap-1"
                      >
                        <h2 className="text-[15px]  font-san font-semibold hover:text-customBlue-light cursor-pointer">
                          {pathname === "/our-trades/" ? (
                            <div className=" text-customBlue-light">
                              Our Trades
                            </div>
                          ) : (
                            "Our Trades"
                          )}
                        </h2>
                        <svg
                          className="w-2.5 h-2.5 mt-2 cursor-pointer"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </div>
                    </Link>
                    <div
                      id="multi-dropdown"
                      className="absolute w-[260px] hidden bg-white divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700 group-hover:block"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="multiLevelDropdownButton"
                      >
                        <li>
                          <a
                            href="/general-requirements/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            General Requirements
                          </a>
                        </li>
                        <li className="relative group">
                          <Link to="/sitework-estimating-services/">
                          <button
                            id="doubleDropdownButton"
                            type="button"
                            className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Sitework Estimating Services
                            <svg
                              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                              />
                            </svg>
                          </button>
                          </Link>
                          <div
                            id="doubleDropdown"
                            className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="doubleDropdownButton"
                            >
                              <li>
                                <a
                                  href="/landscaping-estimating-services/"
                                  className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Landscaping Estimating Services
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a
                            href="/concrete-estimating-services/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Concrete Estimating Services
                          </a>
                        </li>
                        <li className="relative group">
                          <Link to="/metals-estimating-services/">
                          <button
                            id="doubleDropdownButton"
                            type="button"
                            className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Metals Estimating Services
                            <svg
                              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                              />
                            </svg>
                          </button>
                          </Link>
                          <div
                            id="doubleDropdown"
                            className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="doubleDropdownButton"
                            >
                              <li>
                                <a
                                  href="/rebar-estimating-services/"
                                  className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Rebar Estimating Services
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a
                            href="/drywall-estimating-services/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Drywall Estimating Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hvac-estimating-services/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            HVAC Estimating Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="/lumber-takeoff-services/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Lumber Takeoff Services
                          </a>
                        </li>
                        <li className="relative group">
                          <Link to="/mep-estimating-services/">
                          <button
                            id="doubleDropdownButton"
                            type="button"
                            className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            MEP Estimating Services
                            <svg
                              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                              />
                            </svg>
                          </button>
                          </Link>
                          <div
                            id="doubleDropdown"
                            className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="doubleDropdownButton"
                            >
                              <li>
                                <a
                                  href="/mechanical-estimating-services/"
                                  className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Mechanical Estimating Services
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/electrical-estimating-services/"
                                  className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Electrical Estimating Services
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/plumbing-estimating-services/"
                                  className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Plumbing Estimating Services
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="relative group">
                          <Link to="/thermal-moisture-protection-estimating-services/">
                          <button
                            id="doubleDropdownButton"
                            type="button"
                            className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Thermal & Moisture Protection
                            <svg
                              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                              />
                            </svg>
                          </button>
                          </Link>
                          <div
                            id="doubleDropdown"
                            className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="doubleDropdownButton"
                            >
                              <li>
                                <a
                                  href="/roofing-estimating-services/"
                                  className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Roofing Estimating Services
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <a
                            href="/interior-exterior-finishes/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Interior & Exterior Finishes
                          </a>
                        </li>
                        <li>
                          <a
                            href="/commercial-estimating-services/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Commercial Estimating Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="/residential-estimating-services/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Residential Estimating Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="/industrial-estimating-services/"
                            className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                          >
                            Industrial Estimating Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                
                <Link to="/about-us/">
                  <div className="flex justify-start gap-1">
                    <h2 className="text-[15px]  font-san font-semibold hover:text-customBlue-light">
                      {pathname === "/about-us/" ? (
                        <div className="text-customBlue-light">About Us</div>
                      ) : (
                        "About Us"
                      )}
                    </h2>
                  </div>
                </Link>

                <Link to="/payment">
                  <h2 className="text-[15px]  font-san font-semibold  hover:text-customBlue-light">
                    {pathname === "/payment" ? (
                      <div className="text-customBlue-light"> Payment</div>
                    ) : (
                      "Payment"
                    )}
                  </h2>
                </Link>

                <Link to="/estimating-fee/">
                  <h2 className="text-[15px]  font-san font-semibold hover:text-customBlue-light ">
                    {pathname === "/estimating-fee/" ? (
                      <div className="text-customBlue-light">
                        {" "}
                        Estimating fee
                      </div>
                    ) : (
                      " Estimating fee"
                    )}
                  </h2>
                </Link>

                <Link to="/contact-us/">
                  <h2 className="text-[15px]  font-san font-semibold hover:text-customBlue-light">
                    {pathname === "/contact-us/" ? (
                      <div className="text-customBlue-light"> Contact Us</div>
                    ) : (
                      " Contact Us"
                    )}
                  </h2>
                </Link>
              </div>
            </div>
            <div  className="hidden md:block self-center">
              <div onClick={() => setClickForm(true)} className=" border font-medium w-[140px] font-san hover:bg-customBlue-dark hover:text-white h-[50px] self-center flex justify-center items-center cursor-pointer hover:zoom-in">
                <button className="">Quick Estimate</button>
              </div>
            </div>

            {clickForm && <Modal handleClick={handleClick} />}

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
