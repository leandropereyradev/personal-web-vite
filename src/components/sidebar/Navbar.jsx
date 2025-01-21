import { useState, useEffect } from "react";
import menu from "../../data/menu";

const Navbar = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleClick = (e, link) => {
    e.preventDefault();

    const targetElement = document.querySelector(link);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setCurrentHash(link);
      window.history.pushState(null, "", link);
    }
  };

  const isActiveLink = (href) =>
    `tracking-[0.2em] uppercase transition-all duration-300 ${
      currentHash === href
        ? "text-dorado font-bold ml-40 fullHD:ml-56"
        : "hover:text-dorado hover:font-bold"
    }`;

  return (
    <div className="hidden lg:block">
      <nav className="inline-block">
        {menu.map(({ link, name }, i) => {
          const isActive = currentHash === link;
          return (
            <div key={i} className="mb-4">
              <a
                href={link}
                className={isActiveLink(link)}
                onClick={(e) => handleClick(e, link)}
              >
                {name}
              </a>
              <div
                className={`h-[2px] mt-[2px] bg-dorado transition-all duration-700`}
                style={{
                  width: isActive ? "calc(100% - 3px)" : "0",
                  opacity: isActive ? 1 : 0,
                }}
              />
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
