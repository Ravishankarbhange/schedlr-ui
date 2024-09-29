import React, { useEffect } from 'react';
import axios from 'axios';

const MyProfile = () => {

    const buildLinkedInUrl = () => {
        const linkedInAuthUrl = 'https://www.linkedin.com/oauth/v2/authorization';
        const params = {
            response_type: 'code',
            client_id: '862ar2q201lf2i', 
            redirect_uri: 'http://localhost:3000/',
            state: 'DCEeFWf45A53sdfKef424', 
            scope: 'openid w_member_social', 
        };
        const queryParams = new URLSearchParams(params).toString();
        return `${linkedInAuthUrl}?${queryParams}`;
    };
    const handleLinkedInLogin = () => {
        window.location.href = buildLinkedInUrl(); 
    };

    const buildLinkedInAuthUrl = () => {
        const linkedInAuthUrl = 'https://www.linkedin.com/oauth/v2/authorization';
        const params = {
            response_type: 'code',
            client_id: '862ar2q201lf2i', 
            redirect_uri: 'http://localhost:3000/', 
            state: 'DCEeFWf45A53sdfKef424', 
            scope: 'openid profile email'
        };
        const queryParams = new URLSearchParams(params).toString();
        return `${linkedInAuthUrl}?${queryParams}`;
    };

    const handleLinkedAuthInLogin = () => {
        const authUrl = buildLinkedInAuthUrl();
        window.location.href = authUrl; // Redirect to the LinkedIn authorization URL
    };

    

    const sendCodeToBackend = async (code, state) => {
        try {
            console.log("Calling SPRING BOOT API");
            const response = await axios.post('http://localhost:8081/linkedin/authCode', {
                code,
                state
            });
            console.log('Response from backend:', response.data);
        } catch (error) {
            console.error('Error sending code to backend:', error);
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');

        if (code && state) {
            sendCodeToBackend(code, state);
        }
    }, []); 


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
                        <button className="border border-black bg-[#0C63BC] text-white p-1 col-span-3" onClick={handleLinkedInLogin}>Linkedin</button>
                        <button className="border border-black bg-[#0C63BC] text-white p-1 col-span-3" onClick={handleLinkedAuthInLogin}>Linkedin Auth</button>
                        <button className="border border-black bg-[#1da1f2] text-white p-1 col-span-3 ">Twitter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
