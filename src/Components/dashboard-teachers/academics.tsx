import Academics_Data from "./academics-data";
import { useState } from "react";
import Popup from "@/Components/dashboard-teachers/popup-report";

const Academics = () => {
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
          <Academics_Data
            grade="8"
            semester="1"
            uploadDate="13/12/2023"
            teacherName="Jennifer Johnson"
            studentName="Ann Chovey"
          />
          <Academics_Data
            grade="7"
            semester="2"
            uploadDate="03/05/2023"
            teacherName="Jessica Huang"
            studentName="Ann Chovey"
          />
        </div>
        <button className="w-[150px] h-[40px] bg-headingRed flex items-center justify-center rounded-xl absolute top-[130px] right-[505px] m-10 text-white font-semibold font-s2xl z-15" onClick={openPopup}>
          Upload Report
        </button>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
};

export default Academics;
