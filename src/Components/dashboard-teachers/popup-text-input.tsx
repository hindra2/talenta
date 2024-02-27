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

    const [text, setText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded w-[75%] h-[50%] text-center">
                <div>
                    <ParagraphInput />
                </div>
                <button
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                    onClick={onClose}
                >
                    Close Modal
                </button>
            </div>
      </div>
    );
};

export default Popup;
