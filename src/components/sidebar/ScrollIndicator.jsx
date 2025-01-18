import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);

      if (window.scrollY > 50) setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return !isVisible ? null : (
    <div className="fixed bottom-4 right-8 transform -translate-x-1/2 animate-bounce lg:hidden">
      <BsChevronDown className="text-blue-400 text-3xl md:text-5xl" />
    </div>
  );
};

export default ScrollIndicator;
