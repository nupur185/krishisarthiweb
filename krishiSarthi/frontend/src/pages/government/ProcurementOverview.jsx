import { useState } from "react"
import {
  ArrowLeft,
  Package,
  TrendingUp,
  Wheat,
  MapPin,
  Calendar,
  Download,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react"
import { Link } from "react-router"

const procurementData = [
  {
    district: "Muzaffarpur",
    centre: "Muzaffarpur Central Centre",
    crop: "Paddy",
    quantity: "1,842 MT",
    farmers: 284,
    target: "2,100 MT",
    progress: 88,
    status: "On Track",
  },
  {
    district: "Muzaffarpur",
    centre: "Sadar Procurement Centre",
    crop: "Paddy",
    quantity: "1,324 MT",
    farmers: 192,
    target: "1,800 MT",
    progress: 74,
    status: "On Track",
  },
  {
    district: "Muzaffarpur",
    centre: "Kanti Procurement Centre",
    crop: "Paddy",
    quantity: "986 MT",
    farmers: 156,
    target: "1,600 MT",
    progress: 62,
    status: "Moderate",
  },
  {
    district: "Muzaffarpur",
    centre: "Motipur Procurement Centre",
    crop: "Paddy",
    quantity: "1,576 MT",
    farmers: 241,
    target: "1,700 MT",
    progress: 93,
    status: "Near Target",
  },
]

const monthlyData = [
  { month: "Apr", value: 38 },
  { month: "May", value: 52 },
  { month: "Jun", value: 61 },
  { month: "Jul", value: 74 },
  { month: "Aug", value: 82 },
  { month: "Sep", value: 91 },
]

export default function ProcurementOverview() {
  const [district, setDistrict] = useState("All Districts")
  const [crop, setCrop] = useState("All Crops")
  const [search, setSearch] = useState("")

  const filteredData = procurementData.filter((item) => {
    const matchesDistrict =
      district === "All Districts" || item.district === district

    const matchesCrop = crop === "All Crops" || item.crop === crop

    const matchesSearch =
      item.centre.toLowerCase().includes(search.toLowerCase()) ||
      item.district.toLowerCase().includes(search.toLowerCase())

    return matchesDistrict && matchesCrop && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#183328]">
      {/* Header */}
      <header className="border-b border-[#d5ddd3] bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <Link
              to="/government/dashboard"
              className="rounded-xl border border-[#d5ddd3] p-2.5 transition hover:bg-[#eff8ed]"
            >
              <ArrowLeft size={19} />
            </Link>

            <div>
              <h1 className="text-xl font-bold text-[#174d35]">
                Procurement Overview
              </h1>
              <p className="mt-1 text-xs text-[#6b776f]">
                Government monitoring portal
              </p>
            </div>
          </div>

          <button className="hidden items-center gap-2 rounded-xl bg-[#174d35] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#123c2a] sm:flex">
            <Download size={17} />
            Export Report
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] p-5 md:p-8">
        {/* Title */}
        <div className="mb-7">
          <div className="flex items-center gap-2 text-sm text-[#6b776f]">
            <MapPin size={16} />
            Bihar State Procurement
          </div>

          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Procurement Performance
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-[#6b776f]">
            Monitor procurement volume, farmer participation and target
            achievement across procurement centres.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <KpiCard
            title="Total Procurement"
            value="1,60,69,291 MT"
            subtitle="Current season"
            icon={Package}
          />

          <KpiCard
            title="Procurement Target"
            value="1,92,00,000 MT"
            subtitle="83.7% achieved"
            icon={TrendingUp}
          />

          <KpiCard
            title="Farmers Transacted"
            value="23,69,113"
            subtitle="Registered: 24,44,812"
            icon={Wheat}
          />

          <KpiCard
            title="MSP Payable"
            value="₹37,537.85 Cr"
            subtitle="₹37,537.82 Cr paid"
            icon={Package}
          />
        </div>

        {/* Filters */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-5">
          <div className="mb-4 flex items-center gap-2">
            <Filter size={18} className="text-[#174d35]" />
            <h3 className="font-bold">Filters</h3>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <FilterSelect
              label="District"
              value={district}
              onChange={setDistrict}
              options={[
                "All Districts",
                "Muzaffarpur",
                "Vaishali",
                "Samastipur",
                "Darbhanga",
              ]}
            />

            <FilterSelect
              label="Crop"
              value={crop}
              onChange={setCrop}
              options={["All Crops", "Paddy", "Wheat", "Maize"]}
            />

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#6b776f]">
                Search Centre
              </label>

              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-3 top-3 text-[#8a948e]"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search procurement centre..."
                  className="w-full rounded-xl border border-[#d5ddd3] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#174d35]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chart + Target */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-[#d5ddd3] bg-white p-6 lg:col-span-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Procurement Progress</h3>
                <p className="mt-1 text-sm text-[#6b776f]">
                  Monthly achievement against procurement targets
                </p>
              </div>

              <div className="rounded-lg bg-[#eff8ed] p-2 text-[#174d35]">
                <TrendingUp size={18} />
              </div>
            </div>

            <div className="mt-8 flex h-64 items-end gap-5 border-b border-[#d5ddd3] px-2">
              {monthlyData.map((item) => (
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

          {/* Target Summary */}
          <section className="rounded-2xl border border-[#d5ddd3] bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#ddefd9] p-3 text-[#174d35]">
                <Package size={21} />
              </div>

              <div>
                <h3 className="font-bold">Target Achievement</h3>
                <p className="text-xs text-[#6b776f]">
                  Current procurement season
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[18px] border-[#ddefd9]">
                <div className="absolute inset-[-18px] rounded-full border-[18px] border-transparent border-l-[#174d35] border-t-[#174d35] border-r-[#174d35]" />

                <div className="text-center">
                  <p className="text-3xl font-bold">83.7%</p>
                  <p className="mt-1 text-xs text-[#6b776f]">Achieved</p>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#6b776f]">Target</span>
                <span className="font-semibold">1.92 Cr MT</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#6b776f]">Procured</span>
                <span className="font-semibold">1.60 Cr MT</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#6b776f]">Remaining</span>
                <span className="font-semibold">31.30 L MT</span>
              </div>
            </div>
          </section>
        </div>

        {/* Centre Table */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-6">
          <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h3 className="font-bold">Centre-wise Procurement</h3>
              <p className="mt-1 text-sm text-[#6b776f]">
                Detailed procurement performance by centre
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#6b776f]">
              <Calendar size={15} />
              12 September 2026
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#d5ddd3] text-xs uppercase tracking-wide text-[#6b776f]">
                  <th className="px-4 py-3">Procurement Centre</th>
                  <th className="px-4 py-3">Crop</th>
                  <th className="px-4 py-3">Farmers</th>
                  <th className="px-4 py-3">Procured</th>
                  <th className="px-4 py-3">Target</th>
                  <th className="px-4 py-3">Progress</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item) => (
                  <tr
                    key={item.centre}
                    className="border-b border-[#eef1ed] last:border-0"
                  >
                    <td className="px-4 py-4">
                      <p className="text-sm font-semibold">{item.centre}</p>
                      <p className="mt-1 text-xs text-[#6b776f]">
                        {item.district}
                      </p>
                    </td>

                    <td className="px-4 py-4 text-sm">{item.crop}</td>

                    <td className="px-4 py-4 text-sm">{item.farmers}</td>

                    <td className="px-4 py-4 text-sm font-semibold">
                      {item.quantity}
                    </td>

                    <td className="px-4 py-4 text-sm">{item.target}</td>

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-24 rounded-full bg-[#e7ebe5]">
                          <div
                            className="h-2 rounded-full bg-[#174d35]"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>

                        <span className="text-xs font-semibold">
                          {item.progress}%
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="space-y-3 md:hidden">
            {filteredData.map((item) => (
              <div
                key={item.centre}
                className="rounded-xl border border-[#d5ddd3] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{item.centre}</p>
                    <p className="mt-1 text-xs text-[#6b776f]">
                      {item.district}
                    </p>
                  </div>

                  <StatusBadge status={item.status} />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Info label="Crop" value={item.crop} />
                  <Info label="Farmers" value={item.farmers} />
                  <Info label="Procured" value={item.quantity} />
                  <Info label="Target" value={item.target} />
                </div>

                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-[#6b776f]">Progress</span>
                    <span className="font-semibold">{item.progress}%</span>
                  </div>

                  <div className="h-2 rounded-full bg-[#e7ebe5]">
                    <div
                      className="h-2 rounded-full bg-[#174d35]"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="py-12 text-center text-sm text-[#6b776f]">
              No procurement centres found.
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

function KpiCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[#6b776f]">{title}</p>
          <h3 className="mt-2 text-xl font-bold md:text-2xl">{value}</h3>
          <p className="mt-2 text-xs text-[#6b776f]">{subtitle}</p>
        </div>

        <div className="rounded-xl bg-[#eff8ed] p-3 text-[#174d35]">
          <Icon size={21} />
        </div>
      </div>
    </div>
  )
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#6b776f]">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-[#d5ddd3] bg-white px-4 py-2.5 pr-10 text-sm outline-none focus:border-[#174d35]"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-3 text-[#6b776f]"
        />
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const styles = {
    "On Track": "bg-[#eff8ed] text-[#43844c]",
    Moderate: "bg-[#fff3d4] text-[#8a6900]",
    "Near Target": "bg-[#ddefd9] text-[#174d35]",
  }

  return (
    <span
      className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
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