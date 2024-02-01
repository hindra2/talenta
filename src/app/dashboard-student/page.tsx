import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Main Header Section */}
      <div className="self-start w-[200px] text-left ml-[150px] mt-8">
        <span className="text-6xl font-semibold">Dashboard</span>
        <div className="flex items-end w-[4600px]">
          <Image src="/school.png" alt="school logo" width={25} height={25} />
          <div className="ml-3">
            <span className="border-b-2 border-current">
              Decelis Junior High School
            </span>
            <span className="mx-1"> | </span>
            <span>Grade 8A &gt; [Student's Name]</span>
          </div>
        </div>
      </div>
      <hr className="self-start ml-[150px] border-t border-gray-200 my-[20px] w-[70%]" />
      <div className="self-start ml-[150px]">
        <span className="font-bold text-4xl text-red-500">Bob Evans</span>
        <span className="font-medium text-3xl text-red-500">'s Profile</span>
      </div>
      {/* Main Content Container */}
      <div className="flex w-full mt-[30px] ml-[250px]">
        {/* Profile Outline Buttons */}
        <div className="flex flex-col ml-[30px]">
          <button className="mb-5 text-left text-xl">Personal Data</button>
          <button className="mb-5 text-left text-xl">Academics</button>
          <button className="mb-5 text-left text-xl">Non-Academics</button>
          <button className="text-left text-xl">Teacher's Notes</button>
        </div>
        <div className="flex-grow">
          <div className="flex justify-center">
            {/* Profile Container Section */}
            <div className="flex w-[50%] h-dvh bg-white shadow-lg rounded-3xl ml-[-150px]">
              <div className="flex">
                <div className="py-10 px-14 flex-1">
                  <div className="font-bold text-4xl">Profile</div>
                  <div className="flex">
                    <div className="mt-3">
                      <div className="font-semibold text-xl">
                        Personal Information
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="font-medium text-l">Name</div>
                        <div className="font-medium text-l">: Evans, Bob</div>
                        <div className="font-medium text-l">Date of birth</div>
                        <div className="font-medium text-l">: 02/10/2005</div>
                        <div className="font-medium text-l">Student ID</div>
                        <div className="font-medium text-l">: 09297042381</div>
                      </div>
                      <div className="font-semibold text-xl mt-5">
                        Geography and Nationality
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="font-medium text-l">Citizenship</div>
                        <div className="font-medium text-l">
                          : Citizen of China
                        </div>

                        <div className="font-medium text-l">Birthplace</div>
                        <div className="font-medium text-l">: Wuhan, Hubei</div>
                      </div>
                    </div>
                    <div className="mt-3 ml-[100px]">
                      <div className="font-semibold text-xl">Demographics</div>
                      <div className="grid grid-cols-2">
                        <div className="font-medium text-l">
                          Gender Identity
                        </div>
                        <div className="font-medium text-l">: Pansexual</div>
                        <div className="font-medium text-l">Sex</div>
                        <div className="font-medium text-l">: Female</div>
                        <div className="font-medium text-l">Pronouns</div>
                        <div className="font-medium text-l">: They/Them</div>
                      </div>
                      <div className="font-semibold text-xl mt-5">Family</div>
                      <div className="grid grid-cols-2">
                        <div className="font-medium text-l">Father</div>
                        <div className="font-medium text-l">
                          : Mr. Hugh S. Evans
                        </div>
                        <div className="font-medium text-l">Mother</div>
                        <div className="font-medium text-l">
                          : Mrs. Olive Evans
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Education Section */}
                  <div className="flex mt-[40px]">
                    <div className="font-bold text-4xl">Education</div>
                  </div>
                  {/* Education Progression Section */}
                  <div className="flex mt-[40px]">
                    <div className="font-bold text-4xl">
                      Education Progression
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
