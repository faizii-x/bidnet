
import Oops from "../../public/png/oops.png"

function PageNotFound() {
  return (
    <>
    <img src={Oops} alt="" className='pt-16 w-[220px] h-auto mx-auto'/>
    <div className=" text-black font-bold font-san text-[30px] text-center -mt-16">404-Page Not Found</div>
    
    </>
  )
}

export default PageNotFound