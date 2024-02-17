const Teacher_Notes_Data = () => {
  return (
    <div className="w-full flex justify-center">
      {" "}
      {/* Ensure outer div centers the content */}
      <div className="max-w-4xl w-full h-auto bg-white rounded-2xl px-6 py-4 shadow-xl mb-5 overflow-hidden">
        {" "}
        {/* Set a max-width */}
        <span className="text-lg font-semibold text-headingBlack">
          Notes Title
        </span>
        <div className="flex justify-between items-center">
          <div className="overflow-hidden">
            <span className="text-l font-semibold text-subheadingBlack">
              Upload Date :
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              _ / _ / __ |
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Teacher:
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              Teacher&apos;s Name |
            </span>
            <span className="text-l font-semibold text-subheadingBlack">
              Student:
            </span>
            <span className="text-l font-medium text-subheadingBlack">
              Student&apos;s Name |
            </span>
          </div>
          <button>
            <div className="w-[85px] h-[30px] bg-headingRed flex items-center justify-center rounded-3xl">
              <span className="text-white font-semibold">Open</span>
            </div>
          </button>
        </div>
        <div className="mt-3 text-l text-captionBlack overflow-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default Teacher_Notes_Data;
