"use client";

import React, { useState } from "react";
import Image from "next/image";

// custom components
import Personal_Data from "@/Components/dashboard-student/personal-data";
import Teacher_Notes from "@/Components/dashboard-student/teacher-notes";
import Academics from "@/Components/dashboard-student/academics";
import Non_Academics from "@/Components/dashboard-student/non-academics";
import Administrator from "@/Components/dashboard-student/administrator";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("personalData");

  // This function returns the corresponding component based on the active state
  const renderComponent = () => {
    switch (activeComponent) {
      case "personalData":
        return <Personal_Data />;
      case "academics":
        return <Academics />;
      case "nonAcademics":
        return <Non_Academics />;
      case "teachersNotes":
        return <Teacher_Notes />;
      default:
        return <Personal_Data />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden h-screen">
      {/* Main Header Section */}
      <div className="self-start text-left ml-[150px] mt-8">
        <span className="text-6xl font-semibold text-headingBlack">
          Dashboard
        </span>
        <div className="flex items-end w-[4600px]">
          <Image src="/school.png" alt="school logo" width={25} height={25} />
          <div className="ml-3">
            <span className="border-b-2 border-subheadingBlack text-subheadingBlack">
              Decelis Junior High School
            </span>
            <span className="mx-1 text-subheadingBlack"> | </span>
            <span className="text-subheadingBlack">
              Grade 8A &gt; [Student&apos;s Name]
            </span>
          </div>
        </div>
      </div>
      <hr className="self-start ml-[150px] border-t border-gray-200 my-[20px] w-[70%]" />
      <div className="self-start ml-[150px]">
        <span className="font-bold text-4xl text-headingRed">Jane Doe</span>
        <span className="font-medium text-3xl text-headingRed">
          &apos;s Profile
        </span>
      </div>
      {/* Main Content Container */}
      <div className="flex w-full mt-[30px] ml-[250px]">
        {/* Profile Outline Buttons */}
        <div className="flex flex-col ml-[30px]">
          <button
            className={`profile-button mb-6 text-xl text-left p-2 ${
              activeComponent === "personalData"
                ? "text-headingRed border-l-2 border-headingRed -ml-2 pl-4"
                : "text-subheadingBlack"
            }`}
            onClick={() => setActiveComponent("personalData")}
          >
            Personal Data
          </button>
          <button
            className={`profile-button mb-6 text-xl text-left p-2 ${
              activeComponent === "academics"
                ? "text-headingRed border-l-2 border-headingRed -ml-2 pl-4"
                : "text-subheadingBlack"
            }`}
            onClick={() => setActiveComponent("academics")}
          >
            Academics
          </button>
          <button
            className={`profile-button mb-6 text-xl text-left p-2 ${
              activeComponent === "nonAcademics"
                ? "text-headingRed border-l-2 border-headingRed -ml-2 pl-4"
                : "text-subheadingBlack"
            }`}
            onClick={() => setActiveComponent("nonAcademics")}
          >
            Non-Academics
          </button>
          <button
            className={`profile-button mb-6 text-xl text-left p-2 ${
              activeComponent === "teachersNotes"
                ? "text-headingRed border-l-2 border-headingRed -ml-2 pl-4"
                : "text-subheadingBlack"
            }`}
            onClick={() => setActiveComponent("teachersNotes")}
          >
            Teacher&apos;s Notes
          </button>
        </div>

        <div className="flex-grow">
          <div className="flex justify-center">
            {/* Profile Container Section */}
            <div className="flex w-[60%] h-[80vh] bg-white shadow-lg rounded-3xl ml-[-70px] overflow-y-auto">
              <div className="flex">
                <div className="py-10 px-14 flex-1">
                  {renderComponent()}
                  <div className="flex-1 mt-[1000px]">
                    <div className="font-bold text-4xl text-headingBlack">
                      Placeholder to allow scrolling
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Administrator Section & Download as PDF button*/}
            <div className="ml-[30px]">
              <span className="font-semibold text-xl text-headingBlack">
                Administrator
              </span>
              <Administrator />
              <Administrator />
              <button className="fixed bottom-5">
                <div className="flex bg-headingRed w-[335px] h-[50px] rounded-full items-center justify-center">
                  <span className="text-xl text-white">Download as PDF</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
