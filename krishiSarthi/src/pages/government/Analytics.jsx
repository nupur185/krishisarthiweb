import { useState } from "react"
import {
  ArrowLeft,
  TrendingUp,
  BarChart3,
  Activity,
  Users,
  Package,
  Clock3,
  MapPin,
  Download,
  ChevronDown,
} from "lucide-react"
import { Link } from "react-router"

const monthlyProcurement = [
  { month: "Apr", value: 42 },
  { month: "May", value: 51 },
  { month: "Jun", value: 63 },
  { month: "Jul", value: 70 },
  { month: "Aug", value: 82 },
  { month: "Sep", value: 91 },
]

const cropData = [
  { crop: "Paddy", quantity: "1,60,69,291 MT", percentage: 82 },
  { crop: "Wheat", quantity: "18,42,650 MT", percentage: 10 },
  { crop: "Maize", quantity: "9,24,180 MT", percentage: 5 },
  { crop: "Other", quantity: "4,12,780 MT", percentage: 3 },
]

const districtData = [
  {
    district: "Muzaffarpur",
    procurement: "12,842 MT",
    farmers: "18,420",
    wait: "24 min",
    utilization: 86,
  },
  {
    district: "Vaishali",
    procurement: "10,624 MT",
    farmers: "15,280",
    wait: "19 min",
    utilization: 72,
  },
  {
    district: "Samastipur",
    procurement: "9,842 MT",
    farmers: "13,940",
    wait: "27 min",
    utilization: 81,
  },
  {
    district: "Darbhanga",
    procurement: "8,416 MT",
    farmers: "11,620",
    wait: "21 min",
    utilization: 68,
  },
]

