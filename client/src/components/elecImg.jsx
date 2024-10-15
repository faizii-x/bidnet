function ElecImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/genbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          ELECTRICAL ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        At {""}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        , we specialize in complete electrical estimating services, covering
        everything from low-voltage solutions to control system takeoffs. Our
        team of experienced professionals works closely with clients to provide
        precise estimates tailored to each project's unique needs. Using
        advanced electrical takeoff software, we ensure accuracy that enhances
        your chances of securing successful bids.
        <br />
        Contact Us for a Free Consultation <br />
        Ready to enhance your project with precise Electrical estimates? Contact
        Bidnet Estimating today at today at{" "}
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

export default ElecImg;
