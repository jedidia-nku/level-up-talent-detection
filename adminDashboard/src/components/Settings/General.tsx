const GeneralSettings = () => {
    return (
        <div className="flex justify-center  items-center border rounded-md border-[#0000001A]">
        <div className=" w-[558px] bg-white p-6">
            <div className="max-w-3xl mx-auto">
                <h5 className="text-base font-semibold font-inter text-[#1E1E1E] mb-5">System Preferences</h5>

                <div className="bg-[#FAFAFB] rounded-md shadow-sm p-6 space-y-6 border border-[#0000001A]">
                    
                    <div className="space-y-2">
                        <label htmlFor="platformName" className="block text-base font-normal text-[#1E1E1E] font-[DMSans]">
                            Platform Name
                        </label>
                        <input
                            type="text"
                            id="platformName"
                            name="platformName"
                            placeholder="Level-up Talent Detection"
                            className="w-full px-3 py-3.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none text-sm font-normal text-[#1E1E1E80] font-[DMSans]"
                            readOnly
                        />
                    </div>

                  
                    <div className="space-y-2">
                        <label htmlFor="emailAddress" className="block text-base font-normal text-[#1E1E1E] font-[DMSans]">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="emailAddress"
                            name="emailAddress"
                            placeholder="level@gmail.com"
                            className="w-full px-3 py-3.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none text-sm font-normal text-[#1E1E1E80] font-[DMSans]"
                            readOnly
                        />
                    </div>

                 
                    <div className="space-y-2">
                        <label htmlFor="defaultCurrency" className="block text-base font-normal text-[#1E1E1E] font-[DMSans]">
                            Default Currency
                        </label>
                        <input
                            type="text"
                            id="defaultCurrency"
                            name="defaultCurrency"
                            placeholder="Rwandan Francs(Rwf)"
                            className="w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm focus:outline-none text-sm font-normal text-[#1E1E1E80] font-[DMSans] read-only"
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default GeneralSettings