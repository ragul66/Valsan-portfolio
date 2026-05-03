import Header from "./home/Header";
import AboutSection from "./about/page";
import MarqueeBanner from "./components/MarqueeBanner";
import EducationExperience from "./Education/page";
import RecentWorks from "./Myworks/page";
import MyTools from "./Mytools/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <AboutSection />
      <MarqueeBanner />
      <EducationExperience />
      <RecentWorks />
      <MyTools />
      <Footer />
    </>
  );
}
