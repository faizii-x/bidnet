function Generalimg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/genbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          GENERAL REQUIREMENTS
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        General requirements are essential for any construction project. They
        ensure the project meets regulations and fulfills the necessary needs.
        These requirements include detailed estimates for materials, labor, and
        equipment, helping you make informed decisions. Good communication and
        sticking to the budget are crucial for the project's success and your
        satisfaction.
        <br /> General construction gives a clear and detailed understanding of
        what the client expects and needs for the project. It explains exactly
        what the client wants. The General Conditions section of the contract
        clearly outlines the rights, responsibilities, and relationships between
        everyone involved.
        <br /> For more information, contact us at{" "}
        <a href="mailto:muhammad@mfbzone.com">
          <span className="text-customBlue-light font-medium hover:underline">
            muhammad@mfbzone.com
          </span>
        </a>{" "}
        or{" "}
        <a href="tel:+1 917 300 1079">
          <span className="text-customBlue-light font-medium hover:underline">
            +1 917 300 1079
          </span>
        </a>
      </p>
    </>
  );
}

export default Generalimg;
