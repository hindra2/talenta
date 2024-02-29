import Popup from "@/Components/dashboard-student/teacher-notes-popup";
import React, { useState } from "react";

type TeacherNotesDataProps = {
  title: string;
  uploadDate: string;
  teacherName: string;
  studentName: string;
  noteContent: string;
  previewLength?: number; // Optional prop to customize the preview length
};

const Teacher_Notes_Data: React.FC<TeacherNotesDataProps> = ({
  title,
  uploadDate,
  teacherName,
  studentName,
  noteContent,
  previewLength = 225,
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // Function to truncate note content
  const truncateContent = (content: string, maxLength: number) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-4xl w-full h-auto bg-white rounded-2xl px-6 py-4 shadow-xl mb-5 overflow-hidden">
        <span className="text-lg font-semibold text-headingBlack">{title}</span>
        <div className="flex justify-between items-center">
          <div className="overflow-hidden">
            <span className="text-l font-semibold text-subheadingBlack">
              Upload Date:{" "}
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              {uploadDate} |{" "}
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Teacher:{" "}
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              {teacherName} |{" "}
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Student:{" "}
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              {studentName}
            </span>
          </div>
          <button onClick={openPopup}>
            <div className="w-[85px] h-[30px] bg-headingRed flex items-center justify-center rounded-3xl">
              <span className="text-white font-semibold">Open</span>
            </div>
          </button>
          <Popup
            isOpen={isPopupOpen}
            onClose={closePopup}
            title={title}
            teacherName={teacherName}
            className="Geography"
            noteContent={noteContent}
            updatedDate={uploadDate}
          />
        </div>
        <div className="mt-3 text-l text-captionBlack overflow-auto">
          {truncateContent(noteContent, previewLength)}
        </div>
      </div>
    </div>
  );
};

export default Teacher_Notes_Data;
