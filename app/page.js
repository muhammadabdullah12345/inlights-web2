import BgVideoPart from "@/components/BgVideo";
import Stats from "@/components/Stats";
import Product from "@/components/Product";
import Services from "@/components/Services";
import Talent from "@/components/Talent";
import SuccessStories from "@/components/SuccessStories";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Talk from "@/components/Talk";
import Talk2 from "@/components/Talk2";

function page() {
  return (
    <div>
      <BgVideoPart />
      <Stats />
      <Product />
      <Services />
      <Talent />
      <SuccessStories />
      <Feedback />
      <Talk />
      <Footer />
    </div>
  );
}

export default page;
