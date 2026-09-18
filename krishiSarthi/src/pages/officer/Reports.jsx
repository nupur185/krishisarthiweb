import {
  BarChart3,
  Download,
  TrendingUp,
  Users,
  Package,
  IndianRupee,
  Clock3,
  CalendarDays,
} from "lucide-react"

const dailyData = [
  { day: "Mon", bookings: 42, processed: 35 },
  { day: "Tue", bookings: 51, processed: 44 },
  { day: "Wed", bookings: 48, processed: 41 },
  { day: "Thu", bookings: 62, processed: 53 },
  { day: "Fri", bookings: 57, processed: 49 },
  { day: "Sat", bookings: 68, processed: 58 },
  { day: "Sun", bookings: 45, processed: 39 },
]

const cropData = [
  { crop: "Paddy", quantity: "186 Qtl", percentage: 62 },
  { crop: "Wheat", quantity: "72 Qtl", percentage: 24 },
  { crop: "Maize", quantity: "42 Qtl", percentage: 14 },
]

export default function Reports() {
  const maxBookings = Math.max(
    ...dailyData.map((item) => item.bookings)
  )

  return (
    <div className="min-h-screen bg-[#f7f4ea] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-[#123c2a] text-white flex-col fixed inset-y-0 left-0">
        <div className="px-6 py-7 border-b border-white/10">
          <h1 className="text-2xl font-bold">KrishiSarthi</h1>
          <p className="text-sm text-white/60 mt-1">
            Procurement Portal
          </p>
        </div>

        <nav className="p-4 space-y-2">
          <a
            href="/officer/procurement"
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10"
          >
            Dashboard
          </a>

          <a
            href="/officer/procurement/queue"
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10"
          >
            Queue Management
          </a>

          <a
            href="/officer/procurement/bookings"
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10"
          >
            Bookings
          </a>

          <a
            href="/officer/procurement/farmers"
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10"
          >
            Farmers
          </a>

          <a
            href="/officer/procurement/centres"
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10"
          >
            Centres
          </a>

          <a
            href="/officer/procurement/reports"
            className="block px-4 py-3 rounded-xl bg-white/15 text-white font-medium"
          >
            Reports
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-64">
        <header className="bg-white border-b border-[#d5ddd3] px-5 md:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#183328]">
                Procurement Reports
              </h2>
              <p className="text-sm text-[#6b776f] mt-1">
                Analyse centre performance and procurement activity
              </p>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#d5ddd3] bg-white text-[#355341] text-sm font-medium">
                <CalendarDays size={17} />
                This Week
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#174d35] text-white text-sm font-medium">
                <Download size={17} />
                Export Report
              </button>
            </div>
          </div>
        </header>

        <div className="p-5 md:p-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <ReportCard
              icon={<Users size={21} />}
              title="Total Farmers"
              value="1,248"
              change="+12.4%"
            />

            <ReportCard
              icon={<Package size={21} />}
              title="Procured Quantity"
              value="300 Qtl"
              change="+8.7%"
            />

            <ReportCard
              icon={<IndianRupee size={21} />}
              title="Procurement Value"
              value="₹7.8 L"
              change="+11.2%"
            />

            <ReportCard
              icon={<Clock3 size={21} />}
              title="Average Wait"
              value="21 min"
              change="-16.8%"
            />
          </div>

          <div className="grid xl:grid-cols-3 gap-6">
            {/* Weekly Activity */}
            <section className="xl:col-span-2 bg-white rounded-2xl border border-[#d5ddd3] p-6">
              <div className="flex items-center justify-between mb-7">
                <div>
                  <h3 className="font-semibold text-[#183328]">
                    Weekly Procurement Activity
                  </h3>
                  <p className="text-sm text-[#6b776f] mt-1">
                    Bookings compared with completed procurement
                  </p>
                </div>

                <BarChart3 className="text-[#174d35]" size={22} />
              </div>

              <div className="h-64 flex items-end justify-between gap-3">
                {dailyData.map((item) => {
                  const height =
                    (item.bookings / maxBookings) * 100

                  const processedHeight =
                    (item.processed / maxBookings) * 100

                  return (
                    <div
                      key={item.day}
                      className="flex-1 h-full flex items-end justify-center gap-1"
                    >
                      <div className="h-full flex items-end">
                        <div
                          className="w-4 md:w-7 bg-[#174d35] rounded-t-md"
                          style={{ height: `${height}%` }}
                          title={`Bookings: ${item.bookings}`}
                        />
                      </div>

                      <div className="h-full flex items-end">
                        <div
                          className="w-4 md:w-7 bg-[#b76537] rounded-t-md"
                          style={{
                            height: `${processedHeight}%`,
                          }}
                          title={`Processed: ${item.processed}`}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-between mt-3 text-xs text-[#6b776f]">
                {dailyData.map((item) => (
                  <span key={item.day}>{item.day}</span>
                ))}
              </div>

              <div className="flex gap-5 mt-6 text-xs text-[#6b776f]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#174d35]" />
                  Bookings
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#b76537]" />
                  Processed
                </div>
              </div>
            </section>

            {/* Crop Distribution */}
            <section className="bg-white rounded-2xl border border-[#d5ddd3] p-6">
              <h3 className="font-semibold text-[#183328]">
                Crop Distribution
              </h3>

              <p className="text-sm text-[#6b776f] mt-1">
                Procurement quantity by crop
              </p>

              <div className="mt-7 space-y-6">
                {cropData.map((item) => (
                  <div key={item.crop}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-[#183328]">
                        {item.crop}
                      </span>

                      <span className="text-[#6b776f]">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="h-2 bg-[#e7ece5] rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-[#174d35] rounded-full"
                        style={{
                          width: `${item.percentage}%`,
                        }}
                      />
                    </div>

                    <p className="text-xs text-[#6b776f] mt-1">
                      {item.percentage}% of total
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Centre Performance */}
          <section className="bg-white rounded-2xl border border-[#d5ddd3] mt-6 overflow-hidden">
            <div className="p-6 border-b border-[#e4e9e3]">
              <div className="flex items-center gap-3">
                <TrendingUp
                  size={21}
                  className="text-[#174d35]"
                />

                <div>
                  <h3 className="font-semibold text-[#183328]">
                    Centre Performance
                  </h3>

                  <p className="text-sm text-[#6b776f] mt-1">
                    Weekly performance summary
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#eff8ed] text-[#526158]">
                  <tr>
                    <th className="text-left px-6 py-4">
                      Centre
                    </th>
                    <th className="text-left px-6 py-4">
                      Bookings
                    </th>
                    <th className="text-left px-6 py-4">
                      Processed
                    </th>
                    <th className="text-left px-6 py-4">
                      Quantity
                    </th>
                    <th className="text-left px-6 py-4">
                      Avg. Wait
                    </th>
                    <th className="text-left px-6 py-4">
                      Completion
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <PerformanceRow
                    centre="Green Valley"
                    bookings="48"
                    processed="42"
                    quantity="112 Qtl"
                    wait="18 min"
                    completion="87%"
                  />

                  <PerformanceRow
                    centre="Sadar Centre"
                    bookings="72"
                    processed="58"
                    quantity="126 Qtl"
                    wait="32 min"
                    completion="81%"
                  />

                  <PerformanceRow
                    centre="Kanti Centre"
                    bookings="39"
                    processed="35"
                    quantity="62 Qtl"
                    wait="14 min"
                    completion="90%"
                  />
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function ReportCard({ icon, title, value, change }) {
  return (
    <div className="bg-white rounded-2xl border border-[#d5ddd3] p-5">
      <div className="w-10 h-10 rounded-xl bg-[#eff8ed] text-[#174d35] flex items-center justify-center">
        {icon}
      </div>

      <p className="text-sm text-[#6b776f] mt-4">
        {title}
      </p>

      <div className="flex items-end justify-between gap-2 mt-1">
        <p className="text-2xl font-bold text-[#183328]">
          {value}
        </p>

        <span className="text-xs font-medium text-[#3e8a4c]">
          {change}
        </span>
      </div>
    </div>
  )
}

function PerformanceRow({
  centre,
  bookings,
  processed,
  quantity,
  wait,
  completion,
}) {
  return (
    <tr className="border-t border-[#e8ece7]">
      <td className="px-6 py-4 font-medium text-[#183328]">
        {centre}
      </td>

      <td className="px-6 py-4">{bookings}</td>
      <td className="px-6 py-4">{processed}</td>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">{wait}</td>

      <td className="px-6 py-4">
        <span className="px-3 py-1.5 rounded-full bg-[#ddefd9] text-[#27633d] text-xs font-medium">
          {completion}
        </span>
      </td>
    </tr>
  )
}