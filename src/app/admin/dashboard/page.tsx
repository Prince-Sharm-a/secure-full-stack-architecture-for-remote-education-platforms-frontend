export default function AdminDashboard() {
  return (
    <div className="flex h-screen">

      {/* Main */}
      <section className="flex-1 p-6 overflow-y-auto">
        
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Admin</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { title: "Total Students", value: "500" },
            { title: "Total Teachers", value: "45" },
            { title: "Classes", value: "20" },
            { title: "Active Users", value: "320" },
          ].map((item, i) => (
            <div key={i} className=" p-4 rounded-xl dark:shadow-gray-700 shadow">
              <h3 className="text-gray-500">{item.title}</h3>
              <p className="text-xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* User Management */}
        <div className=" p-5 rounded-xl dark:shadow-gray-700 shadow mb-6">
          <h2 className="text-lg font-bold mb-4">User Management</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Rahul", role: "Student", status: "Active" },
                { name: "Anjali", role: "Teacher", status: "Suspended" },
              ].map((user, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2">{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <span
                      className={
                        user.status === "Active"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
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

        {/* System Activity */}
        <div className=" p-5 rounded-xl dark:shadow-gray-700 shadow">
          <h2 className="text-lg font-bold mb-4">System Activity</h2>
          <ul className="space-y-3">
            <li>✔ New student registered</li>
            <li>✔ Assignment created</li>
            <li>✔ Teacher updated grades</li>
          </ul>
        </div>

      </section>
    </div>
  );
}