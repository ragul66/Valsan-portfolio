import Services from "./Myskills/page";
import Header from "./home/Header";
import AboutSection from "./about/page";
import RecentWorks from "./Myworks/page";
import EducationExperience from "./Education/page";
import MyTools from "./Mytools/page";
import ContactSection from "./contactme/page";
import Footer from "./components/Footer";
import MarqueeBanner from "./components/MarqueeBanner";

export default function Home() {
  return (
    <>
      <Header />
      <AboutSection />
      <MarqueeBanner />
      <EducationExperience />
      <RecentWorks />
      {/* <Services /> */}
      <MyTools />
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
}
