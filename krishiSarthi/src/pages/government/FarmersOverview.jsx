import { useState } from "react"
import {
  ArrowLeft,
  Users,
  Search,
  Download,
  Filter,
  MapPin,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  ChevronDown,
} from "lucide-react"
import { Link } from "react-router"

const farmers = [
  {
    id: "FRM-10284",
    name: "Ramesh Kumar",
    village: "Madhopur",
    district: "Muzaffarpur",
    crop: "Paddy",
    quantity: "42 Q",
    status: "Verified",
    transactions: 5,
  },
  {
    id: "FRM-10321",
    name: "Suresh Prasad",
    village: "Kanti",
    district: "Muzaffarpur",
    crop: "Paddy",
    quantity: "68 Q",
    status: "Verified",
    transactions: 8,
  },
  {
    id: "FRM-10456",
    name: "Rajesh Kumar",
    village: "Motipur",
    district: "Muzaffarpur",
    crop: "Paddy",
    quantity: "35 Q",
    status: "Pending",
    transactions: 2,
  },
  {
    id: "FRM-10872",
    name: "Mohan Singh",
    village: "Sakra",
    district: "Muzaffarpur",
    crop: "Wheat",
    quantity: "51 Q",
    status: "Verified",
    transactions: 6,
  },
  {
    id: "FRM-10943",
    name: "Vijay Kumar",
    village: "Paroo",
    district: "Muzaffarpur",
    crop: "Paddy",
    quantity: "76 Q",
    status: "Verified",
    transactions: 9,
  },
  {
    id: "FRM-11021",
    name: "Dinesh Prasad",
    village: "Bochahan",
    district: "Muzaffarpur",
    crop: "Maize",
    quantity: "29 Q",
    status: "Review",
    transactions: 3,
  },
]

