import Academics_Data from "./academics-data";
import Skills from "./non-academics-data";

const Non_Academics = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col w-full bg-teacherContainer rounded-3xl overflow-y-auto h-full shadow-inner">
        <div className="flex-grow py-7 px-7">
          <Skills />
        </div>
        <div className="mt-auto">
          <div className="font-bold text-4x"></div>
        </div>
      </div>
    </div>
  );
};

export default Non_Academics;
