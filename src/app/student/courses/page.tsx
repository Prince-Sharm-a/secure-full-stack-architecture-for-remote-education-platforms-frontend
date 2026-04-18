
type Course = {
  id: number;
  title: string;
  instructor: string;
  progress: number;
};

export default function CoursesPage() {
  const courses: Course[] = [
    {
      id: 1,
      title: "Web Development",
      instructor: "Mr. Sharma",
      progress: 70,
    },
    {
      id: 2,
      title: "Database Systems",
      instructor: "Ms. Gupta",
      progress: 45,
    },
    {
      id: 3,
      title: "Operating Systems",
      instructor: "Dr. Verma",
      progress: 90,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>

      <div className="grid grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className=" dark:shadow-gray-700 p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold">{course.title}</h2>

            {/* Instructor */}
            <p className="text-sm text-gray-500 mb-3">
              Instructor: {course.instructor}
            </p>

            {/* Progress */}
            <div className="mb-3">
              <p className="text-sm mb-1">
                Progress: {course.progress}%
              </p>
              <div className="w-full bg-gray-300 h-2 rounded">
                <div
                  className={`h-2 rounded ${
                    course.progress > 75
                      ? "bg-green-500"
                      : course.progress > 40
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Status */}
            <p
              className={`text-sm mb-4 ${
                course.progress === 100
                  ? "text-green-600"
                  : "text-blue-500"
              }`}
            >
              {course.progress === 100 ? "Completed" : "Ongoing"}
            </p>

            {/* Button */}
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}