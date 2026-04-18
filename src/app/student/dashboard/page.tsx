export default function StudentDashboard() {
  return (
    <div className="flex h-screen ">

      {/* Main */}
      <section className="flex-1 p-6 overflow-y-auto">
        
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Prince Sharma</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {["Courses", "Assignments", "Attendance", "GPA"].map((item, i) => (
            <div key={i} className="p-4 rounded-xl shadow dark:shadow-gray-700">
              <h3 className="text-gray-500">{item}</h3>
              <p className="text-xl font-bold mt-2">
                {i === 0 && "5"}
                {i === 1 && "2 Pending"}
                {i === 2 && "85%"}
                {i === 3 && "8.2"}
              </p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="p-5 rounded-xl shadow mb-6 dark:shadow-gray-700">
          <h2 className="text-lg font-bold mb-4">My Courses</h2>
          <div className="space-y-4">
            {["Web Development", "Database Systems", "AI Basics"].map((course, i) => (
              <div key={i}>
                <p className="font-medium">{course}</p>
                <div className="w-full bg-gray-200 h-2 rounded mt-1">
                  <div className="bg-blue-500 h-2 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assignments */}
        <div className="p-5 rounded-xl shadow dark:shadow-gray-700">
          <h2 className="text-lg font-bold mb-4">Recent Assignments</h2>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>React Project</span>
              <span className="text-red-500">Pending</span>
            </li>
            <li className="flex justify-between">
              <span>DBMS Report</span>
              <span className="text-green-500">Submitted</span>
            </li>
          </ul>
        </div>

      </section>
    </div>
  );
}