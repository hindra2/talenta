import Teacher_Notes_Data from "./teacher-notes-data";

const Teacher_Notes = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col w-full bg-teacherContainer rounded-3xl overflow-y-auto h-full shadow-inner">
        <div className="flex-grow py-7 px-7">
        <Teacher_Notes_Data
            title="Progress Update Semester 1 AY 23-24"
            uploadDate=" 15/10/2023"
            teacherName=" Jennifer Johnson"
            studentName=" Ann Chovey"
          />
          <Teacher_Notes_Data
            title="Update Semester 2 AY 22-23"
            uploadDate=" 28/2/2023"
            teacherName=" Jessica Huang"
            studentName=" Ann Chovey"
          />
        </div>
      </div>
    </div>
  );
};

export default Teacher_Notes;
