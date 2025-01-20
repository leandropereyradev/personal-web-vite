import education from "../../../data/education";
import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <div id="education">
      <h1 className="text-blue-400 text-center text-2xl font-bold mb-6 md:text-3xl lg:pb-10 xl:text-3xl">
        Educación
      </h1>

      <div className="flex flex-col gap-12">
        {education &&
          education.map((item) => <EducationItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Education;
