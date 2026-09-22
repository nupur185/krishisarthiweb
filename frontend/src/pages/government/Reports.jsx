import { useState } from "react"
import {
  Download,
  Calendar,
  FileText,
  TrendingUp,
  Users,
  IndianRupee,
  Package,
  BarChart3,
} from "lucide-react"

const monthlyData = [
  { month: "Apr", value: 42 },
  { month: "May", value: 55 },
  { month: "Jun", value: 61 },
  { month: "Jul", value: 72 },
  { month: "Aug", value: 78 },
  { month: "Sep", value: 84 },
]

const districtData = [
  {
    district: "Muzaffarpur",
    farmers: "2,84,120",
    procurement: "18,420 MT",
    payments: "₹4,320 Cr",
    achievement: "91%",
  },
  {
    district: "Patna",
    farmers: "2,61,450",
    procurement: "16,850 MT",
    payments: "₹3,980 Cr",
    achievement: "87%",
  },
  {
    district: "Vaishali",
    farmers: "2,12,840",
    procurement: "14,920 MT",
    payments: "₹3,410 Cr",
    achievement: "84%",
  },
  {
    district: "Samastipur",
    farmers: "1,98,620",
    procurement: "13,740 MT",
    payments: "₹3,120 Cr",
    achievement: "81%",
  },
  {
    district: "Sitamarhi",
    farmers: "1,74,280",
    procurement: "11,960 MT",
    payments: "₹2,840 Cr",
    achievement: "76%",
  },
]

