import Link from "next/link";
import Image from "next/image";

const Student_Card = () => {
  return (
    <div className="flex flex-col h-[190px] w-[160px] bg-white rounded-xl shadow-lg p-2 items-center">
        <div className="flex flex-col bg-gray-100 rounded-full p-2">
            <Image
                src="/student.png"
                alt="Student Placeholder"
                width={100}
                height={100}
            />
        </div>
        
        <div className="flex flex-col items-center">
            <span>Ann Chovey</span>
        </div>
        <div>
            <button><span className="text-xxs">See Profile</span></button>
            <span className="text-xxs"> | </span>
            <button><span className="text-xxs">Messages</span></button>
        </div>
    </div>
  );
};

export default Student_Card;
