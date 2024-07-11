import Slider from "react-slick";
import Picy from "../../public/png/picy.png";
import Picy1 from "../../public/png/picy1.png";
import Picy4 from "../../public/png/picy4.png";
import Picy5 from "../../public/png/picy5.png";

function SliderStyle() {
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
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
  // ......................
  var settings1 = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 400,
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
    <div
      className="max-w-full h-auto bg-cover bg-center p-3 mt-8"
      style={{ backgroundImage: `url(${"/png/bggeneral.png"})` }}
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 container mx-auto">
        <div className="col-span-2 self-center">
          <Slider {...settings1}>
            <div className="">
              <p className="text-white text-[18px] font-san font-bold">
                Advanced Technology
              </p>
              <p className="text-white mt-1 text-[16px] font-san font-light">
                We leverage cutting-edge technology and software to deliver
                precise and efficient estimates. Our use of advanced tools
                ensures high accuracy and efficiency, setting us apart in the
                industry.
              </p>
            </div>
            <div>
              <p className="text-white text-[18px] font-san font-bold">
                Customer-Focused Service
              </p>
              <p className="text-white mt-1 text-[16px] font-san font-light">
                Your satisfaction is our priority. We work closely with you,
                maintaining open lines of communication and providing updates
                throughout the estimating process. Our commitment to exceptional
                customer service ensures a smooth and stress-free experience.
              </p>
            </div>
            <div>
              <p className="text-white text-[18px] font-san font-bold">
                Cost Efficiency
              </p>
              <p className="text-white mt-1 text-[16px] font-san font-light">
                Our goal is to help you maximize your budget without
                compromising on quality. Through detailed and precise cost
                estimates, we identify potential savings and provide
                cost-effective solutions that keep your project within budget.
              </p>
            </div>
            <div>
              <p className="text-white text-[18px] font-san font-bold">
                Flexible Trades
              </p>
              <p className="text-white mt-1 text-[16px] font-san font-light">
                At UK Estimators, we recognize that every project is unique. We
                provide customized estimating services that cater to your
                specific requirements, ensuring that each estimate reflects your
                project’s unique scope and challenges.
              </p>
            </div>
          </Slider>
        </div>

        <div className="col-span-1">
      
          <Slider {...settings}>
            <img src={Picy} alt="" />
            <img src={Picy1} alt="" />
            <img src={Picy4} alt="" />
            <img src={Picy5} alt="" />
          </Slider>
        </div>
       
      </div>

    </div>
  );
}

export default SliderStyle;
