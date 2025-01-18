const Header = () => {
  return (
    <header className="flex flex-col gap-4 pb-6 md:pb-10 md:gap-10 lg:gap-12 xl:gap-8 fullHD:gap-12">
      <h1 className="font-bold text-6xl leading-tight md:text-8xl lg:text-[8.5rem] xl:text-[5.5rem] fullHD:text-9xl">
        Leandro <br />
        <span className="block">Pereyra</span>
      </h1>
      <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-[2.3rem] fullHD:text-[3.4rem]">Desarrollador Web</h2>
    </header>
  );
};

export default Header;
