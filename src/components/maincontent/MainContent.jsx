import About from "./About";
import Experience from "./Experience";
import Projects from "./projects/Projects";

const MainContent = () => {
  return (
    <section className="h-full flex flex-col gap-16 px-5 text-justify md:text-lg lg:overflow-y-auto xl:pl-36 xl:text-base fullHD:pl-72 fullHD:pr-10 fullHD:tracking-[0.2rem] fullHD:leading-relaxed">
      <About />
      <Projects />
      <Experience />
    </section>
  );
};

export default MainContent;
