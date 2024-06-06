

import { useEffect, useRef, useState } from "react";

function EstimationCards() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect(); // Disconnect after the first trigger to prevent re-triggering
            }
          });
        },
        { threshold: 0.1 } // Adjust the threshold as needed
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  

  return (
    <>
      <div ref={ref} className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto mt-8">
        <div className={`bg-white rounded-3xl shadow-lg p-6 h-[500px] clas-height-set mt-6 ${isVisible ? "animate-jump-up" : ""}`}>
          <h5 className="text-[18px] font-semibold text-[#414141] text-center font-san">
            SINGLE TRADE PRICING
          </h5>
          <p className="text-[16px] font-semibold text-[#414141] font-san mt-[3px]">
            Features
          </p>
          <p className="text-[16px] text-[#4B4B4B] text-center mt-[3px] font-normal font-san">
            We charge ($150 to $500) for a single trade project and the cost
            will vary on project Complexity.
          </p>
          
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san mt-[3px]">
              Turnaround Time 24 to 48 Hrs
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Any Trade or Any Kind of Project
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Free Quote Within 5 to 10 Minutes
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Free Consultation
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Imediate and Unlimited Revisions
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              24/7 Email Support
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Live Chat and Call Support
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              No Hidden Charges
            </li>
        
          <p className="text-[16px] font-normal text-[#414141] font-san mt-[5px]">
            Starting from
          </p>
          <p className="text-[18px] font-semibold text-[#414141] font-san mt-[5px]">
            150$ <span className="text-[16px] font-normal">Specific Trade</span>
          </p>
          <div className="cursor-pointer bg-customBlue-light p-3 mt-4 rounded-lg text-white text-[18px] font-semibold flex justify-center items-center w-[90%] mx-auto">
            <button>Get Started</button>
          </div>
        </div>

        <div className={`bg-customBlue-light rounded-3xl shadow-lg p-6 clas-height-set h-[550px] ${isVisible ? "animate-jump-up" : ""}`}>
          <h5 className="text-[18px] font-semibold text-white text-center font-san">
            MONTHLY PACKAGES
          </h5>
          <p className="text-[16px] font-normal text-white font-san mt-[3px]">
            Features
          </p>
          <p className="text-[16px] text-white text-center mt-[3px] font-normal font-san">
            We charge ($1500 to $2500) for a projects and the cost will vary on project Complexity.
          </p>
        
            <li className="text-[16px] text-white font-normal font-san mt-[3px]">
              Turnaround Time 24 to 48 Hrs
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              Any Trade or Any Kind of Project
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              Free Quote Within 5 to 10 Minutes
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              Free Consultation
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              Imediate and Unlimited Revisions
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              24/7 Email Support
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              Live Chat and Call Support
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              No Hidden Charges
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              10 to 15 Projects
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              Bid Filing and Consultation
            </li>
            <li className="text-[16px] text-white font-normal font-san">
              Material Takeoffs and Cost Management
            </li>
          
          <p className="text-[16px] font-normal text-white font-san mt-[5px]">
            Starting from
          </p>
          <p className="text-[18px] font-semibold text-white font-san mt-[5px]">
            1500$ <span className="text-[16px] font-normal">Per Month</span>
          </p>
          <div className="cursor-pointer bg-white p-3 mt-4 rounded-lg text-customBlue-light text-[18px] font-semibold flex justify-center items-center w-[90%] mx-auto">
            <button>Get Started</button>
          </div>
        </div>

        <div className={`bg-white rounded-3xl shadow-lg p-6 clas-height-set h-[500px] mt-6 ${isVisible ? "animate-jump-up" : ""}`}>
          <h5 className="text-[18px] font-semibold text-[#414141] text-center font-san">
            ENTERPRISE
          </h5>
          <p className="text-[16px] font-normal text-[#414141] font-san mt-[3px]">
            Features
          </p>
          <p className="text-[16px] text-[#4B4B4B] text-center mt-[3px] font-normal font-san">
            Terms and Conditions apply:
          </p>
        
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san mt-[19px]">
              Dedicated Resources
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Manage the bidding network profiles
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Material Takeoffs
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Cost Management
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Preconstruction & Change Order Management
            </li>
            <li className="text-[16px] text-[#4B4B4B] font-normal font-san">
              Subcontractor Marketing
            </li>
          
          <p className="text-[16px] font-normal text-[#414141] font-san mt-[10px]">
            Starting from
          </p>
          <p className="text-[18px] font-semibold text-[#414141] font-san mt-[5px]">
            CALL FOR PRICE
          </p>
          <div className="cursor-pointer bg-customBlue-light p-3 mt-[67px] rounded-lg text-white text-[18px] font-semibold flex justify-center items-center w-[90%] mx-auto">
            <button>Call Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EstimationCards;
