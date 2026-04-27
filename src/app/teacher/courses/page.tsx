import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    {
      id: 3,
      name: "BCA 2nd Year",
      subject: "Database Systems",
      students: 35,
      schedule: "Tue - Thu (12:00 PM)",
    },
    {
      id: 4,
      name: "BCA 2nd Year",
      subject: "Database Systems",
      students: 35,
      schedule: "Tue - Thu (12:00 PM)",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Courses</h1>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
        <Link href={`/teacher/courses/new`}>
        <div
          className="dark:shadow-gray-700 cursor-pointer p-5 rounded-xl flex justify-center items-center shadow hover:shadow-lg transition"
        >
          <h2 className="text-[15vw] text-mist-400 dark:text-gray-600 font-extralight">+</h2>
        </div>
        </Link>
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="dark:shadow-gray-700 p-5 rounded-xl shadow hover:shadow-lg transition"
          >
          <Link href={`/teacher/courses/${cls.id}`}>
            {/* Class Name */}
            <h2 className="text-lg font-semibold">{cls.name}</h2>

            {/* Subject */}
            <p className="text-gray-500 mb-2">{cls.subject}</p>

            {/* Students */}
            <p className="text-sm mb-1">
              👨‍🎓 Students: {cls.students}
            </p>

            {/* Actions */}
            <div className="flex gap-2 flex-wrap">
              <Button className="bg-blue-500 text-white px-3 py-1 rounded">
                View Students
              </Button>

              <Button className="bg-green-500 text-white px-3 py-1 rounded">
                Add Assignment
              </Button>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}