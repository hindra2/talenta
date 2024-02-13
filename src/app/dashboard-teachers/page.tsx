import Student_Card from "@/Components/student-card";
import Student_Update from "@/Components/student-updates";
import { Space_Mono } from "next/font/google";

export default function Home() {
  return (
    <main>
      {/* Main Header Section */}
      <div className="self-start text-left ml-[175px] mt-8">
        <span className="text-6xl font-semibold text-headingBlack">
          Grade 8A
        </span>
        <div className="flex items-end w-[4600px]">
          <div className="ml-3">
            <span className="border-b-2 border-subheadingBlack text-subheadingBlack">
              Decelis Junior High School
            </span>
            <span className="mx-1 text-subheadingBlack"> | </span>
            <span className="text-subheadingBlack">
              Grade 8A
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10">
        <div className="col-span-7">
          {/* Student grid */}
          <div className="ml-[175px] mt-[20px] h-dvh bg-gray-200 rounded-3xl p-5 shadow-lg">
            <div className="grid grid-cols-6 gap-4">
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
              <Student_Card /> { }
            </div>
          </div>
        </div>

        <div className="col-span-3">
          {/* Searchbox div */}
          <div className="m-[60px] mt-[20px] h-[200px] bg-white rounded-3xl p-5 shadow-lg">
            <div className="items-center">
              <span>Class Details</span>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="mr-4">Teacher:</span>
              <input className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline" placeholder=" " />
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="mr-4">Administrator:</span>
              <input className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline" placeholder=" " />
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="mr-4">Class Size:</span>
              <input className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline" placeholder=" " />
            </div>
          </div>

          {/* Update div */}
          <div className="m-[60px] mt-[20px] h-[500px] bg-gray-200 rounded-3xl p-5 shadow-lg">
            <Student_Update />  { }
          </div>
        </div>
      </div>
    </main>
  );
}
<div className="mt-[100px]">
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
      <span className="ml-[40px] mt-[5px] font-bold text-xxxs text-headingBlack">EMAIL</span>
    </div>
    <div className="flex h-[50px] w-[400px] mt-[15px] bg-white shadow-lg rounded-2xl ml-[100px]">
      <span className="ml-[40px] mt-[5px] font-bold text-xxxs text-headingBlack">PASSWORD</span>
    </div>
    <div className="flex h-[30px] w-[110px] mt-[25px] bg-red-400 shadow-lg rounded-3xl ml-[390px]" >
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



"flex min-h-screen flex-col items-center justify-between p-24" >