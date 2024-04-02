import Teacher_Notes_Data from "./teacher-notes-data";
import Popup from "@/Components/dashboard-teachers/popup-text-input";
import React, { useState } from "react";

const Teacher_Notes = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

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
        <button className="w-[150px] h-[40px] bg-headingRed flex items-center justify-center rounded-xl absolute top-[130px] right-[505px] m-10 text-white font-semibold font-s2xl z-[-50px]"
        onClick={openPopup}>
          Upload Notes
        </button>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
};

export default Teacher_Notes;
