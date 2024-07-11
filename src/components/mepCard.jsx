import Onemep from "../../public/png/onemep.png"
import Twomep from "../../public/png/twomep.png"
import Threemep from "../../public/png/threemep.png"
import { Link } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MepCard() {

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <>
    
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 container mx-auto mt-8" data-aos="fade-up">
      <Link to="/mechanical">
      <img src={Onemep} alt="" className="mx-auto"/>
      </Link>
      <Link to="/electrical">
      <img src={Twomep} alt="" className="mx-auto"/>
      </Link>
      <Link to="/plumbing">
      <img src={Threemep} alt="" className="mx-auto"/>
      </Link>
    </div>
    
    </>
  )
}

export default MepCard