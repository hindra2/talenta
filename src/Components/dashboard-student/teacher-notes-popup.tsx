import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import ParagraphInput from "@/Components/dashboard-teachers/text-input";

interface PropOpen {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PropOpen> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 w-[50%] h-[50%] text-center rounded-3xl relative flex items-center justify-center">
        <button className="absolute top-0 right-0 p-6" onClick={onClose}>
          <Image src="/close.png" alt="Close" width={20} height={20} />
        </button>
        <div className="flex flex-col h-full items-start">
          <span className="text-2xl font-semibold text-headingBlack mt-[15px]">
            Notes Title
          </span>
          <span className="text-l text-headingBlack mt-[5px]">
            Teacher: John Doe
          </span>
          <span className="text-l text-headingBlack mt-[0px]">
            Class: Geography
          </span>
          <hr className="self-start border-t border-gray-400 my-[15px] w-[94%]" />
          <div className="text-l text-headingBlack text-justify w-[94%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="h-10 absolute bottom-5 w-[94%]">
            <span className="text-l text-headingBlack absolute right-12">
              Updated on 17 July 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
