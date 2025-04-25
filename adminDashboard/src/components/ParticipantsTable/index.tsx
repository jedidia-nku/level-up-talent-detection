import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuCloudDownload } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";
// import { FaArrowDownLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const data = Array.from({ length: 14 }, (_, index) => ({
  ParticipantId: `123456789${index + 1}`,
  fullName: "James Adeleke",
  email: "JA@gmail.com",
  telephone: "25078000766",
  registrationDate: "12/04/2024",
  yearsOfExperience: "3",
  location: "Kigali",
  gender: "Male",
  levelOfEducation: "Secondary",
  musicGenre: "Rap",
  amount: '2500Rwf',
  method: "Momo Pay",
  status: Math.random() > 0.5 ? "Success" : "Success",
}));

const ParticipantsTable: React.FC = () => {

  return (
    <div className="bg-white px-4 py-2 rounded-2xl w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">Al Payment Made</p>
        <button className="flex items-center border border-[#000] px-4 py-2 rounded-lg shadow-sm">
          <LuCloudDownload className="mr-2" /> Export
        </button>
      </div>
      
      {/* Filters and Search */}
      <div className="flex flex-col-reverse gap-12 md:flex-row justify-between items-center mb-4">
        <p className="text-gray-800 text-lg font-semibold">Registered Participants</p>
        <div className="flex space-x-4 justify-between md:justify-end w-full md:w-[40%]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border px-4 py-2 md:py-2 rounded-lg focus:outline-none pl-10 w-48 md:w-full"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="border border-[#979797] px-3 py-1 md:px-4 md:py-2 flex gap-2 items-center rounded-lg shadow-sm">
          <IoFilterSharp className="text-lg"/> Filters
          </button>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto scrollbar-extra-thin">
      <table className="min-w-full border border-gray-300 bg-white">
        <thead className="bg-gray-900 text-white hidden sm:table-header-group">
          <tr className="bg-gray-800 text-white text-sm whitespace-nowrap">
            <th className="p-3">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            {[
              "Participant ID",
              "Full Name",
              "Email",
              "Telephone",
              "Registration Date",
              "Years of Experience",
              "Location",
              "Gender",
              "Level of Education",
              "Music Genre",
              "P. Amount",
              "P. Method",
              "P. Status",
            ].map((header) => (
              <th key={header} className="p-2 text-start">
                <span className="inline-flex items-center gap-2 font-normal">{header}</span>
              </th>
            ))}
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 transition duration-200"
            >
              <td className="p-3 hidden sm:table-cell">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-3 text-sm hidden sm:table-cell">{row.ParticipantId}</td>
              <td className="p-3 text-sm hidden sm:table-cell whitespace-nowrap">{row.fullName}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{row.email}</td>
              <td className="p-3 text-sm hidden sm:table-cell whitespace-nowrap">{row.telephone}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{row.registrationDate}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{row.yearsOfExperience}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{row.location}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{row.gender}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{row.levelOfEducation}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{row.musicGenre}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{row.amount}</td>
              <td className="p-3 text-sm hidden sm:table-cell whitespace-nowrap">{row.method}</td>
              <td className="p-3 text-sm hidden sm:table-cell">
                <span className={`px-3 py-1 rounded-full flex gap-1 items-center ${row.status === "Success" ? "text-green-600 bg-green-200" : "bg-[#FFE8E8] text-[#DA1E28]"}`}><GoDotFill />{row.status}</span>
              </td>
              <td className="p-3 cursor-pointer hidden sm:table-cell">⋮</td>
              
                {/* Mobile View - Stacked Layout */}
              <td className="px-4 py-4 sm:hidden">
                  <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                              <p className="text-sm font-medium">{row.fullName}</p>
                          </div>
                          <div className="text-xs px-2 py-1 rounded-full font-medium text-gray-600">
                          {row.email}
                          </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Participant ID:</span>
                          <span className="font-semibold">{row.ParticipantId}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Telephone:</span>
                          <span className="font-semibold">{row.telephone}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Registration Date:</span>
                          <span className="font-semibold">{row.registrationDate}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Years of Experience:</span>
                          <span className="font-semibold">{row.yearsOfExperience}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Location:</span>
                          <span className="font-semibold">{row.location}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Gender:</span>
                          <span className="font-semibold">{row.gender}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Level of Education:</span>
                          <span className="font-semibold">{row.levelOfEducation}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Music Genre:</span>
                          <span className="font-semibold">{row.musicGenre}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Amount:</span>
                          <span className="font-semibold">{row.amount}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Method:</span>
                          <span className="font-semibold">{row.method}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Status:</span>
                          <span className={`px-3 py-1 rounded-full flex gap-1 items-center ${row.status === "Success" ? "text-green-600 bg-green-200" : "bg-[#FFE8E8] text-[#DA1E28]"}`}><GoDotFill />{row.status}</span>
                      </div>
                  </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
      
      {/* Pagination */}
      <div className="hidden sm:table-cell flex justify-between items-center mt-4">
        <span>1 - 14 of 40 Pages</span>
        <div className="space-x-2">
          <button className="bg-gray-200 px-4 py-2 rounded-lg">Previous</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsTable;
