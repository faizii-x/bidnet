import Resi from "../../public/png/resi1.png";

function ThirdComp() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto mt-8">
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={Resi} alt="" className="mb-2"/>
        </div>
        <div className="col-span-2 self-center">
          <h4 className="text-[20px] font-san font-semibold">RESIDENTIAL</h4>
          <p className="text-[18px] font-san font-normal mt-1">
            For residential projects,{" "}
            <span className="text-customBlue-light font-bold">
              Bidnet Estimating
            </span>{" "}
            offers services like kitchen and bathroom gutting, roof demolition,
            garage and chimney removal, siding removal, and full house clearing.
          </p>
        </div>
      </div>
    </>
  );
}

export default ThirdComp;
