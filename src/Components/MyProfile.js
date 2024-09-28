const MyProfile = () => {
  return (
    <div id="myprofile" className="flex justify-center bg-[#ECF0F1] py-5">
        <div id="center container bg-[#d5e6eb]">
            <div className="border w-[600px] border-black py-10 px-5 rounded-lg bg-[#ECF0F1] shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                    <label className="text-left pl-5">UserName</label>
                    <input type="text" value={"Ravishankar"} className="rounded-sm col-span-2 pl-1" disabled/>
                    <label className="text-left pl-5">Email</label>
                    <input type="text" value={"ravishankar.bhange@gmail.com"} className="rounded-sm col-span-2 pl-1" disabled />
                </div>
            </div>

            <div className="border w-[600px] border-black py-8 px-5 my-5 rounded-lg bg-[#ECF0F1] shadow-2xl">
            <h1 className="text-center mb-10 font-rajdhani text-2xl font-medium">Reset your Password</h1>
                <div className="grid grid-cols-3 gap-4">
                    <label className="text-left pl-5">Current Password</label>
                    <input type="password" className="rounded-sm col-span-2 pl-1" />
                    <label className="text-left pl-5">New Password</label>
                    <input type="password" className="rounded-sm col-span-2 pl-1"/>
                    <label className="text-left pl-5">Confirm Password</label>
                    <input type="password" className="rounded-sm col-span-2 pl-1"/>
                    <div className="col-span-1"></div>
                    <input type="button" value="Change Password" className="bg-[#5c81a6] rounded-sm text-white p-1"/>
                </div>
            </div>

            <div className="border w-[600px] border-black py-14 px-5 my-5 rounded-lg shadow-2xl bg-[#ECF0F1]">
                <h1 className="text-center mb-10 font-rajdhani text-2xl font-medium">Checkin your Social Media Accounts</h1>
                <div className="grid grid-cols-3 gap-4 px-10">
                    <button className="border border-black bg-[#4267B2] text-white p-1 col-span-3">Facebook</button>
                    <button className="border border-black bg-[#d62976] text-white p-1 col-span-3">Instagram</button>
                    <button className="border border-black bg-[#0C63BC] text-white p-1 col-span-3">Linkedin</button>
                    <button className="border border-black bg-[#1da1f2] text-white p-1 col-span-3 ">Twitter</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MyProfile;
