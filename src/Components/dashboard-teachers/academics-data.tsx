import Image from "next/image";

const Academics_Data = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[85px] bg-white rounded-2xl px-6 py-4 shadow-xl mb-5">
        <span className="text-lg font-semibold text-headingBlack">
          Grade _ | Semester _
        </span>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-l font-semibold text-subheadingBlack">
              Upload Date :{" "}
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              _ / _ / __ |{" "}
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Teacher:{" "}
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              Teacher&apos;s Name |{" "}
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Student:{" "}
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              Student&apos;s Name |{" "}
            </span>
          </div>
          <button>
            <div className="w-[30px] h-[30px] bg-headingRed flex items-center justify-center rounded-full">
              <Image 
                src="edit.png"
                width={15}
                height={15}
                alt="edit"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Academics_Data;
