import Services from "./Myskills/page";
import Navbar from "./components/Navbar";
import Header from "./home/Header";
import AboutSection from "./about/page";
import RecentWorks from "./Myworks/page";
import EducationExperience from "./Education/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutSection />
      <RecentWorks />
      <Services />
      <EducationExperience />
    </>
  );
}
