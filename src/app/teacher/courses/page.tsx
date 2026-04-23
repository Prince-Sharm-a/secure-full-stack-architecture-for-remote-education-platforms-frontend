
type Class = {
  id: number;
  name: string;
  subject: string;
  students: number;
  schedule: string;
};

export default function TeacherCourses() {
  const classes: Class[] = [
    {
      id: 1,
      name: "BCA 3rd Year",
      subject: "Web Development",
      students: 40,
      schedule: "Mon - Wed (10:00 AM)",
    },
    {
      id: 2,
      name: "BCA 2nd Year",
      subject: "Database Systems",
      students: 35,
      schedule: "Tue - Thu (12:00 PM)",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Courses</h1>

      <div className="grid grid-cols-2 gap-6">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="dark:shadow-gray-700 p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Class Name */}
            <h2 className="text-lg font-semibold">{cls.name}</h2>

            {/* Subject */}
            <p className="text-gray-500 mb-2">{cls.subject}</p>

            {/* Students */}
            <p className="text-sm mb-1">
              👨‍🎓 Students: {cls.students}
            </p>

            {/* Schedule */}
            <p className="text-sm text-gray-500 mb-4">
              📅 {cls.schedule}
            </p>

            {/* Actions */}
            <div className="flex gap-2 flex-wrap">
              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                View Students
              </button>

              <button className="bg-green-500 text-white px-3 py-1 rounded">
                Add Assignment
              </button>

              <button className="bg-purple-500 text-white px-3 py-1 rounded">
                Mark Attendance
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}