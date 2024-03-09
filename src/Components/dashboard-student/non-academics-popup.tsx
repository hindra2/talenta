import Image from "next/image";
import React, { useState } from "react";

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
      <div className="bg-white p-8 w-[850px] h-[700px] text-center rounded-3xl relative items-center justify-center">
        <div className="flex">
          <button className="absolute top-0 right-0 p-6" onClick={onClose}>
            <Image src="/close.png" alt="" width={20} height={20} />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-1">
            <span className="text-headingBlack">Field</span>
            <span className="text-headingRed">*</span>{" "}
          </div>
          <div className="w-[200px] h-[40px] flex items-center justify-center ml-[10px]">
            <select className="block rounded-lg border-2 border-gray-300 text-subheadingBlack px-[10px] py-[5px]">
              <option selected>Skills and Competencies</option>
              <option>Awards and Recognition</option>
              <option>Experience</option>
            </select>
          </div>
        </div>
        <hr className="self-start border-t border-gray-300 my-[10px] w-[95%]" />
        <div className="flex flex-col">
          <div className="flex items-center space-x-1">
            <span className="text-headingBlack">Title</span>
            <span className="text-headingRed">*</span>{" "}
          </div>
          <div className="w-[95%] h-[40px] flex items-center justify-center">
            <input
              type="text"
              className="w-full h-full rounded-lg border-2 border-gray-300 text-subheadingBlack pl-2"
              placeholder="Enter title here"
            />
          </div>
        </div>
        <div className="flex flex-col mt-[5px]">
          <div className="flex items-center space-x-1">
            <span className="text-headingBlack">Issuer</span>
            <span className="text-headingRed">*</span>{" "}
          </div>
          <div className="w-[95%] h-[40px] flex items-center justify-center">
            <input
              type="text"
              className="w-full h-full rounded-lg border-2 border-gray-300 text-subheadingBlack pl-2"
              placeholder="Enter issuer here"
            />
          </div>
        </div>
        <div className="flex flex-col mt-[5px]">
          <div className="flex items-center space-x-1">
            <span className="text-headingBlack">Issue Date</span>
            <span className="text-headingRed">*</span>{" "}
          </div>
          <div className="w-[20%] h-[40px] flex items-center justify-center">
            <input
              type="date"
              className="w-full h-full rounded-lg border-2 border-gray-300 text-subheadingBlack pl-2"
              placeholder="Select a date"
            />
          </div>
        </div>
        <div className="flex flex-col mt-[5px]">
          <div className="flex items-center space-x-1">
            <span className="text-headingBlack">Description</span>
            <span className="text-headingRed">*</span>{" "}
          </div>
          <div className="w-[95%] h-[40px] flex items-center justify-center mt-[65px]">
            <textarea
              rows={6}
              className="w-full rounded-lg border-2 border-gray-300 text-subheadingBlack pl-2 py-2"
              placeholder="Enter description here"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col mt-[80px] text-left">
          <div className="flex items-center space-x-1">
            <span className="text-headingBlack">Documentation & Evidence</span>
            <span className="text-headingRed">*</span>{" "}
          </div>
          <span className="text-captionBlack text-sm">
            Include supportive media, such as related evidence to validate and
            showcase your honors and awards.
          </span>
          <button>
            <div className="w-[125px] h-[30px] mt-[10px] bg-gray-300 flex items-center justify-center rounded-lg">
              <Image src="/upload.png" alt="upload" width={15} height={15} />
              <span className="text-headingBlack text-sm ml-[10px]">
                Upload File
              </span>
            </div>
          </button>
        </div>
        <button>
          <div className="w-[85px] h-[30px] bg-headingRed flex items-center justify-center rounded-3xl absolute bottom-0 right-0 m-10">
            <span className="text-white font-semibold">Upload</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Popup;
