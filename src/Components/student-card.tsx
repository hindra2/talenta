import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Student_Card = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    function randomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setNum(randomNumber(1, 6));
  }, []);

  return (
    <div className="flex flex-col h-[190px] w-[160px] bg-white rounded-xl shadow-lg p-2 items-center">
      <Link href="student-view">
        <button>
          <div className="flex flex-col bg-color-transparent rounded-full p-2">
            <Image
              src={`/student-pics/${num}.jpg`}
              alt="Student Placeholder"
              width={100}
              height={100}
            />
          </div>

          <div className="flex flex-col items-center">
            <span>Student Name</span>
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
