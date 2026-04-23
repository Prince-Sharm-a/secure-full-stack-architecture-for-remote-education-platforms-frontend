"use client";

import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "teacher" | "student";
  status: "active" | "suspended";
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      role: "student",
      status: "active",
    },
    {
      id: 2,
      name: "Anjali Verma",
      email: "anjali@example.com",
      role: "teacher",
      status: "suspended",
    },
  ]);

  const toggleStatus = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              status: u.status === "active" ? "suspended" : "active",
            }
          : u
      )
    );
  };

  const changeRole = (id: number, role: User["role"]) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role } : u))
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      {/* Create Button */}
      <div className="mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          + Add User
        </button>
      </div>

      {/* Table */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b">
                <td className="py-3">{u.name}</td>
                <td>{u.email}</td>

                {/* Role Dropdown */}
                <td>
                  <select
                    value={u.role}
                    onChange={(e) =>
                      changeRole(
                        u.id,
                        e.target.value as User["role"]
                      )
                    }
                    className="border p-1 rounded"
                  >
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                  </select>
                </td>

                {/* Status */}
                <td
                  className={
                    u.status === "active"
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {u.status}
                </td>

                {/* Actions */}
                <td className="space-x-2">
                  <button
                    onClick={() => toggleStatus(u.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    {u.status === "active"
                      ? "Suspend"
                      : "Activate"}
                  </button>

                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}