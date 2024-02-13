import Header from "@/Components/logo";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <div className="ml-[1291px] mt-[0px]"><Image src="/topRightBGLogin.png" alt="school logo" width={400} height={400} />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mt-[-160px]">
          <div className="ml-[110px]">
            <span className="text-5xl font-bold text-headingBlack">Login
            </span>
            <br></br>
            <span className="text-2xl font-semibold text-subheadingBlack">
              Sign in to continue
            </span>
          </div>
          <div>
            <div className="flex h-[50px] w-[400px] bg-white shadow-lg rounded-2xl ml-[100px] mt-[20px]">
              <div className="ml-[5px] mt-[17px]"><Image src="/Mail.png" alt="school logo" width={28} height={10} /></div>
              <span className="ml-[5px] mt-[8px] font-bold text-xxxs text-headingBlack">EMAIL</span>
            </div>
            <div className="flex h-[50px] w-[400px] mt-[15px] bg-white shadow-lg rounded-2xl ml-[100px]">
              <div className="ml-[9px] mt-[15px]"><Image src="/Lock.png" alt="school logo" width={22} height={5} /></div>
              <span className="ml-[8px] mt-[8px] font-bold text-xxxs text-headingBlack">PASSWORD</span>
              <div className="ml-[260px] mt-[15px]"><Image src="/Eye.png" alt="school logo" width={32} height={10} /></div>
            </div>
            <div className="flex h-[35px] w-[110px] mt-[25px] bg-red-400 shadow-lg rounded-3xl ml-[390px]" >
              <button className="ml-[33.5px] mt-[2px] font-bold text-sm text-white"><center>LOGIN</center></button>
            </div>
          </div>
          <div className="w-[650px] text-1xl text-headingBlack mt-[40px]">
            <center>Only registered students and educators from partnered schools can access their accounts.</center>

            <center>If you're unsure, find out <u className="font-bold">how it works</u>.</center>
          </div>
          <div className="ml-[245px] mt-[20px] w-[175px] h-[175px]">
            <Header /> { }
          </div>
        </div>
      </div>
    </main>
  );
}