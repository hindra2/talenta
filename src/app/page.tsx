import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div className="flex min-h-screen flex-col mt-[150px] ml-[175px] ">
          <span className="text-3xl text-red-500">
            Welcome to
          </span>
          <div className="ml-[-14px] mt-[0px]">
            <Image src="/logo-talenta.png" alt="school logo" width={400} height={400} />
          </div>
          <span className=" text-subheadingBlack mt-[30px] text-sxl">
            Are you a user? Access your account to explore & engage!
          </span>
          <div className="w-[500px]">
            <Link href="login-page">
              <button className="bg-red-400 rounded-3xl h-[40px] w-[145px] mt-[0px] items-center text-white">Login</button>
            </Link>
            <button className="bg-white rounded-3xl h-[40px] w-[145px] mt-[10px] ml-[25px] outline-4"><center className="text-gray-400">How It Works?</center>
            </button>
          </div>
          <div className="w-[750px] mt-[100px]">
            <span className="text-xl text-gray-800 font-bold">
              Are you an institution?
            </span>
            <br></br>
            <span className="text-subheadingBlack">
              Revolutionize your educational experience and unlock the full potential of your students with our platform!
              <br></br>
              Explore <u className="font-bold">partnership</u> opportunities or <u className="font-bold">contact us for more information</u>
            </span>
          </div>
          <Link href="dashboard-teachers">
              <button className="bg-red-400 rounded-3xl h-[40px] w-[145px] mt-[0px] items-center text-white">dashboard teachers</button>
          </Link>
          <Link href="dashboard-student">
              <button className="bg-red-400 rounded-3xl h-[40px] w-[145px] mt-[0px] items-center text-white">dashboard students</button>
          </Link>
        </div>
      </div>
    </main>
  )
}