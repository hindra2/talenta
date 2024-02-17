import Link from "next/link";
import Image from "next/image";

const Student_Update = () => {
  return (
    <div className="flex flex-col h-[100px] w-full bg-white rounded-xl shadow-lg p-2 items-center">        
      <div className="bgcolor-black"></div>
      <div className="flex flex-col items-center">
        <span>Anita Bath add 2 cetificates</span>
      </div>
      <div>
        <button><span className="text-xxs">Just Now</span></button>
        <span className="text-xxs"> | </span>
        <button><span className="text-xxs">Open</span></button>
      </div>
    </div>
  );
};

export default Student_Update;
