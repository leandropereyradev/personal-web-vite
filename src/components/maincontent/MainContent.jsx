import About from "./About";
import Experience from "./Experience";
import Projects from "./projects/Projects";

const MainContent = () => {
  return (
    <section className="h-full flex flex-col w-11/12 mx-auto gap-16 pt-10 xl:pt-14 fullHD:pt-20 xl:ml-[10%] xl:pr-10 xl:overflow-y-auto ">
      <About />
      <Experience />
      <Projects />
    </section>
  );
};

export default MainContent;
