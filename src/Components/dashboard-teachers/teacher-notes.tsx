import Teacher_Notes_Data from "./teacher-notes-data";

const Teacher_Notes = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col w-full bg-teacherContainer rounded-3xl overflow-y-auto h-full shadow-inner">
        <div className="flex-grow py-7 px-7">
          <Teacher_Notes_Data />
          <Teacher_Notes_Data />
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

export default Teacher_Notes;
