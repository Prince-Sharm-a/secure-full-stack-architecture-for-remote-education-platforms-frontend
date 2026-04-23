"use client";

import React, { useState } from "react";

export default function AdminSettingsPage() {
  const [systemName, setSystemName] = useState("ERP System");
  const [attendanceLimit, setAttendanceLimit] = useState(75);
  const [emailNotif, setEmailNotif] = useState(true);

  const handleSave = () => {
    console.log({
      systemName,
      attendanceLimit,
      emailNotif,
    });

    alert("Settings saved!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* General Settings */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">
          General Settings
        </h2>

        <div className="mb-4">
          <label className="block mb-1">System Name</label>
          <input
            type="text"
            value={systemName}
            onChange={(e) => setSystemName(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Academic Settings */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Academic Settings
        </h2>

        <div>
          <label className="block mb-1">
            Minimum Attendance %
          </label>
          <input
            type="number"
            value={attendanceLimit}
            onChange={(e) =>
              setAttendanceLimit(Number(e.target.value))
            }
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Notifications */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Notifications
        </h2>

        <div className="flex items-center justify-between">
          <span>Email Notifications</span>

          <button
            onClick={() => setEmailNotif(!emailNotif)}
            className={`px-4 py-1 rounded text-white ${
              emailNotif ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            {emailNotif ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      {/* Security */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Security
        </h2>

        <div className="space-y-3">
          <input
            type="password"
            placeholder="New Password"
            className="border p-2 rounded w-full"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-5 py-2 rounded"
      >
        Save Settings
      </button>
    </div>
  );
}