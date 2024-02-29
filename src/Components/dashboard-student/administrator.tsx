// Import React to enable JSX syntax
import React from "react";
import Image from "next/image";

// Define props type for better type checking (optional but recommended)
type AdministratorProps = {
  teacherName: string; // Adding a prop for the teacher's name
  schoolName?: string; // Optional prop for the school name
};

// Modify the Administrator component to accept props
const Administrator = ({
  teacherName,
  schoolName = "Default School Name",
}: AdministratorProps) => {
  return (
    <div>
      <div className="flex items-center h-[75px] w-[335px] bg-white shadow-md rounded-xl px-2 mb-[20px]">
        <Image
          src="/administratorPlaceholder.png"
          alt="Electronic"
          width={50}
          height={50}
        />
        <div className="ml-2">
          <p className="font-semibold text-xs text-subheadingBlack leading-none mt-[5px]">
            Homeroom Teacher
          </p>
          <p className="font-bold text-lg text-headerBlack leading-none mb-1 text-veryDarkBlue">
            {teacherName} {/* Use the teacherName prop here */}
          </p>
          <p className="font-bold text-xs text-subheadingBlack leading-none mb-1 text-veryDarkBlue">
            {schoolName}{" "}
            {/* Use the schoolName prop here, with a default value */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Administrator;
