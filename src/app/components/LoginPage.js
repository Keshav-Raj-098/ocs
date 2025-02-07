"use client";
import React, { useState } from 'react';
import axios from 'axios';

// const URL = import.meta.env.VITE_BACKEND_URL;

const LoginPage = ({ setPage, setUserData }) => {
    const [userId, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [throwError, setThrowError] = useState(false);
    const [errorMsg, setErrormsg] = useState("");

    const handleSignIn = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`/api/users`, {
                action: "fetch",  // Pass action to identify the request
                userid: userId,
                raw_password: password,
            });

            if (res.status === 200) {
                setUserData(res.data?.users);
                setPage("data");
                setThrowError(false);
            } else {
                setThrowError(true);
                setErrormsg(res?.data.message);
            }
        } catch (error) {
            setThrowError(true);
            setErrormsg(error.response?.data?.message || "An error occurred during the request.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="p-6 flex flex-col items-center gap-[10px] bg-[#f2f2f2] rounded-lg min-w-[300px] w-full max-w-[500px]">
            <div className="flex flex-col gap-[5px] w-full">
                <span className="text-[18px] font-extrabold">Username</span>
                <input
                    type="text"
                    placeholder="Enter Userid"
                    className="px-2 py-[5px] w-full border border-gray-400 rounded outline-none bg-white"
                    onChange={(e) => setUserid(e.target.value)}
                    required
                    autoFocus
                />
            </div>

            <div className="flex flex-col gap-[5px] w-full">
                <span className="text-[18px] font-extrabold">Password</span>
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="px-2 py-[5px] w-full border border-gray-400 rounded bg-white"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            {throwError && <span className="text-red-500 text-sm mt-2">{errorMsg}</span>}

            <button
                className="px-[14px] py-[8px] mt-4 text-white bg-[#45a049] hover:cursor-pointer text-[16px] rounded-lg w-full max-w-[250px]"
                onClick={handleSignIn}
                disabled={loading}
            >
                {loading ? 'Signing In...' : 'Sign In'}
            </button>
        </div>

    );
};

export default LoginPage;
