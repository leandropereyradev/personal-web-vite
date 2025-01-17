const Social = () => {
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
  );
};

export default Social;
