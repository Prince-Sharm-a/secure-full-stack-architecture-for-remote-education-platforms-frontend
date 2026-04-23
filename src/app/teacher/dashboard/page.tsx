
export default function TeacherDashboard() {
  return (
    <div className="flex h-screen">

      {/* Main */}
      <section className="flex-1 p-6 overflow-y-auto">
        
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Mr. Sharma</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { title: "Classes", value: "4" },
            { title: "Students", value: "120" },
            { title: "Submissions", value: "15 Pending" },
            { title: "Lectures Today", value: "3" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl dark:shadow-gray-700 shadow">
              <h3 className="text-gray-500">{item.title}</h3>
              <p className="text-xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="p-5 rounded-xl dark:shadow-gray-700 shadow mb-6">
          <h2 className="text-lg font-bold mb-4">Today's Schedule</h2>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Web Development - 10:00 AM</span>
              <span>Room 201</span>
            </li>
            <li className="flex justify-between">
              <span>Database Systems - 12:00 PM</span>
              <span>Room 305</span>
            </li>
          </ul>
        </div>

        {/* Assignment Submissions */}
        <div className="p-5 rounded-xl dark:shadow-gray-700 shadow mb-6">
          <h2 className="text-lg font-bold mb-4">Recent Submissions</h2>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>React Project - Rahul</span>
              <span className="text-yellow-500">Pending</span>
            </li>
            <li className="flex justify-between">
              <span>DBMS Report - Anjali</span>
              <span className="text-green-500">Reviewed</span>
            </li>
          </ul>
        </div>

        {/* Classes */}
        <div className="p-5 rounded-xl dark:shadow-gray-700 shadow">
          <h2 className="text-lg font-bold mb-4">My Classes</h2>
          <div className="space-y-4">
            {[
              { name: "Web Development", students: 40 },
              { name: "Database Systems", students: 35 },
            ].map((cls, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{cls.name}</p>
                  <p className="text-sm text-gray-500">
                    {cls.students} students
                  </p>
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}