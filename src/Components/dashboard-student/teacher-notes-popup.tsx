import Image from "next/image";
import React from "react";

// Define the interface for the props that Popup will receive
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  teacherName: string;
  className: string;
  noteContent: string;
  updatedDate: string;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  teacherName,
  className,
  noteContent,
  updatedDate,
}) => {
  // If the popup is not open, return null to render nothing
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 w-[50%] h-[50%] text-center rounded-3xl relative flex items-center justify-center">
        <button className="absolute top-0 right-0 p-6" onClick={onClose}>
          <Image src="/close.png" alt="Close" width={20} height={20} />
        </button>
        <div className="flex flex-col h-full items-start">
          <span className="text-2xl font-semibold text-headingBlack mt-[15px]">
            {title}
          </span>
          <span className="text-l text-headingBlack mt-[5px]">
            Teacher: {teacherName}
          </span>
          <span className="text-l text-headingBlack mt-[0px]">
            Class: {className}
          </span>
          <hr className="self-start border-t border-gray-400 my-[15px] w-[94%]" />
          <div className="text-l text-headingBlack text-justify w-[94%] overflow-auto">
            {noteContent}
          </div>
          <div className="h-10 absolute bottom-5 w-[94%]">
            <span className="text-l text-headingBlack absolute right-12">
              Updated on {updatedDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
