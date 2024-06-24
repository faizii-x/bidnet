function SiteImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/genbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          SITEWORK ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        At{" "}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>
        , our Sitework Estimating Services are Specific to meet the All needs of
        excavation contractors, site contractors, landscaping contractors, land
        developers, and general contractors. We understand the challenges faced
        in site development and offer reliable and cost-effective solutions to
        streamline your projects.
        <br /> With Bidnet Estimating, you get more than just estimates – you
        get a partner in your success. Our team utilizes the latest software to
        provide accurate analysis of drawings and plans, delivering precise
        takeoffs for materials and labor (including manhours) within 24-48
        hours. This allows you to lead bids confidently and manage busy sites
        efficiently.
        <br /> Let Bidnet Estimating handle your sitework estimating needs, so
        you can focus on what you do best. Contact us today at {""}
        <a href="mailto:bidnetestimators@gmail.com">
          <span className="text-customBlue-light font-medium hover:underline">
            bidnetestimators@gmail.com
          </span>
        </a>{" "}
        or{" "}
        <a href="tel:+1 917 300 1079">
          <span className="text-customBlue-light font-medium hover:underline">
            +1 917 300 1079
          </span>
        </a>{" "}
        to learn more.
      </p>
    </>
  );
}

export default SiteImg;
