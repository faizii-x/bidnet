import { useState } from 'react';

function Banner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`max-w-full h-auto bg-cover bg-center p-8 mt-8 ${isHovered ? 'hovered' : ''}`}
      style={{ backgroundImage: `url(${"/png/bgbluee.png"})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid lg:grid-cols-2  grid-cols-1 mx-auto">
        <div className={`col-span-1 transition-transform duration-500 ${isHovered ? 'animate-text' : ''}`}>
          <p className="text-white text-[18px] font-medium mb-4 lg:ml-16 ml-0">
            At Bidnet Estimating, we have a team of skilled construction
            estimators, material takeoff specialists, draftsmen, and project
            managers ready to assist with your construction projects. Don’t
            wait any longer! We offer online estimating services tailored to
            your specific needs in our service area. Let us help you bring
            your project to life.
          </p>
        </div>

        <div className={`col-span-1 self-center transition-transform duration-500 ${isHovered ? 'animate-button' : ''}`}>
          <div className={`bg-white w-[190px] p-2 flex justify-center items-center mx-auto cursor-pointer animate-bounce ${isHovered ? 'animate-button' : ''}`}>
            <button className="text-[20px]">Get 30% OFF</button>
          </div>
        </div> 

      </div>
    </div>
  );
}

export default Banner;
