import Student_Card from "@/Components/student-card";
import Student_Update from "@/Components/student-updates";
import { Space_Mono } from "next/font/google";

export default function Home() {
  return (
    <main className="overflow-hidden h-screen">
      {/* Main Header Section */}
      <div className="self-start text-left ml-[175px] mt-8">
        <span className="text-6xl font-semibold text-headingBlack">
          Grade 8A
        </span>
        <div className="flex items-end w-[4600px]">
          <div className="ml-3">
            <span className="border-b-2 border-subheadingBlack text-subheadingBlack">
              Decelis Junior High School
            </span>
            <span className="mx-1 text-subheadingBlack"> | </span>
            <span className="text-subheadingBlack">Grade 8A</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10">
        <div className="col-span-7">
          {/* Student grid */}
          <div className="ml-[175px] mt-[20px] h-dvh bg-teacherContainer rounded-3xl p-5 shadow-inner overflow-y-auto">
            <div className="grid grid-cols-6 gap-4">
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
              <Student_Card /> {}
            </div>
          </div>
        </div>

        <div className="col-span-3">
          {/* Searchbox div */}
          <div className="m-[60px] mt-[20px] h-[200px] bg-white rounded-3xl p-5 shadow-lg">
            <div className="items-center">
              <span>Class Details</span>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="mr-4">Teacher:</span>
              <input
                className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                placeholder=" "
              />
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="mr-4">Administrator:</span>
              <input
                className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                placeholder=" "
              />
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="mr-4">Class Size:</span>
              <input
                className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                placeholder=" "
              />
            </div>
          </div>

          {/* Update div */}
          <div className="grid grid-cols m-[60px] mt-[20px] h-[500px] bg-teacherContainer rounded-3xl p-5 shadow-inner">
            <Student_Update /> {}
          </div>
        </div>
      </div>
    </main>
  );
}
