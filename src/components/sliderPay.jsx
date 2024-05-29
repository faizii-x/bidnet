import { useState } from 'react';
import Pay1 from '../../public/png/pay1.png'; 
import Pay2 from '../../public/png/pay2.png'; 
import Pay3 from '../../public/png/pay3.png'; 
import Pay4 from '../../public/png/pay4.png'; 
import Pay5 from '../../public/png/pay5.png'; 

const SliderPay = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };

  return (
    <>
    <div className="marquee-container">
      <div className={`marquee-content ${isPaused ? 'paused' : ''}`}>
        <img src={Pay1} alt="Pay1" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        <img src={Pay2} alt="Pay2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        <img src={Pay3} alt="Pay3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        <img src={Pay4} alt="Pay4" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        <img src={Pay5} alt="Pay5" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
      </div>
    </div>
 
<div className='flex justify-center items-center bg-customBlue-light text-white rounded-md w-[150px] mx-auto mt-4 p-3 cursor-pointer'>
    <button>Pay</button>
    </div>
    </>
  );
};

export default SliderPay;
