import Banner from "../BannerComponent/Banner";
import FeaturePost from "../FeaturePostComponent/FeaturePost";
import SocialConnectPart from "../SocialConnectPartComponent/SocialConnectPart";
import Carousel from "../CarouselComponent/Carousel";

function Home(){
    return(
        <>
           <Carousel/>
           <Banner/>
           <FeaturePost/>
           <SocialConnectPart/>
        </>
    )
}

export default Home;