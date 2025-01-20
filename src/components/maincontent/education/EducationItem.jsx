import PropTypes from "prop-types";

const EducationItem = ({ date, program, institution, description }) => {
  return (
    <div className="flex flex-col gap-12 justify-between">
      <div className="flex flex-col gap-2 md:grid md:grid-cols-education md:gap-4 md:pr-4">
        <div className="text-left">
          <p className="text-sm">{date}</p>
          <h2 className="text-lg font-bold">{program}</h2>
          <h2 className="text-sm font-bold italic mb-4">{institution}</h2>
        </div>

        <p className="text-sm">{description}</p>
      </div>

      <div className="w-11/12 mx-auto h-[1px] bg-blue-400 md:w-2/4 xl:w-1/3 xl:mb-4" />
    </div>
  );
};

EducationItem.propTypes = {
  date: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EducationItem;
