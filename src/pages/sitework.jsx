import SiteImg from "../components/siteImg";
import SiteText from "../components/siteText";
// import SliderStyle from "../components/sliderStyle";
import Banner from "../components/banner";
import SiteTextone from "../components/siteTextone";
import BgCompSite from "../components/bgCompSite";
import BannerGeneral from "../components/bannerGeneral";
import ListClients from "../components/listClients";
import Software from "../components/software";
import Steps from "../components/steps";

function Sitework() {
  return (
    <>
      <SiteImg />
      {/* <SliderStyle /> */}
      <SiteText />
      <Banner />
      <SiteTextone />
      <BannerGeneral />
      <BgCompSite />
      <ListClients />
      <Software />
      <Steps />
    </>
  );
}

export default Sitework;
