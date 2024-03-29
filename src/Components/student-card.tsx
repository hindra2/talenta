import Link from "next/link";
import Image from "next/image";

const Student_Card = () => {
  return (
    <div className="flex flex-col h-[190px] w-[160px] bg-white rounded-xl shadow-lg p-2 items-center">
      <Link href="student-view">
        <button>
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
            <span className="text-xxs">See Profile</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Student_Card;
