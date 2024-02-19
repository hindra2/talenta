import Academics_Data from "./academics-data";

const Academics = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col w-full bg-teacherContainer rounded-3xl overflow-y-auto h-full shadow-inner">
        <div className="flex-grow py-7 px-7">
          <Academics_Data />
          <Academics_Data />
        </div>
        <div className="mt-auto">
          <div className="font-bold text-4xl text-headingBlack">
            Placeholder to allow scrolling
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
