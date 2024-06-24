
// import Slider from "react-slick";
// import Picy from "../../public/png/picy.png";
// import Picy1 from "../../public/png/picy1.png";

// function SliderStyle() {
//   const settings = {
//     dots: false,
//     arrows: true,
//     autoplay: true,
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div
//       className="max-w-full h-auto bg-cover bg-center p-3 mt-8"
//       style={{ backgroundImage: `url(${"/png/bggeneral.png"})` }}
//     >
//       <div className="container mx-auto">
//         <Slider {...settings}>
//           <div className="grid grid-cols-2 gap-3 p-3">
//             <div className="col-span-1">
//               <p className="text-white font-sans font-semibold text-[18px] mt-6">
//                 Advanced Technology
//               </p>
//               <p className="text-white font-sans font-light text-[16px] mt-2">
//                 We leverage cutting-edge technology and software to deliver
//                 precise and efficient estimates. Our use of advanced tools
//                 ensures high accuracy and efficiency, setting us apart in the
//                 industry.
//               </p>
//             </div>
//             <div className="col-span-1 flex items-center justify-center mx-auto">
//               <img src={Picy} alt="Technology Image 1" />
//             </div>
//           </div>
//           <div className="grid grid-cols-3 gap-3 p-3">
//             <div className="col-span-2">
//               <p className="text-white font-sans font-semibold text-[18px] mt-6">
//                 Advanced Technology
//               </p>
//               <p className="text-white font-sans font-light text-[16px] mt-2">
//                 We leverage cutting-edge technology and software to deliver
//                 precise and efficient estimates. Our use of advanced tools
//                 ensures high accuracy and efficiency, setting us apart in the
//                 industry.
//               </p>
//             </div>
//             <div className="col-span-1">
//               <img src={Picy1} alt="" />
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default SliderStyle;



import { useEffect } from 'react';

function SliderStyle() {
  useEffect(() => {
    let currentIndex = 1;
    const slideCount = 3;

    const autoSlide = () => {
      const nextIndex = (currentIndex % slideCount) + 1;
      document.getElementById(`s${nextIndex}`).checked = true;
      currentIndex = nextIndex;
    };

    const interval = setInterval(autoSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <section id="slider">
        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" defaultChecked />
        <label htmlFor="s1" id="slide1"></label>
        <label htmlFor="s2" id="slide2"></label>
        <label htmlFor="s3" id="slide3"></label>
        <div className="radio-buttons">
          <label htmlFor="s1" className="radio-label"></label>
          <label htmlFor="s2" className="radio-label"></label>
          <label htmlFor="s3" className="radio-label"></label>
        </div>
      </section>
    </>
  );
}

export default SliderStyle;
