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
      " tracking-[0.2em] uppercase transition-all duration-300 xl:text-lg fullHD:text-2xl";
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
    <div className="hidden xl:block">
      <nav className="flex flex-col gap-4">
        {menu?.map(({ link, name }, i) => (
          <a key={i} href={link} className={isActiveLink(link)}>
            {name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
