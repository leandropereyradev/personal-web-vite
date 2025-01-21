import icons from "../../data/social";

const Social = () => (
  <div className="flex gap-10 items-center md:gap-14 lg:gap-14 xl:gap-10">
    {icons.map((item, index) => (
      <a key={index} href={item.ref} target="_blank" rel="noreferrer">
        <img
          src={`${import.meta.env.BASE_URL}assets/icons/${item.icon}.svg`}
          alt={item.icon}
          className="h-8 md:h-12 lg:h-9 xl:h-8"
        />
      </a>
    ))}
  </div>
);

export default Social;
