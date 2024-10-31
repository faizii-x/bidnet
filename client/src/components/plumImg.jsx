function PlumImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/genbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          PLUMBING ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        provides accurate and efficient plumbing estimates with over 10 years of
        experience. Our skilled team uses advanced software to deliver precise
        bids, considering local labor rates and material costs.
        <br />
        We offer services for residential, commercial, and industrial projects
        across the USA. Our reputation is built on understanding client needs
        and delivering quick, accurate estimates to help you win bids
        <br /> Our experts review and adjust plans meticulously, ensuring they
        work in real-world conditions. From large commercial projects to small
        residential ones, we offer top-notch plumbing estimation services for
        all types of ventures.
        <br />
        Contact Us for a Free Consultation <br />
        Ready to enhance your project with precise Plumbing estimates? Contact{" "}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        today at{" "}
        <a href="tel:+1 917 300 1079">
          <span className="text-customBlue-light font-medium hover:underline">
            +1 917 300 1079
          </span>
        </a>{" "}
        or email us at{" "}
        <a href="mailto:muhammad@mfbzone.com">
          <span className="text-customBlue-light font-medium hover:underline">
            muhammad@mfbzone.com
          </span>
        </a>
      </p>
    </>
  );
}

export default PlumImg;