export default function FarmersOverview() {
  const [search, setSearch] = useState("")
  const [district, setDistrict] = useState("All Districts")
  const [status, setStatus] = useState("All Status")

  const filteredFarmers = farmers.filter((farmer) => {
    const matchesSearch =
      farmer.name.toLowerCase().includes(search.toLowerCase()) ||
      farmer.id.toLowerCase().includes(search.toLowerCase()) ||
      farmer.village.toLowerCase().includes(search.toLowerCase())

    const matchesDistrict =
      district === "All Districts" || farmer.district === district

    const matchesStatus =
      status === "All Status" || farmer.status === status

    return matchesSearch && matchesDistrict && matchesStatus
  })

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
                Farmer Overview
              </h1>
              <p className="mt-1 text-xs text-[#6b776f]">
                Government monitoring portal
              </p>
            </div>
          </div>

          <button className="hidden items-center gap-2 rounded-xl bg-[#174d35] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#123c2a] sm:flex">
            <Download size={17} />
            Export Data
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] p-5 md:p-8">
        {/* Title */}
        <div className="mb-7">
          <div className="flex items-center gap-2 text-sm text-[#6b776f]">
            <Users size={16} />
            Farmer Management
          </div>

          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Farmer Overview
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-[#6b776f]">
            Monitor farmer registrations, verification status and procurement
            participation across the state.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Registered Farmers"
            value="24,44,812"
            subtitle="Total registered"
            icon={Users}
          />

          <StatCard
            title="Transacting Farmers"
            value="23,69,113"
            subtitle="Farmers with procurement"
            icon={CheckCircle2}
          />

          <StatCard
            title="Pending Verification"
            value="18,426"
            subtitle="Awaiting verification"
            icon={Clock3}
          />

          <StatCard
            title="Flagged Records"
            value="1,284"
            subtitle="Require review"
            icon={AlertTriangle}
          />
        </div>

        {/* Verification Summary */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-6">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h3 className="font-bold">Registration & Verification</h3>
              <p className="mt-1 text-sm text-[#6b776f]">
                Current farmer verification status
              </p>
            </div>

            <span className="rounded-full bg-[#eff8ed] px-3 py-1.5 text-xs font-semibold text-[#43844c]">
              96.8% Verified
            </span>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#e7ebe5]">
            <div
              className="h-full rounded-full bg-[#174d35]"
              style={{ width: "96.8%" }}
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <SummaryItem
              label="Verified"
              value="23,66,386"
              icon={CheckCircle2}
            />
            <SummaryItem
              label="Pending"
              value="18,426"
              icon={Clock3}
            />
            <SummaryItem
              label="Under Review"
              value="1,284"
              icon={AlertTriangle}
            />
          </div>
        </section>

        {/* Filters */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-5">
          <div className="mb-4 flex items-center gap-2">
            <Filter size={18} className="text-[#174d35]" />
            <h3 className="font-bold">Search & Filters</h3>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="md:col-span-1">
              <label className="mb-2 block text-xs font-semibold text-[#6b776f]">
                Search Farmer
              </label>

              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-3 top-3 text-[#8a948e]"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Name, farmer ID or village..."
                  className="w-full rounded-xl border border-[#d5ddd3] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#174d35]"
                />
              </div>
            </div>

            <FilterSelect
              label="District"
              value={district}
              onChange={setDistrict}
              options={[
                "All Districts",
                "Muzaffarpur",
                "Vaishali",
                "Samastipur",
              ]}
            />

            <FilterSelect
              label="Status"
              value={status}
              onChange={setStatus}
              options={[
                "All Status",
                "Verified",
                "Pending",
                "Review",
              ]}
            />
          </div>
        </section>

        {/* Farmer Table */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-bold">Registered Farmers</h3>
              <p className="mt-1 text-sm text-[#6b776f]">
                Showing {filteredFarmers.length} records
              </p>
            </div>

            <div className="hidden items-center gap-2 text-xs text-[#6b776f] sm:flex">
              <MapPin size={15} />
              Bihar
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#d5ddd3] text-xs uppercase tracking-wide text-[#6b776f]">
                  <th className="px-4 py-3">Farmer</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Crop</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Transactions</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredFarmers.map((farmer) => (
                  <tr
                    key={farmer.id}
                    className="border-b border-[#eef1ed] last:border-0"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ddefd9] text-xs font-bold text-[#174d35]">
                          {farmer.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <p className="text-sm font-semibold">
                            {farmer.name}
                          </p>
                          <p className="mt-1 text-xs text-[#6b776f]">
                            {farmer.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <p className="text-sm">{farmer.village}</p>
                      <p className="mt-1 text-xs text-[#6b776f]">
                        {farmer.district}
                      </p>
                    </td>

                    <td className="px-4 py-4 text-sm">{farmer.crop}</td>

                    <td className="px-4 py-4 text-sm font-semibold">
                      {farmer.quantity}
                    </td>

                    <td className="px-4 py-4 text-sm">
                      {farmer.transactions}
                    </td>

                    <td className="px-4 py-4">
                      <StatusBadge status={farmer.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-3 md:hidden">
            {filteredFarmers.map((farmer) => (
              <div
                key={farmer.id}
                className="rounded-xl border border-[#d5ddd3] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ddefd9] text-xs font-bold text-[#174d35]">
                      {farmer.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <p className="text-sm font-semibold">{farmer.name}</p>
                      <p className="mt-1 text-xs text-[#6b776f]">
                        {farmer.id}
                      </p>
                    </div>
                  </div>

                  <StatusBadge status={farmer.status} />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Info label="Village" value={farmer.village} />
                  <Info label="District" value={farmer.district} />
                  <Info label="Crop" value={farmer.crop} />
                  <Info label="Quantity" value={farmer.quantity} />
                  <Info
                    label="Transactions"
                    value={farmer.transactions}
                  />
                </div>
              </div>
            ))}
          </div>

          {filteredFarmers.length === 0 && (
            <div className="py-12 text-center text-sm text-[#6b776f]">
              No farmers found for the selected filters.
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

function StatCard({ title, value, subtitle, icon: Icon }) {
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

function SummaryItem({ label, value, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#f7f4ea] p-4">
      <div className="rounded-lg bg-white p-2 text-[#174d35]">
        <Icon size={17} />
      </div>

      <div>
        <p className="text-xs text-[#6b776f]">{label}</p>
        <p className="mt-1 font-bold">{value}</p>
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
    Verified: "bg-[#eff8ed] text-[#43844c]",
    Pending: "bg-[#fff3d4] text-[#8a6900]",
    Review: "bg-[#ffe7e7] text-[#c73838]",
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