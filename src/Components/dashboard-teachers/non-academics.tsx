import Skills from "../dashboard-student/non-academics-data";
import Popup from "@/Components/dashboard-student/non-academics-popup";
import React, { useState } from "react";
import Image from "next/image";

const Non_Academics = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="relative w-full bg-teacherContainer rounded-3xl h-full shadow-inner flex flex-col">
        <div className="flex-grow overflow-y-auto py-7 px-7">
          <Skills />
          <div className="mt-[1000px]">
            <div className="font-bold text-4x"></div>
          </div>
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
};

export default Non_Academics;
