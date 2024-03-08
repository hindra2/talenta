import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full">
      {/* Skills and Competencies */}
      <div className="w-full bg-white rounded-2xl px-6 py-4 shadow-xl mb-5 h-[250px]">
        <div>
          <span className="text-lg font-semibold text-headingBlack">
            Skills and Competencies
          </span>
          <div className="w-full h-[50px] ml-[25px]">
            <div className="">
              <div>
                <span className="text-l text-headingBlack font-semibold">
                  Leadership
                </span>
              </div>
              <div>
                <span className="text-l text-headingBlack">
                  - Organized a charity fundraiser for the local animal shelter.
                </span>
              </div>
              <div>
                <span className="text-l text-headingBlack">
                  - Led a team of volunteers during a community cleanup event.
                </span>
              </div>
            </div>
            <hr className="self-start border-t border-gray-300 my-[10px] w-[90%]" />
            <div className="">
              <div>
                <span className="text-l text-headingBlack font-semibold">
                  Teamwork
                </span>
              </div>
              <div>
                <span className="text-l text-headingBlack">
                  - Collaborated with classmates on a group project about
                  climate change.
                </span>
              </div>
              <div>
                <span className="text-l text-headingBlack">
                  - Played doubles in the school tennis team.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Awards and Recognition */}
      <div className="w-full bg-white rounded-2xl px-6 py-4 shadow-xl mb-5 h-[230px]">
        <div>
          <span className="text-lg font-semibold text-headingBlack">
            Awards and Recognitions
          </span>
          <div className="w-full h-[50px] ml-[25px]">
            <div className="">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[70px] mr-[10px]">
                  <Image
                    src="/non-academics-placeholders/certificate_2.jpg"
                    alt="certificate"
                    width={62}
                    height={62}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-l font-semibold text-headingBlack mb-[-7px]">
                    Mathematics Olympiad Gold Medal
                  </span>
                  <div className="mb-[-7px]">
                    <span className="text-sm text-captionBlack">
                      Issued by Junior Mathematics Association - May 2023
                    </span>
                  </div>
                  <div className="">
                    <span className="text-sm text-headingBlack">
                      Achieved the highest score in the national mathematics
                      competition, showcasing mathematical abilities.
                    </span>
                  </div>
                  <div className="flex">
                    <div className="flex items-center justify-center w-[65px] h-[20px] bg-gray-300 rounded-2xl">
                      <span className="text-xs text-subheadingBlack">Math</span>
                    </div>
                    <div className="flex items-center justify-center w-[65px] h-[20px] bg-gray-300 rounded-2xl ml-[5px]">
                      <span className="text-xs text-subheadingBlack">
                        National
                      </span>
                    </div>
                    <div className="flex items-center justify-center w-[65px] h-[20px] bg-gray-300 rounded-2xl ml-[5px]">
                      <span className="text-xs text-subheadingBlack">
                        Academic
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="self-start border-t border-gray-300 my-[10px] w-[90%]" />
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[70px] mr-[10px]">
                  <Image
                    src="/non-academics-placeholders/certificate_1.jpg"
                    alt="certificate"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-l font-semibold text-headingBlack mb-[-7px]">
                    Outstanding Musician Award
                  </span>
                  <div className="mb-[-7px]">
                    <span className="text-sm text-captionBlack">
                      Issued by School Music Department - December2022
                    </span>
                  </div>
                  <div className="">
                    <span className="text-sm text-headingBlack">
                      Recognized for exceptional musical talents and significant
                      contributions as a guitarist to the school band.
                    </span>
                  </div>
                  <div className="flex">
                    <div className="flex items-center justify-center w-[65px] h-[20px] bg-gray-300 rounded-2xl">
                      <span className="text-xs text-subheadingBlack">
                        Music
                      </span>
                    </div>
                    <div className="flex items-center justify-center w-[65px] h-[20px] bg-gray-300 rounded-2xl ml-[5px]">
                      <span className="text-xs text-subheadingBlack">
                        School
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experience */}
      <div className="w-full bg-white rounded-2xl px-6 py-4 shadow-xl mb-5 h-[250px]">
        <div>
          <span className="text-lg font-semibold text-headingBlack">
            Experience
          </span>
          <div className="w-full h-[50px] ml-[25px]">
            <div className="">
              <div>
                <span className="text-l text-headingBlack font-semibold">
                  Project Leader
                </span>
              </div>
              <div>
                <span className="text-l text-captionBlack">
                  Social Project &quot;Green Campus Initiative&quot; | Sept 2022
                  - Jan 2023 2023
                </span>
              </div>
              <div>
                <span className="text-l text-headingBlack">
                  Led a team of 10 students in organizing and implementing a
                  school-wide initiative to promote environmental
                  sustainability.
                </span>
              </div>
            </div>
            <hr className="self-start border-t border-gray-300 my-[10px] w-[90%]" />
            <div className="">
              <div>
                <span className="text-l text-headingBlack font-semibold">
                  Teamwork
                </span>
              </div>
              <div>
                <span className="text-l text-headingBlack">
                  Led a team of 10 students in organizing and implementing a
                  school-wide initiative to promote environmental
                  sustainability.
                </span>
              </div>
              <div>
                <span className="text-l text-headingBlack">
                  - Played doubles in the school tennis team.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
