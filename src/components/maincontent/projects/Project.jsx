import PropTypes from "prop-types";

const Project = ({ date, title, description, technologies, web, github }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      {/* Date Section */}
      <div>
        <span>{date}</span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">{title}</h2>

        {/* Description */}
        <div className="flex flex-col gap-3 mb-6 italic">
          {description.map((item, index) => (
            <p key={index}>- {item}</p>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-700 font-semibold rounded-xl"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(web || github) && (
          <div className="flex flex-wrap gap-3">
            {web && (
              <a
                href={web}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-900 font-semibold rounded-xl"
              >
                Ver Web
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-900 font-semibold rounded-xl"
              >
                Ver GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Project.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  web: PropTypes.string,
  github: PropTypes.string,
};

export default Project;
