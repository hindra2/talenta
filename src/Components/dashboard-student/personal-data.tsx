const Personal_Data = () => {
  return (
    <div>
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
                    : Chovey, Ann
                </div>
                <div className="font-medium text-l text-headingBlack">
                    Date of birth
                </div>
                <div className="font-medium text-l text-headingBlack">
                    : 01/01/2005
                </div>
                <div className="font-medium text-l text-headingBlack">
                    Student ID
                </div>
                <div className="font-medium text-l text-headingBlack">
                    : 098567432
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
                    : Citizen of U.S.
                </div>

                <div className="font-medium text-l text-headingBlack">
                    Birthplace
                </div>
                <div className="font-medium text-l text-headingBlack">
                    : Chicago, IL
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
                    : Female
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
                    : She/Her
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
                    : Mr. Hugh S. Chovey
                </div>
                <div className="font-medium text-l text-headingBlack">
                    Mother
                </div>
                <div className="font-medium text-l text-headingBlack">
                    : Mrs. Olive Chovey
                </div>
                </div>
            </div>
            </div>
                              {/* Education Section */}
                              <div className="flex-1 mt-[40px]">
                    <div className="font-bold text-4xl text-headingBlack">
                      Education
                    </div>
                    <div className="flex-1 flex items-start mt-3">
                      <div className="h-[120px] w-[4px] bg-headingRed rounded-lg ml-3 mr-3"></div>
                      <div className="flex flex-col justify-start">
                        <div className="flex items-start ml-[-20px] mt-[5px]">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-3 w-3 rounded-full bg-headingRed mt-1"></div>
                          </div>
                          <div className="flex flex-col justify-start ml-[-8px]">
                            <span className="text-l font-semibold text-headingBlack mb-[-4px]">
                              2021 - Present
                            </span>
                            <span className="text-xs text-subheadingBlack mb-[-2px]">
                              Decelis Junior High School
                            </span>
                            <span className="text-xs text-captionBlack underline">
                              See Class & Teacher History
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start ml-[-20px] mt-[10px]">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-3 w-3 rounded-full bg-headingRed mt-1"></div>
                          </div>
                          <div className="flex flex-col justify-start ml-[-8px]">
                            <span className="text-l font-semibold text-headingBlack mb-[-4px]">
                              2018 - 2021
                            </span>
                            <span className="text-xs text-subheadingBlack mb-[-2px]">
                              Fate Elementary School
                            </span>
                            <span className="text-xs text-captionBlack underline">
                              See Class & Teacher History
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Education Progression Section */}
                  <div className="flex-1 mt-[40px]">
                    <div className="font-bold text-4xl text-headingBlack">
                      Education Progression
                    </div>
                    <span className="text-sm">No change in progession</span>
                  </div>
    </div>
  );
};

export default Personal_Data;
