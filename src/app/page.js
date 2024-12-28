import Services from "./Myskills/page";
import Navbar from "./components/Navbar";
import Header from "./home/Header";
import AboutSection from "./about/page";
import RecentWorks from "./Myworks/page";
import EducationExperience from "./Education/page";
import MyTools from "./Mytools/page";
import ContactSection from "./contactme/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutSection />
      <RecentWorks />
      <Services />
      <EducationExperience />
      <MyTools />
      <ContactSection />
      <Footer />
    </>
  );
}
