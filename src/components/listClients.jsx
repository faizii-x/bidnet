
import Home from "../../public/png/home.png";

function ListClients() {
  return (
    <>

     

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 container w-[60%] mt-8 mx-auto">
        <div>
          <img src={Home} alt="" className="lg:h-[300px] h-auto"/>
        </div>
        <div>
        <h6 className="text-[24px] font-san font-semibold text-customBlue-para">
        The Range of Landscaping Estimating Service
      </h6>
          <li className="text-[16px] mt-1 font-san font-semibold">
          Landscaping Estimating
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">
          Hardscape Estimating
          </li>

          <li className="text-[16px] mt-1 font-san font-semibold">
          Softscape Estimating
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">Irrigation Estimating</li>
          <li className="text-[16px] mt-1 font-san font-semibold">
          Sprinkler System Price Estimate
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">
          Drip Irrigation Cost Estimate
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">Sprinkler System Estimates</li>

          <li className="text-[16px] mt-1 font-san font-semibold">
          Sprinkler System Cost Estimate
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">Sprinkler Estimate</li>
        </div>
      </div>
    
    </>
  )
}

export default ListClients