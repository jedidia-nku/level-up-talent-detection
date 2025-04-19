import React, {useState} from "react";
import ParticipantsTable from "../../components/ParticipantsTable";

const Participants: React.FC = () => {
      //remember to add the function to change state (setActiveTab)
      const [activeTab] = useState("payment");

    return (
        <>
        <div className="flex justify-between flex-col pt-3 px-3">
                  {/* Tab Navigation */}
            <div className="flex items-center justify-between gap-4">
                <div className="font-semibold text-2xl w-full md:w-1/2">Participants overview</div>
            </div>
        <div className=" overflow-x-auto mt-6">
        {activeTab === "payment" && <ParticipantsTable />}
      </div>
                </div>
        </>
    );
};

export default Participants;