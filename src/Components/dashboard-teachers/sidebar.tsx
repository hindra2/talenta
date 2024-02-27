import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="bg-foreground flex flex-col items-center w-[125px] h-dvh shadow-2xl">
      <Link href="/dashboard-teachers">
        <button className="flex flex-col items-center mt-8">
          <Image src="/account.png" alt="account logo" width={70} height={70} />
          <span className="text-s font-medium">[Name]</span>
        </button>
      </Link>
      <div className="w-full bg-headingRed mt-[20px] h-[80px] flex justify-center items-center">
        <Link href="">
          <button className="flex flex-col items-center justify-center">
            <Image src="/home.png" alt="home logo" width={40} height={40} />
            <span className="text-s font-medium text-white">Dashboard</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
