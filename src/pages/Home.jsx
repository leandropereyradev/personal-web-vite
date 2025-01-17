import MainContent from "../components/maincontent/MainContent";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="xl:grid xl:grid-cols-layout-desktop xl:h-screen xl:w-full">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Home;
