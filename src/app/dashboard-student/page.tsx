export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex ml-[100px] w-[55%] h-dvh bg-white shadow-lg mt-[200px] rounded-3xl">
        <div className="flex">
          <div className="py-10 px-14 flex-1">
            {/* Profile Section */}
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
                  <div className="font-medium text-l">: Citizen of China</div>

                  <div className="font-medium text-l">Birthplace</div>
                  <div className="font-medium text-l">: Wuhan, Hubei</div>
                </div>
              </div>
              <div className="mt-3 ml-[60px]">
                <div className="font-semibold text-xl">Demographics</div>
                <div className="grid grid-cols-2">
                  <div className="font-medium text-l">Gender Identity</div>
                  <div className="font-medium text-l">: Pansexual</div>
                  <div className="font-medium text-l">Sex</div>
                  <div className="font-medium text-l">: Female</div>
                  <div className="font-medium text-l">Pronouns</div>
                  <div className="font-medium text-l">: They/Them</div>
                </div>
                <div className="font-semibold text-xl mt-5">Family</div>
                <div className="grid grid-cols-2">
                  <div className="font-medium text-l">Father</div>
                  <div className="font-medium text-l">: Mr. Hugh S. Evans</div>
                  <div className="font-medium text-l">Mother</div>
                  <div className="font-medium text-l">: Mrs. Olive Evans</div>
                </div>
              </div>
            </div>
            {/* Education Section */}
            <div className="flex mt-[40px]">
              <div className="font-bold text-4xl">Education</div>
            </div>
            {/* Education Progression Section */}
            <div className="flex mt-[40px]">
              <div className="font-bold text-4xl">Education Progression</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
