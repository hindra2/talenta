import React from "react";

interface PropOpen {
    isOpen: boolean;
    onClose: () => void;
}

const Popup: React.FC<PropOpen> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-3xl relative">
                <button className="absolute top-0 right-0 p-6" onClick={onClose}>
                    {/* Replace with an actual image tag or icon component */}
                    <img 
                        src="/close.png" 
                        alt="close" 
                        width={20}
                        height={20} />
                </button>

                <div className="flex flex-col items-center">
                    <div className="flex mb-6 w-full justify-between mx-5">
                        <div className="flex flex-col">
                            <span className="mb-2">Grade</span>
                            <input
                                className="mb-4 p-2 border rounded"
                                type="text"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="mb-2">Semester</span>
                            <input
                                className="mb-4 p-2 border rounded"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-center mb-[70px]">
                        <div className="flex flex-col w-full mr-4">
                            <span className="mb-2">Upload Student Report</span>
                            <input
                                className="p-2 border rounded"
                                type="file"
                            />
                        </div>
                        <div className="w-[85px] h-[30px] bg-headingRed flex items-center justify-center rounded-3xl absolute bottom-0 right-0 m-10">
                            <button className="text-white font-semibold">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
