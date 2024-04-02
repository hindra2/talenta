import Image from "next/image";
import Popup from "@/Components/dashboard-teachers/popup-text-input";
import React, { useState } from "react";

interface TeacherNotesProps {
  title: string;
  uploadDate: string;
  teacherName: string;
  studentName: string;
}

const Teacher_Notes_Data: React.FC<TeacherNotesProps> = ({
  title,
  uploadDate,
  teacherName,
  studentName
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      {" "}
      {/* Ensure outer div centers the content */}
      <div className="max-w-4xl w-full h-auto bg-white rounded-2xl px-6 py-4 shadow-xl mb-5 overflow-hidden">
        {" "}
        {/* Set a max-width */}
        <span className="text-lg font-semibold text-headingBlack">
          {title}
        </span>
        <div className="flex justify-between items-center">
          <div className="overflow-hidden">
            <span className="text-l font-semibold text-subheadingBlack">
              Upload Date: 
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              {uploadDate} |
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Teacher: 
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              {teacherName} |
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Student: 
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              {studentName}
            </span>
          </div>
          <div>
            <button className="mr-1" onClick={openPopup}>
              <div className="w-[30px] h-[30px] bg-headingRed flex items-center justify-center rounded-full">
                <Image 
                  src="edit.png"
                  width={15}
                  height={15}
                  alt="edit"
                />
              </div>
            </button>
            <Popup isOpen={isPopupOpen} onClose={closePopup} />
            <button>
              <div className="w-[30px] h-[30px] bg-headingRed flex items-center justify-center rounded-full">
                <Image 
                  src="trash-can.png"
                  width={15}
                  height={15}
                  alt="edit"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher_Notes_Data;
