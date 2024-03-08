import React from 'react';

const ClassDetails: React.FC = () => {
  return (
    <div className="m-[60px] mt-[20px] h-[200px] bg-white rounded-3xl p-5 shadow-lg">
            <div className="flex justify-center font-bold">
              <span>Class Details</span>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="mr-4">Teacher:</span>
              <input
                className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                placeholder=" "
              />
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="mr-4">Administrator:</span>
              <input
                className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                placeholder=" "
              />
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="mr-4">Class Size:</span>
              <input
                className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                placeholder=" "
              />
            </div>
          </div>
  );
};

export default ClassDetails;