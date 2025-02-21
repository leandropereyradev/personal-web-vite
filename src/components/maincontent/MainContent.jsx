import About from "./about/About";
import Projects from "./projects/Projects";
import Education from "./education/Education";
import Footer from "./Footer";

const MainContent = () => (
  <section className="h-full flex flex-col px-5 text-justify md:text-lg lg:overflow-y-auto xl:pl-36 xl:text-base fullHD:pl-72 fullHD:pr-10 fullHD:tracking-[0.2rem] fullHD:leading-relaxed">
    <About />
    <Projects />
    <Education />
    <Footer />
  </section>
);

export default MainContent;
