import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="bg-foreground flex flex-col items-center w-[125px] h-dvh shadow-xl">
      <button className="flex flex-col items-center mt-8">
        <Image src="/account.png" alt="account logo" width={70} height={70} />
        <span className="text-s font-medium">[Name]</span>
      </button>
      <button className="flex flex-col items-center mt-[25px]">
        <Image src="/home.png" alt="home logo" width={40} height={40} />
        <span className="text-s font-medium">Dashboard</span>
      </button>
    </div>
  );
};

export default Sidebar;
