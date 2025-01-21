const CardImage = () => {
  const content = {
    imageSrc: `${import.meta.env.BASE_URL}assets/images/img1.jpg`,
    imageAlt: "MasterClass Log4J",
    description:
      "Impartiendo una Master Class sobre Log4J durante mi paso por el bootcamp Backend Java Developer de IT Academy. Una experiencia dinámica, participativa y muy enriquecedora.",
    repoLink: "https://github.com/leandropereyradev/master_class_log4j",
  };

  return (
    <div className="w-96 mx-auto my-10 flex flex-col gap-6 md:grid md:w-11/12 md:grid-cols-about md:gap-6 md:pr-6 xl:w-9/12 md:items-center">
      <img
        src={content.imageSrc}
        alt={content.imageAlt}
        className="rounded-md"
      />
      <div className="flex flex-col gap-6">
        <p className="text-sm italic xl:text-xs">{content.description}</p>
        <div className="flex justify-center">
          <a
            href={content.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-dorado font-semibold rounded-xl lg:text-xs lg:px-2 lg:py-1 lg:rounded-md"
          >
            Repo en GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
