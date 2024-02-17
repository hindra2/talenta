import Link from "next/link";
import Image from "next/image";

const Student_Update = () => {
  return (
      <div className="flex items-center h-[75px] w-full bg-white shadow-md rounded-xl">
        <div className="h-full w-2 bg-headingRed rounded-l-lg">
        </div>
        <div className="ml-2 items-center">
          <div>
            <span>Anita Bath add 2 cetificates</span>
          </div>
          <div>
            <button><span className="text-xxs">Just Now</span></button>
              <span className="text-xxs"> | </span>
            <button><span className="text-xxs">Open</span></button>
          </div>
        </div>
      </div>
  );
};

export default Student_Update;