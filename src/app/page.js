import Services from "./Myskills/page";
import Navbar from "./components/Navbar";
import Header from "./home/Header";
import AboutSection from "./about/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutSection />
      <Services />
    </>
  );
}
