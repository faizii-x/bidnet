import Line from "../../public/png/line.png";
import Mess from "../../public/png/mess.png";
import Left1 from "../../public/png/left1.png";
import Right1 from "../../public/png/right1.png";
import Client1 from "../../public/png/client1.png";
import Client2 from "../../public/png/client2.png";
import Client3 from "../../public/png/client3.png";
import Slider from "react-slick";

function MiniSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center p-16"
        style={{ backgroundImage: `url(${"/png/back.png"})` }}
      >
        <div className="slider-container">
          <Slider {...settings}>
            <div className="p-3">
              <div className="flex justify-center items-center gap-2 ">
                <img src={Line} alt="" className="w-[50px] " />
                <img src={Mess} alt="" className="w-[25px] h-[22px]" />
                <img src={Line} alt="" className="w-[50px] " />
              </div>
              <p className="text-[#414141] text-[24px] font-san text-center font-bold mt-3">
                WHAT PEOPLE{" "}
                <span className="text-customBlue-light">SAY ABOUT US</span>
              </p>

              <div className="md:flex grid justify-center items-center gap-3 mt-6">
                <div className="flex justify-start -mt-10">
                  <img src={Left1} alt="" className="w-[14px] h-[20px]" />
                  <img src={Left1} alt="" className="w-[14px] h-[20px]" />
                </div>

                <p className="text-[18px]">
                  {" "}
                  <span className="text-customBlue-light font-semibold">
                    Bidnet Estimating
                  </span>{" "}
                  provided precise estimates and fast responses. Their service
                  was key to our project's success.
                  <br /> Highly recommended!
                </p>

                <div className="flex justify-start md:-mt-10 mt-0">
                  <img src={Right1} alt="" className="w-[14px] h-[20px]" />
                  <img src={Right1} alt="" className="w-[14px] h-[20px]" />
                </div>
              </div>
              <img
                src={Client1}
                alt=""
                className="w-[80px] h-[80px] mx-auto mt-5"
              />
              <p className="text-customBlue-light text-[18px] text-center mt-1 font-san font-semibold">
                John Elia
              </p>
            </div>
            {/* ............................................. */}
            <div className="p-3">
              <div className="flex justify-center items-center gap-2 ">
                <img src={Line} alt="" className="w-[50px] " />
                <img src={Mess} alt="" className="w-[25px] h-[22px]" />
                <img src={Line} alt="" className="w-[50px] " />
              </div>
              <p className="text-[#414141] text-[24px] font-san text-center font-bold mt-3">
                WHAT PEOPLE{" "}
                <span className="text-customBlue-light">SAY ABOUT US</span>
              </p>

              <div className="md:flex grid justify-center gap-3 mt-6">
                <div className="flex justify-start">
                  <img src={Left1} alt="" className="w-[14px] h-[20px]" />
                  <img src={Left1} alt="" className="w-[14px] h-[20px]" />
                </div>

                <p className="text-[18px]">
                  Working with{" "}
                  <span className="text-customBlue-light font-semibold">
                    Bidnet Estimating
                  </span>{" "}
                  saved us time and money. Their accurate estimates and prompt
                  communication were invaluable. We’ll be using them again!
                </p>

                <div className="flex justify-start ">
                  <img src={Right1} alt="" className="w-[14px] h-[20px]" />
                  <img src={Right1} alt="" className="w-[14px] h-[20px]" />
                </div>
              </div>
              <img
                src={Client2}
                alt=""
                className="w-[80px] h-[80px] mx-auto mt-5"
              />
              <p className="text-customBlue-light text-[18px] text-center mt-1 font-san font-semibold">
                Sasha Grey
              </p>
            </div>
            {/* ....................................... */}
            <div className="p-3">
              <div className="flex justify-center items-center gap-2 ">
                <img src={Line} alt="" className="w-[50px] " />
                <img src={Mess} alt="" className="w-[25px] h-[22px]" />
                <img src={Line} alt="" className="w-[50px] " />
              </div>
              <p className="text-[#414141] text-[24px] font-san text-center font-bold mt-3">
                WHAT PEOPLE{" "}
                <span className="text-customBlue-light">SAY ABOUT US</span>
              </p>

              <div className="md:flex grid justify-center gap-3 mt-6">
                <div className="flex justify-start">
                  <img src={Left1} alt="" className="w-[14px] h-[20px]" />
                  <img src={Left1} alt="" className="w-[14px] h-[20px]" />
                </div>

                <p className="text-[18px]">
                  {" "}
                  <span className="text-customBlue-light font-semibold">
                    Bidnet Estimating
                  </span>{" "}
                  exceeded our expectations with their professionalism and
                  accuracy. Their estimates helped us make informed decisions.
                  Great service!"
                </p>

                <div className="flex justify-start ">
                  <img src={Right1} alt="" className="w-[14px] h-[20px]" />
                  <img src={Right1} alt="" className="w-[14px] h-[20px]" />
                </div>
              </div>
              <img
                src={Client3}
                alt=""
                className="w-[80px] h-[80px] mx-auto mt-5"
              />
              <p className="text-customBlue-light text-[18px] text-center mt-1 font-san font-semibold">
                Eden Mark
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default MiniSlider;
