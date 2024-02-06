import Header from "@/Components/logo";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          <div className="flex w-[60%] h-[50px] w-[400px] bg-white shadow-lg rounded-2xl ml-[110px]">
            <span className="ml-[35px]">EMAIL</span>
          </div>
          <div className="flex w-[60%] h-[50px] w-[400px] mt-[20px] bg-white shadow-lg rounded-2xl ml-[110px]">
            <span className="ml-[35px]">PASSWORD</span>
          </div>
          <div className="flex w-[60%] h-[30px] w-[120px] mt-[30px] bg-white shadow-lg rounded-3xl ml-[390px]">
            <span className="ml-[35px] mt-[2px]"><center>LOGIN</center></span>
          </div>
        </div>
        <div className="w-[650px] text-1xl text-headingBlack">
          <center>Only registered students and educators from partnered schools can access their accounts.</center>

          <center>If you're unsure, find out <u>how it works</u>.</center>
        </div>
        <div className="ml-[175px] w-[250px] h-[250px]">
          <Header /> { }
        </div>
      </div>


    </main>
  );
}

