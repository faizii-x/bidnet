
import Frame from "../../public/png/frame.png";
import Call1 from "../../public/png/call1.png";

function Project() {
  return (
    <>
      

      <div
        className=" max-w-full h-auto bg-cover bg-center mt-6 pl-2"
        style={{ backgroundImage: `url(${"/png/bgdark.png"})` }}
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-auto">
          <div className="col-span-2">
            <img src={Frame} alt="" />
          </div>
          <div className=" lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center p-2">
            <p className="text-white text-[26px] font-san font-bold">
              Get Accurate Construction Estimates Every Time!
            </p>
        <a href="tel:+1 917 300 1079">
            <div className="bg-white rounded-md w-[180px] flex justify-center items-center p-2 mt-4 mb-2">
              <button className="font-san text-[#28B5B5]">Contact Today</button>
              <img src={Call1} alt="" />
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
