import About from "./About";
import Experience from "./Experience";
import Projects from "./projects/Projects";

const MainContent = () => {
  return (
    <section className="xl:ml-[15%] xl:overflow-y-auto h-full">
      <About />
      <Experience />
      <Projects />
    </section>
  );
};

export default MainContent;
