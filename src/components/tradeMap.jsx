import { CARDS_TRADE1, CARDS_TRADES } from "../../data";
import Line from "../../public/png/line.png";
import Cap from "../../public/png/tradee.png";
import Banner from "./banner";

function TradeMap() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        OUR <span className="text-customBlue-light font-medium">TRADES</span>
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 container mx-auto mt-8">
        {CARDS_TRADES.map((image) => (
          <div
            key={image.id}
            className="max-w-full bg-cover bg-center rounded-2xl p-2 h-[160px]"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <p className="text-[#33CCCC] text-center text-[18px] mt-3 font-semibold">
              {image.text}
            </p>
            <p className="text-white text-center text-[15px] mt-2 mb-2 p-1 font-normal">
              {image.para}
            </p>
          </div>
        ))}
      </div>
      <Banner/>
      {/* ....................................... */}

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 container mx-auto mt-8">
        {CARDS_TRADE1.map((image) => (
          <div
            key={image.id}
            className="max-w-full bg-cover bg-center rounded-2xl p-2 h-[160px]"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <p className="text-[#33CCCC] text-center text-[18px] mt-3 font-semibold">
              {image.text}
            </p>
            <p className="text-white text-center text-[15px] mt-2 mb-2 p-1 font-normal">
              {image.para}
            </p>
          </div>
        ))}
      </div>

    </>
  );
}

export default TradeMap;
