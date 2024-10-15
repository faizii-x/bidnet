
import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";

function Pricing() {
  return (
    <>
      <h1 className="text-[24px] font-san font-semibold text-center text-customBlue-para pt-24">
        PRICING PLANS
      </h1>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        At Bidnet Estimating, we understand the importance of flexibility when
        it comes to pricing. That's why we don't believe in fixed rates for our
        services. Instead, we offer customized pricing plans tailored to each
        project's unique requirements.
      </p>
      <h2 className="text-[18px] mt-1 font-san font-semibold text-customBlue-para container mx-auto">
        Customized Pricing:{" "}
      </h2>
      <p className="text-[18px] font-san font-normal text-customBlue-para container mx-auto">
        We charge on a per-project basis, ensuring that you only pay for the
        services you need. This allows us to provide fair and transparent
        pricing that fits within your budget.
      </p>
      <h3 className="text-[18px] mt-1 font-san font-semibold text-customBlue-para container mx-auto">
        Affordable Rates:{" "}
      </h3>
      <p className="text-[18px] font-san font-normal text-customBlue-para container mx-auto">
        Our pricing is designed to be accessible to all clients, regardless of
        project size. We keep our prices low to empower you to bid on more
        projects without breaking the bank.
      </p>
      <h4 className="text-[18px] mt-1 font-san font-semibold text-customBlue-para container mx-auto">
        Range of Fees:
      </h4>
      <p className="text-[18px] font-san font-normal text-customBlue-para container mx-auto">
        The estimated fee for a project can vary based on its scope and size.
        Our fees typically range from $75 to $550 or more, depending on the
        complexity of the project. We can even handle projects with fees as low
        as $100 or less.
      </p>
      {/* ............................................. */}


      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h5 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        SIMPLE AND <span className="text-customBlue-light font-medium">AFFORDABLE PRICING</span> PLANS
      </h5>

      {/* ..................................... */}






    </>
  );
}

export default Pricing;
