import dot from "../../public/png/dot.png";
import Roffi from "../../public/png/roffi.png";

function RoofingComp() {
  return (
    <>
      <h2 className="text-[24px] font-san font-semibold text-center mt-6 text-customBlue-para">
        Our Range Of{" "}
        <span className="text-customBlue-light">Rebar Estimating Services</span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto mt-6">
        <div className=" col-span-2 self-center">
          <div className="flex justify-start gap-3 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-normal text-customBlue-para ">
              {" "}
              <span className="font-bold">
                Green Roofs and Green Walls:
              </span>{" "}
              Roofing and wall systems that incorporate vegetation, providing
              insulation and environmental benefits.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Flashing and Sheet Metal:</span> Metal
              components used to prevent water penetration at roof joints and
              edges.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Membrane Roofing:</span> Roofing
              systems made of synthetic materials, providing a waterproof
              barrier for flat or low-slope roofs.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">
                Damp Roofing and Waterproofing:
              </span>{" "}
              Techniques and materials used to prevent moisture penetration and
              protect building interiors.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Steep Roofing:</span> Roofing systems
              designed for roofs with a high slope, using materials like
              shingles or tiles.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Shingles:</span> Overlapping roofing
              elements, typically made of asphalt, metal, or slate, providing
              weather protection.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">
                Roof Windows and Skylights:
              </span>{" "}
              Windows installed in the roof, allowing natural light into the
              building.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Common Roofing Materials:</span> A
              variety of materials used for roofing, including asphalt shingles,
              metal panels, tiles, and more.
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <img src={Roffi} alt="" />
        </div>
      </div>
    </>
  );
}

export default RoofingComp;
