import Skills from "@/Components/dashboard-student/non-academics-data";
import Image from "next/image";
import Popup from "@/Components/dashboard-student/non-academics-popup";
import React, { useState } from "react";

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
        <button
          onClick={openPopup}
          className="absolute bottom-10 right-4 rounded-full bg-headingRed p-3"
          style={{
            alignSelf: "flex-end",
            marginBottom: "1rem",
            marginRight: "1rem",
          }}
        >
          <Image src="/plus.png" alt="certificate" width={20} height={20} />
        </button>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
};

export default Non_Academics;
