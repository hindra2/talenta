import Image from "next/image";

const Administrator = () => {
    return (
      <div>
        <div className="flex items-center h-[75px] w-[335px] bg-white shadow-md rounded-xl px-2 mb-[20px]">
        <Image
            src="/administratorPlaceholder.png"
            alt="Electronic"
            width={50}
            height={50}
        />
        <div className="ml-2">
            <p className="font-semibold text-xs text-subheadingBlack leading-none mt-[5px]">
            Homeroom Teacher
            </p>
            <p className="font-bold text-lg text-headerBlack leading-none mb-1 text-veryDarkBlue">
            [Teacher&apos;s Name]
            </p>
            <p className="font-bold text-xs text-subheadingBlack leading-none mb-1 text-veryDarkBlue">
            [School Name]
            </p>
        </div>
        </div>
      </div>
    );
  };
  
  export default Administrator;