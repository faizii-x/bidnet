function MechanicalImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/genbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          MECHANICAL ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        At {""}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        , we offer a full range of mechanical estimating services to help you
        win bids and boost profits. With years of experience and the latest
        technology, our MEP estimators provide highly accurate and timely
        estimates for projects of all sizes. We offer more than just cost
        analysis. Our services include comprehensive consultancy to help you
        stay ahead of the competition and grow your business.
        <br />
        Whether you're working on the design, fabrication, or installation of
        heating and cooling systems, refrigeration systems, piping, or plumbing,
        our estimates are tailored to your needs. We accurately quantify all
        mechanical components and use up-to-date, zip code-based pricing for
        materials, equipment, and labor.
        <br /> Our team supports you at every step, from the design phase to
        independent estimates for bid evaluations, change orders, and value
        engineering.
        <br />
        Contact Us for a Free Consultation <br />
        Ready to enhance your project with precise mechanical estimates? Contact{" "}
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
        <a href="mailto:bidnetestimators@gmail.com">
          <span className="text-customBlue-light font-medium hover:underline">
            bidnetestimators@gmail.com
          </span>
        </a>
      </p>
    </>
  );
}

export default MechanicalImg;
