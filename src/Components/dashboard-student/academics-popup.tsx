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
      <div className="bg-white p-8 rounded w-[45%] h-[95%] text-center rounded-3xl relative flex items-center justify-center">
        <button className="absolute top-0 right-0 p-6" onClick={onClose}>
          <Image src="/close.png" alt="Close" width={20} height={20} />
        </button>
        <object
          className="w-[95%] h-[95%] mx-auto"
          data="/transcript_placeholder.pdf"
          type="application/pdf"
          style={{ display: "block" }}
        >
          <p>
            Your browser does not support PDFs. Please download the PDF to view
            it: <a href="/transcript_placeholder.pdf">Download PDF</a>.
          </p>
        </object>
      </div>
    </div>
  );
};

export default Popup;
