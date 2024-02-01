import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (    
    <div className="relative bg-blue">
      <button>
        <Image
          src="/account.png"
          alt="account logo"
          width={90}
          height={90}
        />
        <div>
          <h5>Name</h5>
        </div>
      </button>
      
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 text-base font-normal text-blue-gray-700">
        <div className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <button>
            <Image
              src="/home.png"
              alt="account logo"
              width={50}
              height={50}
            />
            <div className="grid place-items-center m-4">
              <h5>Dashboard</h5>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;