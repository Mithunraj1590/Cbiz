import WidgetBlocks from "@/utilities/WidgetBlock";
import nextFetch from "@/utilities/nextFetch";
import FaqList from "@/widgets/FaqList";
import HomeBanner from "@/widgets/HomeBanner";
import HomeContact from "@/widgets/HomeContact";
import HomeJourney from "@/widgets/HomeJourney";
import HomeRoomType from "@/widgets/HomeOtherServices";
import HomeService from "@/widgets/HomeService";
import WhoWeAre from "@/widgets/WhoWeAre";
import WhyTrust from "@/widgets/WhyTrust";
export async function generateMetadata({ params }) {
  const data = await nextFetch(`api/general/homepage`);
  return {
    title: data?.data?.seo?.metaTitle,
    description: data?.data?.seo?.metaDescription,
    openGraph: {
      images: data?.data?.seo?.metaImage?.url?.url,
    },
  };
}

const HomePage = async() => {
  const data = await nextFetch("api/general/homepage"); 
  
  return (
    <>
     <main className="isHome">
       <HomeBanner/>
       <HomeService/>
       <HomeRoomType/>
       {/* <WhyTrust /> */}
       <WhoWeAre />
       <HomeJourney />
       <HomeContact />
       <FaqList />
    </main>
    </>
  );
};

export default HomePage;
