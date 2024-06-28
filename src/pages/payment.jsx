import { useEffect } from "react";
import Banner from "../components/banner";
import SliderPay from "../components/sliderPay";
import Steps from "../components/steps";

function Payment() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para pt-24">
        PAYMENT
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto">
        <div className="col-span-2">
          <h3 className="text-[18px] font-san font-semibold  text-customBlue-para mt-6">
            Refund Policy:
          </h3>
          <p className="text-[16px] font-san font-normal text-[#434343] mt-1">
            While we are dedicated to ensuring complete client satisfaction, we
            do not offer refunds. However, we are committed to facilitating
            exchanges to ensure you receive the best value for your investment.
          </p>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <SliderPay />
        </div>
      </div>
      <Banner />

      <div className=" container mx-auto">
        <h4 className="text-[18px] font-san font-semibold  text-customBlue-para mt-6">
          Payment Terms:
        </h4>
        <p className="text-[16px] font-san font-normal text-[#434343] mt-1">
          At{" "}
          <span className="text-customBlue-light font-medium">
            Bidnet Estimating
          </span>
          , we prioritize your financial security. You can comfortably pay for
          our services using your preferred method: Credit Card, Debit Card, or
          PayPal.
          <br />
          After receiving your plans and analyzing your project specifications,
          we will send you a quote with the delivery date. If you accept the
          quote, you can easily make the payment through your mobile phone,
          desktop, or by calling us at{" "}
          <span className="text-customBlue-light font-medium">
            +1 917 300 1079
          </span>
          .
        </p>
      </div>

      <Steps />
    </>
  );
}

export default Payment;
