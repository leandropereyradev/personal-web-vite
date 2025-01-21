import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY <= 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-8 transform -translate-x-1/2 animate-bounce lg:hidden">
      <BsChevronDown className="text-dorado text-3xl md:text-5xl" />
    </div>
  );
};

export default ScrollIndicator;
