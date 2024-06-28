function MepImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/genbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          MEP ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        Contractors rely on {""}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        for dependable and cost-effective MEP estimating services. With over a
        decade of experience, we specialize in delivering accurate construction
        cost estimates and material takeoffs swiftly, ensuring you meet bid
        deadlines effectively. Our comprehensive MEP estimating solutions have
        consistently helped general contractors secure successful bids.
      </p>
    </>
  );
}

export default MepImg;
