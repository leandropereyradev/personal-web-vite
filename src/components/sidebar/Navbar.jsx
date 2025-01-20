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

    if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });

    setCurrentHash(link);

    window.history.pushState(null, "", link);
  };

  const isActiveLink = (href) => {
    const defaultStyle =
      " tracking-[0.2em] uppercase transition-all duration-300";
    const isActive = currentHash === href;

    return isActive
      ? "text-blue-400 font-bold ml-40 fullHD:ml-56" + defaultStyle
      : "hover:text-blue-300 hover:font-bold" + defaultStyle;
  };

  return (
    <div className="hidden lg:block">
      <nav className="inline-block">
        {menu &&
          menu.map(({ link, name }, i) => (
            <div key={i} className="mb-4">
              <a
                href={link}
                className={isActiveLink(link)}
                onClick={(e) => handleClick(e, link)}
              >
                {name}
              </a>
              <div
                style={{
                  width: currentHash === link ? "calc(100% - 3px)" : "0",
                  opacity: currentHash === link ? 1 : 0,
                }}
                className={`h-[2px] mt-[2px] bg-blue-400 transition-all duration-700`}
              />
            </div>
          ))}
      </nav>
    </div>
  );
};

export default Navbar;
