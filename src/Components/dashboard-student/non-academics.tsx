import Skills from "@/Components/dashboard-student/non-academics-data";
import Image from "next/image";

const Non_Academics = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="relative w-full bg-teacherContainer rounded-3xl h-full shadow-inner flex flex-col">
        <div className="flex-grow overflow-y-auto py-7 px-7">
          <Skills />
          <div className="mt-[1000px]">
            <div className="font-bold text-4x"></div>
          </div>
        </div>
        <button
          className="absolute bottom-10 right-4 rounded-full bg-headingRed p-3"
          style={{
            alignSelf: "flex-end",
            marginBottom: "1rem",
            marginRight: "1rem",
          }}
        >
          <Image src="/plus.png" alt="certificate" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default Non_Academics;
