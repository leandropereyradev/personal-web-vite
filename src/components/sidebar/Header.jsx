const Header = () => (
  <header className="flex flex-col gap-4 md:gap-10 lg:gap-6 xl:gap-8 fullHD:gap-12">
    <a href="/">
      <h1 className="font-bold text-6xl leading-tight md:text-8xl lg:text-7xl fullHD:text-[5rem]">
        Leandro <br />
        <span className="block">Pereyra</span>
      </h1>
    </a>
    <h2 className="text-blue-400 text-2xl md:text-4xl lg:text-3xl fullHD:text-[2.1rem]">
      Desarrollador Web
    </h2>
  </header>
);

export default Header;