function Reports() {
  const [period, setPeriod] = useState("This Year")
  const [reportType, setReportType] = useState("Procurement Report")
  const [generated, setGenerated] = useState(false)

  const generateReport = () => {
    setGenerated(true)

    setTimeout(() => {
      setGenerated(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#183328]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 bg-[#123c2a] text-white lg:flex lg:flex-col">
        <div className="border-b border-white/10 px-6 py-6">
          <div className="text-2xl font-bold">KrishiSarthi</div>
          <p className="mt-1 text-sm text-white/60">Government Portal</p>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6">
          <a
            href="/government/dashboard"
            className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
          >
            Dashboard
          </a>

          <a
            href="/government/procurement"
            className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
          >
            Procurement
          </a>

          <a
            href="/government/farmers"
            className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
          >
            Farmers
          </a>

          <a
            href="/government/payments"
            className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
          >
            Payments
          </a>

          <a
            href="/government/analytics"
            className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
          >
            Analytics
          </a>

          <a
            href="/government/alerts"
            className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
          >
            Alerts
          </a>

          <a
            href="/government/reports"
            className="block rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white"
          >
            Reports
          </a>
        </nav>

        <div className="border-t border-white/10 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ddefd9] font-semibold text-[#174d35]">
              GO
            </div>

            <div>
              <p className="text-sm font-medium">Government Officer</p>
              <p className="text-xs text-white/50">Bihar State</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:ml-64">
        {/* Header */}
        <header className="border-b border-[#d5ddd3] bg-[#f7f4ea] px-5 py-5 md:px-8">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">
              Government Reports
            </h1>

            <p className="mt-1 text-sm text-[#6b776f]">
              Generate and review procurement performance reports
            </p>
          </div>
        </header>

        <div className="space-y-6 p-5 md:p-8">
          {/* Report Generator */}
          <section className="rounded-2xl border border-[#d5ddd3] bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ddefd9] text-[#174d35]">
                <FileText size={21} />
              </div>

              <div>
                <h2 className="font-semibold">Generate Report</h2>
                <p className="text-sm text-[#6b776f]">
                  Select the report type and reporting period
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Report Type
                </label>

                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] px-4 py-3 text-sm outline-none focus:border-[#174d35]"
                >
                  <option>Procurement Report</option>
                  <option>Farmer Registration Report</option>
                  <option>Payment Report</option>
                  <option>Centre Performance Report</option>
                  <option>District Summary Report</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Reporting Period
                </label>

                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] px-4 py-3 text-sm outline-none focus:border-[#174d35]"
                >
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>This Quarter</option>
                  <option>This Year</option>
                  <option>Custom Period</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={generateReport}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#174d35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123c2a]"
                >
                  <Download size={18} />
                  {generated ? "Report Generated" : "Generate Report"}
                </button>
              </div>
            </div>
          </section>

          {/* KPIs */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ddefd9] text-[#174d35]">
                  <Package size={20} />
                </div>
                <TrendingUp size={18} className="text-[#5eaf68]" />
              </div>

              <p className="mt-4 text-sm text-[#6b776f]">
                Total Procurement
              </p>

              <p className="mt-1 text-2xl font-bold">1.60 Cr MT</p>

              <p className="mt-1 text-xs text-[#5eaf68]">
                +8.4% from previous period
              </p>
            </div>

            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eff8ed] text-[#174d35]">
                <Users size={20} />
              </div>

              <p className="mt-4 text-sm text-[#6b776f]">
                Registered Farmers
              </p>

              <p className="mt-1 text-2xl font-bold">24,44,812</p>

              <p className="mt-1 text-xs text-[#5eaf68]">
                96.8% verified
              </p>
            </div>

            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eff8ed] text-[#174d35]">
                <IndianRupee size={20} />
              </div>

              <p className="mt-4 text-sm text-[#6b776f]">MSP Paid</p>

              <p className="mt-1 text-2xl font-bold">₹37,537.82 Cr</p>

              <p className="mt-1 text-xs text-[#5eaf68]">
                99.99% processed
              </p>
            </div>

            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eff8ed] text-[#174d35]">
                <BarChart3 size={20} />
              </div>

              <p className="mt-4 text-sm text-[#6b776f]">
                Target Achievement
              </p>

              <p className="mt-1 text-2xl font-bold">84.2%</p>

              <p className="mt-1 text-xs text-[#5eaf68]">
                Current procurement cycle
              </p>
            </div>
          </section>

          {/* Procurement Trend */}
          <section className="rounded-2xl border border-[#d5ddd3] bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-semibold">Procurement Trend</h2>
                <p className="text-sm text-[#6b776f]">
                  Monthly procurement performance
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-[#eff8ed] px-3 py-2 text-xs text-[#174d35]">
                <Calendar size={14} />
                {period}
              </div>
            </div>

            <div className="flex h-64 items-end gap-4 border-b border-[#d5ddd3] px-2 pb-0">
              {monthlyData.map((item) => (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <span className="text-xs font-medium text-[#174d35]">
                    {item.value}%
                  </span>

                  <div
                    className="w-full max-w-16 rounded-t-lg bg-[#174d35] transition hover:bg-[#b76537]"
                    style={{ height: `${item.value * 2.1}px` }}
                  />

                  <span className="pb-2 text-xs text-[#6b776f]">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* District Report */}
          <section className="rounded-2xl border border-[#d5ddd3] bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-[#d5ddd3] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-semibold">District Performance</h2>
                <p className="text-sm text-[#6b776f]">
                  Summary of major district-level indicators
                </p>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-[#d5ddd3] px-4 py-2.5 text-sm font-medium text-[#174d35] hover:bg-[#eff8ed]">
                <Download size={16} />
                Export CSV
              </button>
            </div>

            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#f7f4ea] text-xs uppercase text-[#6b776f]">
                  <tr>
                    <th className="px-6 py-4 font-medium">District</th>
                    <th className="px-6 py-4 font-medium">Farmers</th>
                    <th className="px-6 py-4 font-medium">Procurement</th>
                    <th className="px-6 py-4 font-medium">Payments</th>
                    <th className="px-6 py-4 font-medium">Achievement</th>
                  </tr>
                </thead>

                <tbody>
                  {districtData.map((item) => (
                    <tr
                      key={item.district}
                      className="border-t border-[#edf0eb]"
                    >
                      <td className="px-6 py-4 font-medium">
                        {item.district}
                      </td>

                      <td className="px-6 py-4 text-[#6b776f]">
                        {item.farmers}
                      </td>

                      <td className="px-6 py-4 font-medium">
                        {item.procurement}
                      </td>

                      <td className="px-6 py-4">{item.payments}</td>

                      <td className="px-6 py-4">
                        <span className="rounded-full bg-[#eff8ed] px-3 py-1 text-xs font-semibold text-[#3f8d4c]">
                          {item.achievement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="space-y-3 p-4 md:hidden">
              {districtData.map((item) => (
                <div
                  key={item.district}
                  className="rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{item.district}</h3>

                    <span className="rounded-full bg-[#eff8ed] px-2.5 py-1 text-xs font-semibold text-[#3f8d4c]">
                      {item.achievement}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-[#6b776f]">Farmers</p>
                      <p className="mt-1 font-medium">{item.farmers}</p>
                    </div>

                    <div>
                      <p className="text-xs text-[#6b776f]">Procurement</p>
                      <p className="mt-1 font-medium">{item.procurement}</p>
                    </div>

                    <div>
                      <p className="text-xs text-[#6b776f]">Payments</p>
                      <p className="mt-1 font-medium">{item.payments}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Reports */}
          <section className="rounded-2xl border border-[#d5ddd3] bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="font-semibold">Recently Generated Reports</h2>
              <p className="text-sm text-[#6b776f]">
                Reports generated by the government portal
              </p>
            </div>

            <div className="space-y-3">
              {[
                ["State Procurement Summary", "18 Sep 2026", "PDF"],
                ["District Performance Report", "17 Sep 2026", "CSV"],
                ["MSP Payment Report", "15 Sep 2026", "PDF"],
              ].map(([name, date, type]) => (
                <div
                  key={name}
                  className="flex flex-col gap-3 rounded-xl border border-[#d5ddd3] p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eff8ed] text-[#174d35]">
                      <FileText size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">{name}</p>
                      <p className="mt-1 text-xs text-[#6b776f]">
                        Generated on {date}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center justify-center gap-2 rounded-lg border border-[#d5ddd3] px-3 py-2 text-xs font-medium text-[#174d35] hover:bg-[#eff8ed]">
                    <Download size={14} />
                    Download {type}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Reports