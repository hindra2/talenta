import Image from "next/image";
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
                        <button className="bg-red-400 rounded-3xl h-[40px] w-[145px] mt-[0px]"><center className="text-white">Login</center></button>
                        <button className="bg-white rounded-3xl h-[40px] w-[145px] mt-[10px] ml-[25px] outline"><center className="text-gray-400">How It Works?</center>
                        </button>
                    </div>
                    <div className="mt-[70px]">
                        <span className="text-xl text-extra-bold">
                            Are you an institution?
                        </span>
                        <span>

                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}