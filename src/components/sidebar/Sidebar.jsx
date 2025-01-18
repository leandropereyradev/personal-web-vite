import Header from "./Header";
import Navbar from "./Navbar";
import Social from "./Social";

const Sidebar = () => {
  return (
    <section className="h-screen flex flex-col justify-end w-11/12 mx-auto gap-10 pb-6 md:pb-10 md:gap-14 lg:gap-20 xl:gap-16 fullHD:gap-24">
      <Header />
      <Navbar />
      <Social />
    </section>
  );
};

export default Sidebar;
