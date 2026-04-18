
type Attendance = {
  subject: string;
  attended: number;
  total: number;
};

export default function AttendancePage() {
  const data: Attendance[] = [
    { subject: "Web Development", attended: 18, total: 20 },
    { subject: "Database Systems", attended: 15, total: 20 },
    { subject: "Operating Systems", attended: 10, total: 20 },
  ];

  const getPercentage = (a: number, t: number) =>
    Math.round((a / t) * 100);

  const overall =
    Math.round(
      (data.reduce((sum, d) => sum + d.attended, 0) /
        data.reduce((sum, d) => sum + d.total, 0)) *
        100
    ) || 0;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Attendance</h1>

      {/* Overall */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Overall Attendance</h2>
        <p className="text-3xl font-bold text-blue-600">{overall}%</p>
      </div>

      {/* Table */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Subject-wise</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Subject</th>
              <th>Attended</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Progress</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => {
              const percent = getPercentage(item.attended, item.total);

              return (
                <tr key={i} className="border-b">
                  <td className="py-3">{item.subject}</td>
                  <td>{item.attended}</td>
                  <td>{item.total}</td>
                  <td
                    className={
                      percent >= 75
                        ? "text-green-600"
                        : "text-red-500"
                    }
                  >
                    {percent}%
                  </td>
                  <td>
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className={`h-2 rounded ${
                          percent >= 75
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
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