
type Result = {
  subject: string;
  marks: number;
};

export default function ResultsPage() {
  const results: Result[] = [
    { subject: "Web Development", marks: 85 },
    { subject: "Database Systems", marks: 72 },
    { subject: "Operating Systems", marks: 60 },
    { subject: "Computer Networks", marks: 40 },
  ];

  // Grade Logic
  const getGrade = (marks: number) => {
    if (marks >= 85) return "A";
    if (marks >= 70) return "B";
    if (marks >= 50) return "C";
    return "F";
  };

  // GPA Calculation (simple)
  const getPoint = (marks: number) => {
    if (marks >= 85) return 4;
    if (marks >= 70) return 3;
    if (marks >= 50) return 2;
    return 0;
  };

  const gpa =
    results.reduce((sum, r) => sum + getPoint(r.marks), 0) /
    results.length;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Results</h1>

      {/* GPA Card */}
      <div className=" dark:shadow-gray-700 p-5 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Overall GPA</h2>
        <p className="text-3xl font-bold text-blue-600">
          {gpa.toFixed(2)}
        </p>
      </div>

      {/* Table */}
      <div className=" dark:shadow-gray-700 p-5 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Subject Results</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Subject</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {results.map((r, i) => {
              const grade = getGrade(r.marks);
              const pass = r.marks >= 50;

              return (
                <tr key={i} className="border-b">
                  <td className="py-3">{r.subject}</td>
                  <td>{r.marks}</td>
                  <td className="font-semibold">{grade}</td>
                  <td
                    className={
                      pass ? "text-green-600" : "text-red-500"
                    }
                  >
                    {pass ? "Pass" : "Fail"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}