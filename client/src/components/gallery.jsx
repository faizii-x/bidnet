import Line from "../../public/png/line.png";
import Pic from "../../public/png/pic.png";
import One from "../../public/png/one.png";
import Two from "../../public/png/two.png";
import Three from "../../public/png/three.png";
import Four from "../../public/png/four.png";
import Five from "../../public/png/five.png";
import Six from "../../public/png/six.png";
import Seven from "../../public/png/seven.png";

function Gallery() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Pic} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h4 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        PROJECTS <span className="text-customBlue-light">GALLERY</span>
      </h4>

      {/* ............................... */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1 container mx-auto mt-6">
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={One} alt="" />
        </div>
        <div className="col-span-2">
          <img src={Two} alt="" />
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={Three} alt="" />
        </div>
      </div>


      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1 container mx-auto">
        <div className="col-span-1">
          <img src={Four} alt="" />
        </div>
        <div className="col-span-1">
          <img src={Five} alt="" />
        </div>
        <div className="col-span-1">
          <img src={Six} alt="" />
        </div>
        <div className="col-span-1">
          <img src={Seven} alt="" />
        </div>
      </div>

    </>
  );
}

export default Gallery;
