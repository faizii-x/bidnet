import FlipCard from "./flipCard";

function MainBanner() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center p-4 mt-8"
        style={{ backgroundImage: `url(${"/png/bgtruck.png"})` }}
      >
        <h3 className="text-[24px] font-san font-semibold text-center text-white mt-3">
          WHY WORK WITH US
        </h3>
        <FlipCard />
      </div>
    </>
  );
}

export default MainBanner;
