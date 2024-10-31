import { Link } from "react-router-dom";
import Slider from "react-slick";

function BannerGeneral() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // beforeChange: function (currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function (currentSlide) {
    //   console.log("after change", currentSlide);
    // },
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center p-3 mt-8"
        style={{ backgroundImage: `url(${"/png/bggeneral.png"})` }}
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
          <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
            <p className="text-white text-[38px] text-center font-san font-bold">
              Big Sale Event
            </p>
            <Link to='/contact-us' className="mb-5 cursor-pointer bg-customBlue-light text-white w-[130px] p-2 mx-auto mt-3 font-semibold flex justify-center items-center">
              <span>Get Started</span>
            </Link>
          </div>
          <div className="col-span-2 mx-auto self-center">
            {/* <div className="slider-container"> */}
            <Slider {...settings}>
              <div className="">
                <p className="text-white text-[28px] font-san font-bold ">
                  Get Up to 40% Discount on Every Project!
                </p>
              </div>
              <div className="">
                <p className="text-white text-[28px] font-san font-bold ">
                  Grab Your Deal Now: Massive Discounts Available! Limited Time
                  Offer!
                </p>
              </div>
              <div className="">
                <p className="text-white text-[28px] font-san font-bold ">
                  Enjoy Exclusive Discounts on Construction Estimating Trades!
                </p>
              </div>
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerGeneral;
