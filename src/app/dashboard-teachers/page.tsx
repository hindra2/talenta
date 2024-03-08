import Student_Card from "@/Components/student-card";
import Student_Update from "@/Components/student-updates";
import { Space_Mono } from "next/font/google";
import ClassDetails from "@/Components/dashboard-teachers/classDetails";

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
          <ClassDetails />

          {/* Update div */}
          <Student_Update /> {}
        </div>
      </div>
    </main>
  );
}
