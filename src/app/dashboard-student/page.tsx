import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Main Header Section */}
      <div className="self-start w-[200px] text-left ml-[150px] mt-8">
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
              Grade 8A &gt; [Student's Name]
            </span>
          </div>
        </div>
      </div>
      <hr className="self-start ml-[150px] border-t border-gray-200 my-[20px] w-[70%]" />
      <div className="self-start ml-[150px]">
        <span className="font-bold text-4xl text-headingRed">Bob Evans</span>
        <span className="font-medium text-3xl text-headingRed">'s Profile</span>
      </div>
      {/* Main Content Container */}
      <div className="flex w-full mt-[30px] ml-[250px]">
        {/* Profile Outline Buttons */}
        <div className="flex flex-col ml-[30px]">
          <button className="mb-6 text-xl text-headingRed border-l-2 border-headingRed">
            Personal Data
          </button>
          <button className="mb-6 text-left text-xl text-subheadingBlack ml-5">
            Academics
          </button>
          <button className="mb-6 text-left text-xl text-subheadingBlack ml-5">
            Non-Academics
          </button>
          <button className="text-left text-xl text-subheadingBlack ml-5">
            Teacher's Notes
          </button>
        </div>
        <div className="flex-grow">
          <div className="flex justify-center">
            {/* Profile Container Section */}
            <div className="flex w-[60%] h-dvh bg-white shadow-lg rounded-3xl ml-[-70px]">
              <div className="flex">
                <div className="py-10 px-14 flex-1">
                  <div className="font-bold text-4xl text-headingBlack">
                    Profile
                  </div>
                  <div className="flex">
                    <div className="mt-3">
                      <div className="font-semibold text-xl text-headingBlack">
                        Personal Information
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="font-medium text-l text-headingBlack">
                          Name
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : Evans, Bob
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          Date of birth
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : 02/10/2005
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          Student ID
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : 09297042381
                        </div>
                      </div>
                      <div className="font-semibold text-xl mt-5 text-headingBlack">
                        Geography and Nationality
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="font-medium text-l text-headingBlack">
                          Citizenship
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : Citizen of China
                        </div>

                        <div className="font-medium text-l text-headingBlack">
                          Birthplace
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : Wuhan, Hubei
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 ml-[100px]">
                      <div className="font-semibold text-xl text-headingBlack">
                        Demographics
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="font-medium text-l text-headingBlack">
                          Gender Identity
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : Pansexual
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          Sex
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : Female
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          Pronouns
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : They/Them
                        </div>
                      </div>
                      <div className="font-semibold text-xl mt-5 text-headingBlack">
                        Family
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="font-medium text-l text-headingBlack">
                          Father
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : Mr. Hugh S. Evans
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          Mother
                        </div>
                        <div className="font-medium text-l text-headingBlack">
                          : Mrs. Olive Evans
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Education Section */}
                  <div className="flex mt-[40px]">
                    <div className="font-bold text-4xl text-headingBlack">
                      Education
                    </div>
                  </div>
                  {/* Education Progression Section */}
                  <div className="flex mt-[40px]">
                    <div className="font-bold text-4xl text-headingBlack">
                      Education Progression
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
              <div className="flex items-center h-[75px] w-[350px] bg-white shadow-md rounded-xl px-2">
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
                    [Teacher's Name]
                  </p>
                  <p className="font-bold text-xs text-subheadingBlack leading-none mb-1 text-veryDarkBlue">
                    [School Name]
                  </p>
                </div>
              </div>
              <div className="flex items-center h-[75px] w-[350px] bg-white shadow-md rounded-xl px-2 mt-[20px]">
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
                    [Admin's Name]
                  </p>
                  <p className="font-bold text-xs text-subheadingBlack leading-none mb-1 text-veryDarkBlue">
                    [School Name]
                  </p>
                </div>
              </div>
              <button>
                <div className="flex bg-headingRed w-[350px] h-[50px] mt-[375px] rounded-full items-center justify-center">
                  <span className="text-xl">Download as PDF</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
