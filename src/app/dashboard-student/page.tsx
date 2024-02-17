import Personal_Data from "@/Components/personal-data";
import Image from "next/image";

export default function Home() {
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
        <span className="font-medium text-3xl text-headingRed">&apos;s Profile</span>
      </div>
      {/* Main Content Container */}
      <div className="flex w-full mt-[30px] ml-[250px]">
        {/* Profile Outline Buttons */}
        <div className="flex flex-col ml-[30px]">
          <button className="profile-button mb-6 text-xl text-headingRed border-l-2 border-headingRed" data-section="personalData">
              Personal Data
            </button>
            <button className="profile-button mb-6 text-left text-xl text-subheadingBlack ml-5" data-section="academics">
              Academics
            </button>
            <button className="profile-button mb-6 text-left text-xl text-subheadingBlack ml-5" data-section="nonAcademics">
              Non-Academics
            </button>
            <button className="profile-button text-left text-xl text-subheadingBlack ml-5" data-section="teachersNotes">
              Teacher&apos;s Notes
            </button>
        </div>
        <div className="flex-grow">
          <div className="flex justify-center">
            {/* Profile Container Section */}
            <div className="flex w-[60%] h-[80vh] bg-white shadow-lg rounded-3xl ml-[-70px] overflow-y-auto">
              <div className="flex">
                <div className="py-10 px-14 flex-1">
                  <Personal_Data />
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
              <div className="flex items-center h-[75px] w-[335px] bg-white shadow-md rounded-xl px-2">
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
                    [Teacher&apos;s Name]
                  </p>
                  <p className="font-bold text-xs text-subheadingBlack leading-none mb-1 text-veryDarkBlue">
                    [School Name]
                  </p>
                </div>
              </div>
              <div className="flex items-center h-[75px] w-[335px] bg-white shadow-md rounded-xl px-2 mt-[20px]">
                <Image
                  src="/administratorPlaceholder.png"
                  alt="Electronic"
                  width={50}
                  height={50}
                />
                <div className="ml-2">
                  <p className="font-semibold text-xs text-subheadingBlack leading-none mt-[5px]">
                    School Admin
                  </p>
                  <p className="font-bold text-lg text-headerBlack leading-none mb-1 text-veryDarkBlue">
                    [Admin&apos;s Name]
                  </p>
                  <p className="font-bold text-xs text-subheadingBlack leading-none mb-1 text-veryDarkBlue">
                    [School Name]
                  </p>
                </div>
              </div>
              <button>
                <div className="flex bg-headingRed w-[335px] h-[50px] mt-[375px] rounded-full items-center justify-center">
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