export default function Analytics() {
  const [period, setPeriod] = useState("Last 6 Months")

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#183328]">
      {/* Header */}
      <header className="border-b border-[#d5ddd3] bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <Link
              to="/government/dashboard"
              className="rounded-xl border border-[#d5ddd3] p-2.5 hover:bg-[#eff8ed]"
            >
              <ArrowLeft size={19} />
            </Link>

            <div>
              <h1 className="text-xl font-bold text-[#174d35]">
                Analytics & Reports
              </h1>
              <p className="mt-1 text-xs text-[#6b776f]">
                Government intelligence dashboard
              </p>
            </div>
          </div>

          <button className="hidden items-center gap-2 rounded-xl bg-[#174d35] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#123c2a] sm:flex">
            <Download size={17} />
            Download Report
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] p-5 md:p-8">
        {/* Title */}
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-sm text-[#6b776f]">
              <BarChart3 size={16} />
              State Analytics
            </div>

            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Procurement Analytics
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-[#6b776f]">
              Analyze procurement trends, farmer participation, centre
              utilization and operational performance.
            </p>
          </div>

          <div className="relative">
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#d5ddd3] bg-white px-4 py-2.5 pr-10 text-sm font-medium outline-none md:w-44"
            >
              <option>Last 6 Months</option>
              <option>Last 30 Days</option>
              <option>Last 12 Months</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-3"
            />
          </div>
        </div>

        {/* KPI */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Procurement Growth"
            value="+18.6%"
            subtitle="Compared with previous period"
            icon={TrendingUp}
          />

          <MetricCard
            title="Farmer Participation"
            value="96.9%"
            subtitle="Registered farmers transacting"
            icon={Users}
          />

          <MetricCard
            title="Avg. Waiting Time"
            value="23 min"
            subtitle="Across active centres"
            icon={Clock3}
          />

          <MetricCard
            title="Centre Utilization"
            value="78.4%"
            subtitle="Average capacity utilization"
            icon={Activity}
          />
        </div>

        {/* Procurement Trend */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold">Procurement Trend</h3>
              <p className="mt-1 text-sm text-[#6b776f]">
                Percentage of seasonal target achieved
              </p>
            </div>

            <div className="rounded-xl bg-[#eff8ed] p-3 text-[#174d35]">
              <TrendingUp size={20} />
            </div>
          </div>

          <div className="mt-8 flex h-72 items-end gap-4 border-b border-[#d5ddd3] px-2">
            {monthlyProcurement.map((item) => (
              <div
                key={item.month}
                className="group flex h-full flex-1 flex-col justify-end"
              >
                <div className="relative flex h-full items-end">
                  <div
                    className="w-full rounded-t-xl bg-[#174d35] transition hover:bg-[#b76537]"
                    style={{ height: `${item.value}%` }}
                  >
                    <span className="absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded bg-[#183328] px-2 py-1 text-[10px] text-white group-hover:block">
                      {item.value}%
                    </span>
                  </div>
                </div>

                <span className="mt-3 text-center text-xs text-[#6b776f]">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Crop + Operational Insights */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Crop Distribution */}
          <section className="rounded-2xl border border-[#d5ddd3] bg-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Crop-wise Procurement</h3>
                <p className="mt-1 text-sm text-[#6b776f]">
                  Procurement distribution by crop
                </p>
              </div>

              <Package size={20} className="text-[#174d35]" />
            </div>

            <div className="mt-7 space-y-5">
              {cropData.map((item) => (
                <div key={item.crop}>
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">{item.crop}</p>
                      <p className="mt-1 text-xs text-[#6b776f]">
                        {item.quantity}
                      </p>
                    </div>

                    <span className="text-sm font-bold">
                      {item.percentage}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#e7ebe5]">
                    <div
                      className="h-3 rounded-full bg-[#174d35]"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Operational Insights */}
          <section className="rounded-2xl border border-[#d5ddd3] bg-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Operational Insights</h3>
                <p className="mt-1 text-sm text-[#6b776f]">
                  Current system performance
                </p>
              </div>

              <Activity size={20} className="text-[#174d35]" />
            </div>

            <div className="mt-6 space-y-4">
              <InsightRow
                title="Average processing time"
                value="18 min"
                note="Per farmer"
              />

              <InsightRow
                title="Average queue length"
                value="14"
                note="Farmers per centre"
              />

              <InsightRow
                title="Slot utilization"
                value="84.2%"
                note="Available slots booked"
              />

              <InsightRow
                title="No-show rate"
                value="4.8%"
                note="Of confirmed bookings"
              />

              <InsightRow
                title="Successful notifications"
                value="98.6%"
                note="SMS + app delivery"
              />
            </div>
          </section>
        </div>

        {/* District Performance */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-6">
          <div className="mb-5">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#174d35]" />
              <h3 className="font-bold">District Performance</h3>
            </div>

            <p className="mt-1 text-sm text-[#6b776f]">
              Comparison of procurement and operational indicators
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#d5ddd3] text-xs uppercase tracking-wide text-[#6b776f]">
                  <th className="px-4 py-3">District</th>
                  <th className="px-4 py-3">Procurement</th>
                  <th className="px-4 py-3">Farmers</th>
                  <th className="px-4 py-3">Avg. Wait</th>
                  <th className="px-4 py-3">Utilization</th>
                </tr>
              </thead>

              <tbody>
                {districtData.map((item) => (
                  <tr
                    key={item.district}
                    className="border-b border-[#eef1ed] last:border-0"
                  >
                    <td className="px-4 py-4 text-sm font-semibold">
                      {item.district}
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold">
                      {item.procurement}
                    </td>

                    <td className="px-4 py-4 text-sm">
                      {item.farmers}
                    </td>

                    <td className="px-4 py-4 text-sm">{item.wait}</td>

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-24 rounded-full bg-[#e7ebe5]">
                          <div
                            className="h-2 rounded-full bg-[#174d35]"
                            style={{
                              width: `${item.utilization}%`,
                            }}
                          />
                        </div>

                        <span className="text-xs font-semibold">
                          {item.utilization}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="space-y-3 md:hidden">
            {districtData.map((item) => (
              <div
                key={item.district}
                className="rounded-xl border border-[#d5ddd3] p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{item.district}</p>

                  <span className="rounded-full bg-[#eff8ed] px-2.5 py-1 text-xs font-semibold text-[#43844c]">
                    {item.utilization}% utilized
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Info label="Procurement" value={item.procurement} />
                  <Info label="Farmers" value={item.farmers} />
                  <Info label="Avg. Wait" value={item.wait} />
                  <Info
                    label="Utilization"
                    value={`${item.utilization}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function MetricCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[#6b776f]">{title}</p>
          <h3 className="mt-2 text-2xl font-bold">{value}</h3>
          <p className="mt-2 text-xs text-[#6b776f]">{subtitle}</p>
        </div>

        <div className="rounded-xl bg-[#eff8ed] p-3 text-[#174d35]">
          <Icon size={21} />
        </div>
      </div>
    </div>
  )
}

function InsightRow({ title, value, note }) {
  return (
    <div className="flex items-center justify-between border-b border-[#eef1ed] pb-4 last:border-0">
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-[#6b776f]">{note}</p>
      </div>

      <span className="text-lg font-bold text-[#174d35]">{value}</span>
    </div>
  )
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-[#6b776f]">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  )
}