import React, {useState} from "react";
import ProfileSettings from "../../components/Settings/ProfileSettings";
import GeneralSettings from "../../components/Settings/General";

const Settings: React.FC = () => {
      const [activeTab, setActiveTab] = useState("profileSettings");

    return (
        <div className="flex flex-col bg-[#FAFAFB] px-4 sm:px-6">
            <div className="flex justify-between items-center text-sm sm:text-base">
                <div className="flex flex-col gap-2">
                        <span className="font-inter font-medium text-2xl text-[#1E1E1E]">
                            Platform Settings
                        </span>
                        <span className="font-inter font-normal text-sm text-[#1E1E1EBF]">
                        Configure Platform Preferences, Payout Rules, and Security Settings.
                        </span>
                </div>
            </div>

                  {/* Tab Navigation */}
            <div className="flex items-center pt-5 border-b border-gray-300">
                {[
                { id: "profileSettings", label: "Profile Settings" },
                { id: "generalSettings", label: "General Settings" },
                ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative font-inter px-3 pb-1 text-sm sm:text-base transition-all ${
                    activeTab === tab.id
                        ? "font-semibold text-[#1E1E1E] text-base"
                        : "font-normal text-[#1E1E1E] text-base"
                    }`}
                >
                    {tab.label}
                    <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-10/12 transition-all ${
                        activeTab === tab.id ? "bg-[#1E1E1E] h-[3px]" : ""
                    }`}
                    />
                </button>
                ))}
            </div>

        <div className="overflow-x-auto">
        {activeTab === "profileSettings" && <ProfileSettings />}
        {activeTab === "generalSettings" && <GeneralSettings />}
      </div>
        </div>
    );
};

export default Settings;