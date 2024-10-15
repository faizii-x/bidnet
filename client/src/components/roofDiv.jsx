import Imm from "../../public/png/imm.png";

function RoofDiv() {
  return (
    <>
      <h3 className="text-[24px] font-san font-semibold text-customBlue-para container mx-auto mt-6">
        Waterproofing & Damp Proofing Estimating – Material Takeoff
      </h3>

      <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para container mx-auto">
        At Bidnet Estimating, we support waterproofing contractors by providing
        detailed material takeoffs to help prepare bids for general contractors
        and procure necessary materials. Our estimates offer comprehensive
        information on the quantity and application of materials for
        foundations, footings, and below-grade slabs. Additionally, air vapor
        barrier and sealant contractors can rely on our services to accurately
        estimate material requirements for their projects.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-2 container mx-auto">
        <div className="col-span-2 self-center">
          <h4 className="text-[24px] font-san font-semibold text-customBlue-para">
            Fire Proofing & Fire Stopping Estimating – Material Takeoff
          </h4>
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para ">
            If you need Construction Cost Estimating services in NYC, Bidnet
            Estimating is here for you. Our expert team provides accurate and
            reliable estimates tailored to your project’s unique needs. With
            extensive experience and advanced tools, we analyze every aspect to
            ensure comprehensive cost coverage. We commit to timely delivery for
            smooth project planning and execution. Trust Bidnet Estimating for
            dependable and transparent cost estimating services to ensure your
            project’s success. Contact us for precise estimates that keep you on
            budget and schedule.
          </p>
        </div>
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto self-center ">
          <img src={Imm} alt="" className="" />
        </div>
      </div>
    </>
  );
}

export default RoofDiv;
