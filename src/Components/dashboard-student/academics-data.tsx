import React, { useState } from "react";
import Popup from "@/Components/dashboard-student/academics-popup";
const Academics_Data: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="w-full">
      <div className="w-full h-[85px] bg-white rounded-2xl px-6 py-4 shadow-xl mb-5">
        <span className="text-lg font-semibold text-headingBlack">
          Grade _ | Semester _
        </span>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-l font-semibold text-subheadingBlack">
              Upload Date :{" "}
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              _ / _ / __ |{" "}
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Teacher:{" "}
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              Teacher&apos;s Name |{" "}
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Student:{" "}
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              Student&apos;s Name |{" "}
            </span>
          </div>
          <button onClick={openPopup}>
            <div className="w-[85px] h-[30px] bg-headingRed flex items-center justify-center rounded-3xl">
              <span className="text-white font-semibold">Open</span>
            </div>
          </button>
          <Popup isOpen={isPopupOpen} onClose={closePopup} />
        </div>
      </div>
    </div>
  );
};

export default Academics_Data;
