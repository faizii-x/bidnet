import  { useState } from "react";
import { TECollapse } from "tw-elements-react";

function Accordion() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <div className="lg:w-[85%] w-[95%] mx-auto ">
        <div id="accordionExample">
          <div className="rounded-t-md border border-neutral-200 bg-white">
            <h2 className="mb-0 font-bold" id="headingOne">
              <button
                className={`${
                  activeElement === "element1" && `text-primary hover:bg]`
                } group relative flex w-full items-center border-0  hover:bg-customBlue-light px-5 py-4 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick("element1")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What services does Bidnet Estimating offer?
                <span
                  className={`${
                    activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-white  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElement === "element1"}
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              <div className="p-8 py-4 text-black">
                We provide a variety of services such as cost estimation, CPM
                scheduling, construction takeoff services, and project planning
                to help clients optimize their construction processes and make
                well-informed decisions.
              </div>
            </TECollapse>
          </div>
          {/* ......................................... */}
        </div>
        <div className="border border-t-0 border-neutral-200 bg-white">
          <h2 className="mb-0 font-bold" id="headingTwo">
            <button
              className={`${
                activeElement === "element2"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none `
              } group relative flex w-full items-center  border-0  hover:bg-customBlue-light px-5 py-4 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How can Bidnet Estimating help my construction project?
              <span
                className={`${
                  activeElement === "element2"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-white dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element2"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="p-8 py-4 text-black">
              Our expert team delivers precise cost estimates, detailed project
              schedules, comprehensive construction takeoffs, and tailored
              planning solutions to ensure your project's efficiency and
              success.
            </div>
          </TECollapse>
        </div>
        {/* ..................................... */}
        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white">
          <h2 className="accordion-header mb-0 font-bold" id="headingThree">
            <button
              className={`${
                activeElement === "element3"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none `
              } group relative flex w-full items-center  border-0  hover:bg-customBlue-light px-5 py-4 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Why should I choose Bidnet Estimating for my construction project?
              <span
                className={`${
                  activeElement === "element3"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element3"}
            className="!mt-0 !shadow-none"
          >
            <div className="p-8 py-4 text-black">
              With extensive industry experience, Bidnet Estimating is dedicated
              to providing dependable and precise services. We focus on client
              satisfaction and aim to surpass expectations in every project we
              handle.
            </div>
          </TECollapse>
        </div>
        {/* ..................................... */}
        <div className="rounded-b-lg border border-t-0 border-neutral-200  bg-white">
          <h2 className="accordion-header mb-0 font-bold" id="headingThree">
            <button
              className={`${
                activeElement === "element4"
                  ? `text-primary `
                  : `transition-none `
              } group relative flex w-full items-center  border-0  hover:bg-customBlue-light px-5 py-4 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How do I get started with Bidnet Estimating?
              <span
                className={`${
                  activeElement === "element4"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element4"}
            className="!mt-0 !shadow-none"
          >
            <div className="p-8 py-4 text-black">
              Starting with Bidnet Estimating is straightforward! Just reach out
              to us to discuss your project needs, and our team will provide
              customized solutions that align with your requirements and budget.
            </div>
          </TECollapse>
        </div>
        {/* ..................................... */}
        <div className="rounded-b-lg border border-t-0 border-neutral-200  bg-white">
          <h2 className="accordion-header mb-0 font-bold" id="headingThree">
            <button
              className={`${
                activeElement === "element5"
                  ? `text-primary `
                  : `transition-none `
              } group relative flex w-full items-center  border-0 bg-white hover:bg-customBlue-light px-5 py-4 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Can I get a custom quote for my project?{" "}
              <span
                className={`${
                  activeElement === "element5"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element5"}
            className="!mt-0 !shadow-none"
          >
            <div className="p-8 py-4 text-black">
              Absolutely! We recognize that every project is unique, so we
              provide custom quotes tailored to your specific needs. Reach out
              to us today to receive a personalized quote for your construction
              project.
            </div>
          </TECollapse>
        </div>
      </div>
    </>
  );
}

export default Accordion;
