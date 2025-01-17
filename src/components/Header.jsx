const Header = () => {
  const contactIcon = [
    {
      ref: "https://www.linkedin.com/in/leandropereyradev",
      icon: "linkedin",
    },
    {
      ref: "https://github.com/leandropereyradev",
      icon: "github",
    },
    {
      ref: "mailto:leandropereyradev@gmail.com",
      icon: "mail",
    },
  ];

  return (
    <header className="h-screen flex flex-col justify-end w-11/12 mx-auto gap-10 pb-6 md:pb-10 md:gap-14 lg:gap-20">
      <h1 className="font-bold text-6xl leading-tight md:text-8xl lg:text-[8.5rem]">
        Leandro <br />
        <span className="block">Pereyra</span>
      </h1>
      <h2 className="text-2xl md:text-4xl lg:text-5xl">Desarrollador Web</h2>

      <div className="flex gap-10 items-center md:gap-14 lg:gap-20">
        {contactIcon.map((item, index) => (
          <a key={index} href={item.ref} target="_blank" rel="noreferrer">
            <img
              src={`/assets/images/contact/${item.icon}.svg`}
              alt={item.icon}
              className="h-8 md:h-12 lg:h-16"
            />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
