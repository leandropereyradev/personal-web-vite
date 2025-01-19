import { useState, useEffect } from "react";

const Navbar = () => {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isActiveLink = (href) => {
    const defaultStyle =
      " tracking-[0.2em] uppercase transition-all duration-300";
    const isActive = currentHash === href;

    return isActive
      ? "text-blue-400 font-bold ml-40 fullHD:ml-56" + defaultStyle
      : "hover:text-blue-300 hover:font-bold" + defaultStyle;
  };

  const menu = [
    {
      link: "#about",
      name: "Sobre Mi",
    },
    {
      link: "#projects",
      name: "Proyectos",
    },
    {
      link: "#skills",
      name: "Skills",
    },
  ];

  return (
    <div className="hidden lg:block">
      <nav>
        {menu?.map(({ link, name }, i) => (
          <>
            <div key={i} className="inline-block mb-4">
              <a href={link} className={isActiveLink(link)}>
                {name}
              </a>
              <div
                style={{
                  width: currentHash === link ? "calc(100% - 5px)" : "0",
                  opacity: currentHash === link ? 1 : 0,
                }}
                className={`h-[2px] mt-[2px] bg-blue-400 transition-all duration-700`}
              />
            </div>
            <br />
          </>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
