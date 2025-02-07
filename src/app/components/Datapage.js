"use client";
import React from "react";

const DataPage = ({ data, setPage, setUserData }) => {
  return (
    <div className="p-4 overflow-x-auto">
      <table className="border-collapse border border-gray-400 w-full min-w-max">
        <thead>
          <tr className="bg-white text-xl">
            <th className="border border-gray-400 px-4 py-2">User ID</th>
            <th className="border border-gray-400 px-4 py-2">Password Hash</th>
            <th className="border border-gray-400 px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {data && data?.length !== 0 && data.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-[#f2f2f2]" : "bg-white"}`}>
              <td className="border border-gray-400 px-4 py-2 break-words">{item.userid}</td>
              <td className="border border-gray-400 px-4 py-2 break-words">{item.password_hash}</td>
              <td className="border border-gray-400 px-4 py-2 break-words">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row justify-start my-[15px]">
        <button
          className="px-[18px] py-[10px] text-white bg-[#45a049] hover:cursor-pointer text-[18px] rounded-lg"
          onClick={() => {
            setPage('login');
            setUserData([]);
          }}
        >
          Fetch again
        </button>
      </div>
    </div>

  );
};

export default DataPage;
