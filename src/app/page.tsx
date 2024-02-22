import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div className="flex flex-col float-end h-[60px] w-[900px] mt-[50px] bg-red-400 rounded-l-full">
          <div className="grid grid-flow-col auto-cols-auto ml-[75px]">
            <a href="/" className="text-xl text-white mt-[15px]">Home</a>
            <a href="about-page" className="text-xl text-white mt-[15px]">About Us</a>
            <a href="features-page" className="text-xl text-white mt-[15px]">Features</a>
            <a href="partnership-page" className="text-xl text-white mt-[15px]">
              Partnership
            </a>
            <a href="hiw-page" className="text-xl text-white mt-[15px]">
              How It Works
            </a>
          </div>
        </div>
        <br></br>
        <div className="flex min-h-screen flex-col mt-[200px] ml-[175px] ">
          <span className="text-3xl text-red-500">Welcome to</span>
          <div className="ml-[-14px] mt-[0px]">
            <Image
              src="/logo-talenta.png"
              alt="school logo"
              width={400}
              height={400}
            />
          </div>
          <span className=" text-subheadingBlack mt-[30px] text-sxl">
            Are you a user? Access your account to explore & engage!
          </span>
          <div className="w-[500px]">
            <Link href="login-page">
              <button className="bg-red-400 rounded-3xl h-[40px] w-[145px] mt-[0px] items-center text-white">
                Login
              </button>
            </Link>
            <Link href="hiw-page">
              <button className="bg-white rounded-3xl h-[40px] w-[145px] mt-[10px] ml-[25px] outline outline-2 outline-offset-0 text-gray-400">How It Works
              </button>
            </Link>
          </div>
          <div className="w-[750px] mt-[100px]">
            <span className="text-xl text-gray-800 font-bold">
              Are you an institution?
            </span>
            <br></br>
            <span className="text-subheadingBlack">
              Revolutionize your educational experience and unlock the full
              potential of your students with our platform!
              <br></br>
              Explore <a href="partnership-page" className="font-bold underline">partnership</a> opportunities or{" "}
              <a href="hiw-page" className="font-bold underline"> contact us for more information</a>
            </span>
          </div>
          <div className="flex flex-col items-end mt-[-150px]">
            <Image
              src="/homepageBGPhoto.png"
              alt="school logo"
              width={1200}
              height={1000}
            />
          </div>
          <div className="mt-10">
            <Link href="dashboard-teachers">
              <button className="bg-red-400 rounded-3xl h-[40px] w-[200px] mt-[100px] mr-[10px] items-center text-white">
                dashboard teachers
              </button>
            </Link>
            <Link href="dashboard-student">
              <button className="bg-red-400 rounded-3xl h-[40px] w-[200px] mt-[0px] items-center text-white">
                dashboard students
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main >
  );
}