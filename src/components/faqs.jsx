
import Line from "../../public/png/line.png";
import Faq from "../../public/png/faq.png";
import Home from "../../public/png/home.png";
import Sliders from "../components/sliders"

function Faqs() {
  return (
    <>
    <div className="flex justify-center items-center gap-2 mt-8">
          <img src={Line} alt="" className="w-[50px] " />
          <img src={Faq} alt="" className="w-[25px] h-[22px]" />
          <img src={Line} alt="" className="w-[50px] " />
        </div>
        <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        FAQS
      </h2>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto container mt-8">
        <div className="col-span-2 mb-4">
        <Sliders/>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
            <img src={Home} alt="" className="cursor-pointer"/>
        </div>
    </div>
    
    
    </>
  )
}

export default Faqs