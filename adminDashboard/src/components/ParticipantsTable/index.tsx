import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuCloudDownload } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";
// import { FaArparticipantDownLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
// import axios from "axios";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Participant {
  _id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  telephone: string;
  registrationDate: string;
  careerExperience: string;
  age: string;
  province: string;
  district: string;
  sector: string;
  gender: string;
  educationLevel: string;
  musicGenre: string;
  amount: string;
  method: string;
  status: string;
}

const ParticipantsTable: React.FC = () => {
const [loading, setLoading] = useState(true);
const [participants, setParticipants] = useState<Participant[]>([]);
const [page, setPage] = useState(1);
// const [limit, setLimit] = useState(14);
const [totalPages, setTotalPages] = useState(1);
const [searchQuery, setSearchQuery] = useState("");


// const totalPages = Math.ceil(total / limit);
const limit = 14

const fetchParticipants = async () => {
  try {
    const res = await fetch(`https://level-up-talent-detection.onrender.com/api/participants?search=${encodeURIComponent(searchQuery)}&page=${page}&limit=${limit}`);
    const data = await res.json();
    setParticipants(data.participants);
    setTotalPages(data.totalPages);
    setLoading(false);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchParticipants();
}, [page, limit]);

const handleSearch = () => {
  setPage(1); // Reset to first page when new search
  fetchParticipants();
};

const handleNext = () => {
  if (page < totalPages) {
    setPage(page + 1);
  }
};

const handlePrev = () => {
  if (page > 1) {
    setPage(page - 1);
  }
};

  if (loading) {
    return <div>Loading participants...</div>;
  }


  //Export pdf file codes
  const exportPDF = () => {
    const doc = new jsPDF();

    const tableColumn = [
      "Full Name",
      "Email",
      "Telephone",
      "Registration Date",
      "Age",
      "Province",
      "Gender",
      "Music Genre",
    ];

    const tableRows: any[] =[];

    participants.forEach((participant) => {
      const fullName = `${participant.firstName} ${participant.middleName || ""} ${participant.lastName}`;
    const formattedDate = new Date(participant.registrationDate).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const participantData = [
      fullName,
      participant.email,
      participant.telephone,
      formattedDate,
      participant.age,
      participant.province,
      participant.gender,
      participant.musicGenre,

    ];
    tableRows.push(participantData);
  });

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
    styles: {
      overflow: 'linebreak',
      cellWidth: 'wrap',
      fontSize: 8,
      cellPadding: 2, // merged here
    },
    headStyles: {
      fillColor: [22, 160, 133],
      textColor: 255,
      halign: 'center',
    },
    bodyStyles: {
      halign: 'center',
    },
    theme: 'grid',
    tableWidth: 'wrap',
  });  

  doc.text('Participants List', 14, 15);
  doc.save('participants.pdf');
      
  };
  
  return (
    <div className="bg-white px-4 py-2 rounded-2xl w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">Al Payment Made</p>
        <button className="flex items-center border border-[#000] px-4 py-2 rounded-lg shadow-sm"
        onClick={exportPDF}
        >
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400"/>
          </div>
          <button 
          className="border border-[#979797] px-3 py-1 md:px-4 md:py-2 flex gap-2 items-center rounded-lg shadow-sm"
          onClick={handleSearch}
          >
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
              "Age",
              "Province",
              "District",
              "Sector",
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
        {participants.map((participant) => {
          const fullName = `${participant.firstName} ${participant.middleName || ""} ${participant.lastName}`;
          const formattedDate = new Date(participant.registrationDate).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });
            return(
            <tr
              key={participant._id}
              className="border-b hover:bg-gray-100 transition duration-200"
            >
              <td className="p-3 hidden sm:table-cell">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-3 text-sm hidden sm:table-cell">{participant._id}</td>
              <td className="p-3 text-sm hidden sm:table-cell whitespace-nowrap">{fullName}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{participant.email}</td>
              <td className="p-3 text-sm hidden sm:table-cell whitespace-nowrap">{participant.telephone}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{formattedDate}</td>
              <td className="p-3 text-sm hidden sm:table-cell text-center">{participant.careerExperience}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{participant.age}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{participant.province}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{participant.district}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{participant.sector}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{participant.gender}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{participant.educationLevel}</td>
              <td className="p-3 text-sm hidden sm:table-cell">{participant.musicGenre}</td>
              <td className="p-3 text-sm hidden sm:table-cell">2500Rwf</td>
              <td className="p-3 text-sm hidden sm:table-cell whitespace-nowrap">Momo Pay</td>
              <td className="p-3 text-sm hidden sm:table-cell">
                <span className="px-3 py-1 rounded-full flex gap-1 items-center text-green-600 bg-green-200"><GoDotFill />Success</span>
              </td>
              <td className="p-3 cursor-pointer hidden sm:table-cell">⋮</td>
              
                {/* Mobile View - Stacked Layout */}
              <td className="px-4 py-4 sm:hidden">
                  <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                              <p className="text-sm font-medium">{fullName}</p>
                          </div>
                          <div className="text-xs px-2 py-1 rounded-full font-medium text-gray-600">
                          {participant.email}
                          </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Participant ID:</span>
                          <span className="font-semibold">{participant._id}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Telephone:</span>
                          <span className="font-semibold">{participant.telephone}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Registration Date:</span>
                          <span className="font-semibold">{formattedDate}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Years of Experience:</span>
                          <span className="font-semibold">{participant.careerExperience}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Age:</span>
                          <span className="font-semibold">{participant.age}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Province:</span>
                          <span className="font-semibold">{participant.province}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>District:</span>
                          <span className="font-semibold">{participant.district}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Sector:</span>
                          <span className="font-semibold">{participant.sector}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Gender:</span>
                          <span className="font-semibold">{participant.gender}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Level of Education:</span>
                          <span className="font-semibold">{participant.educationLevel}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Music Genre:</span>
                          <span className="font-semibold">{participant.musicGenre}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Amount:</span>
                          <span className="font-semibold">2500Rwf</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Method:</span>
                          <span className="font-semibold whitespace-nowrap">Momo Pay</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                          <span>Status:</span>
                          <span className="px-3 py-1 rounded-full flex gap-1 items-center text-green-600 bg-green-200"><GoDotFill />Success</span>
                      </div>
                  </div>
              </td>
            </tr>)
      })}
        </tbody>
      </table>
    </div>
      
      
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 hidden md:flex">
        <span>
          {totalPages > 0
            ? `${(page - 1) * limit + 1} - ${Math.min(page * limit, totalPages)} of ${totalPages} participants`
            : "No participants"}</span>

        <div className="space-x-2">

          <button className="bg-gray-200 px-4 py-2 rounded-lg"
          onClick={handlePrev}
          disabled={page === 1}> Previous</button>

          <button className="bg-gray-200 px-4 py-2 rounded-lg"
          onClick={handleNext}
          disabled={page === totalPages || totalPages === 0}
          >Next</button>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsTable;
