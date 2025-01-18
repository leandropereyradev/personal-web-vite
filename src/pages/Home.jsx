import MainContent from "../components/maincontent/MainContent";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-layout-desktop lg:h-screen lg:w-full">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Home;
