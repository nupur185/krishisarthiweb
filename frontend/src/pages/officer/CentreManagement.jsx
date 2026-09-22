import { useState } from "react"
import {
  MapPin,
  Users,
  Package,
  Clock3,
  Search,
  Plus,
  X,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react"

const initialCentres = [
  {
    id: "CTR-001",
    name: "Green Valley Procurement Centre",
    location: "Muzaffarpur, Bihar",
    status: "Active",
    capacity: 120,
    booked: 48,
    processed: 31,
    avgWait: "18 min",
  },
  {
    id: "CTR-002",
    name: "Sadar Procurement Centre",
    location: "Sadar, Muzaffarpur",
    status: "Active",
    capacity: 100,
    booked: 72,
    processed: 45,
    avgWait: "32 min",
  },
  {
    id: "CTR-003",
    name: "Kanti Procurement Centre",
    location: "Kanti, Muzaffarpur",
    status: "Active",
    capacity: 150,
    booked: 39,
    processed: 29,
    avgWait: "14 min",
  },
  {
    id: "CTR-004",
    name: "Barauni Procurement Centre",
    location: "Barauni, Bihar",
    status: "Inactive",
    capacity: 80,
    booked: 0,
    processed: 0,
    avgWait: "—",
  },
]

export default function CentreManagement() {
  const [centres, setCentres] = useState(initialCentres)
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)

  const filteredCentres = centres.filter(
    (centre) =>
      centre.name.toLowerCase().includes(search.toLowerCase()) ||
      centre.location.toLowerCase().includes(search.toLowerCase()) ||
      centre.id.toLowerCase().includes(search.toLowerCase())
  )

  const toggleStatus = (id) => {
    setCentres((current) =>
      current.map((centre) =>
        centre.id === id
          ? {
              ...centre,
              status: centre.status === "Active" ? "Inactive" : "Active",
            }
          : centre
      )
    )
  }

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
            className="block px-4 py-3 rounded-xl bg-white/15 text-white font-medium"
          >
            Centres
          </a>
        </nav>

        <div className="mt-auto p-4">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-sm font-medium">
              Officer Account
            </p>
            <p className="text-xs text-white/60 mt-1">
              Procurement Officer
            </p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-64">
        <header className="bg-white border-b border-[#d5ddd3] px-5 md:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#183328]">
                Centre Management
              </h2>
              <p className="text-sm text-[#6b776f] mt-1">
                Monitor procurement centres and their capacity
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#174d35] text-white font-medium hover:bg-[#123c2a]"
            >
              <Plus size={18} />
              Add Centre
            </button>
          </div>
        </header>

        <div className="p-5 md:p-8">
          {/* Summary */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <SummaryCard
              icon={<MapPin size={21} />}
              label="Total Centres"
              value="4"
            />

            <SummaryCard
              icon={<CheckCircle2 size={21} />}
              label="Active Centres"
              value="3"
            />

            <SummaryCard
              icon={<Users size={21} />}
              label="Today's Bookings"
              value="159"
            />

            <SummaryCard
              icon={<Package size={21} />}
              label="Total Capacity"
              value="450"
            />
          </div>

          {/* Search */}
          <div className="bg-white rounded-2xl border border-[#d5ddd3] p-4 mb-6">
            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a857e]"
              />

              <input
                type="text"
                placeholder="Search centre by name, location or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#d5ddd3] outline-none focus:border-[#174d35]"
              />
            </div>
          </div>

          {/* Centre cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredCentres.map((centre) => {
              const utilization = Math.round(
                (centre.booked / centre.capacity) * 100
              )

              return (
                <div
                  key={centre.id}
                  className="bg-white rounded-2xl border border-[#d5ddd3] p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#eff8ed] text-[#174d35] flex items-center justify-center shrink-0">
                        <MapPin size={21} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#183328]">
                          {centre.name}
                        </h3>

                        <p className="text-xs text-[#6b776f] mt-1">
                          {centre.id}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        centre.status === "Active"
                          ? "bg-[#ddefd9] text-[#27633d]"
                          : "bg-[#fde4e4] text-[#b33a3a]"
                      }`}
                    >
                      {centre.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#6b776f] mt-5">
                    <MapPin size={16} />
                    {centre.location}
                  </div>

                  {/* Capacity */}
                  <div className="mt-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6b776f]">
                        Today's Capacity
                      </span>

                      <span className="font-medium text-[#183328]">
                        {centre.booked}/{centre.capacity}
                      </span>
                    </div>

                    <div className="h-2 bg-[#e7ece5] rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-[#5eaf68] rounded-full"
                        style={{
                          width: `${Math.min(utilization, 100)}%`,
                        }}
                      />
                    </div>

                    <p className="text-xs text-[#6b776f] mt-1">
                      {utilization}% utilized
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <Metric
                      icon={<Users size={16} />}
                      label="Processed"
                      value={centre.processed}
                    />

                    <Metric
                      icon={<Clock3 size={16} />}
                      label="Avg. Wait"
                      value={centre.avgWait}
                    />
                  </div>

                  <button
                    onClick={() => toggleStatus(centre.id)}
                    className={`w-full mt-5 py-2.5 rounded-xl text-sm font-medium ${
                      centre.status === "Active"
                        ? "bg-[#fde4e4] text-[#b33a3a]"
                        : "bg-[#ddefd9] text-[#27633d]"
                    }`}
                  >
                    {centre.status === "Active"
                      ? "Deactivate Centre"
                      : "Activate Centre"}
                  </button>
                </div>
              )
            })}
          </div>

          {filteredCentres.length === 0 && (
            <div className="bg-white rounded-2xl border border-[#d5ddd3] p-10 text-center">
              <AlertTriangle
                className="mx-auto text-[#8a6810]"
                size={28}
              />
              <p className="font-medium text-[#183328] mt-3">
                No centres found
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Add Centre Modal */}
      {showModal && (
        <AddCentreModal
          onClose={() => setShowModal(false)}
          onAdd={(centre) => {
            setCentres((current) => [...current, centre])
            setShowModal(false)
          }}
        />
      )}
    </div>
  )
}

function SummaryCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-2xl border border-[#d5ddd3] p-5">
      <div className="w-10 h-10 rounded-xl bg-[#eff8ed] text-[#174d35] flex items-center justify-center">
        {icon}
      </div>

      <p className="text-sm text-[#6b776f] mt-4">{label}</p>
      <p className="text-2xl font-bold text-[#183328] mt-1">
        {value}
      </p>
    </div>
  )
}

function Metric({ icon, label, value }) {
  return (
    <div className="bg-[#f7f4ea] rounded-xl p-3">
      <div className="flex items-center gap-2 text-[#6b776f]">
        {icon}
        <span className="text-xs">{label}</span>
      </div>

      <p className="font-semibold text-[#183328] mt-1">
        {value}
      </p>
    </div>
  )
}

function AddCentreModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    location: "",
    capacity: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    onAdd({
      id: `CTR-${String(Date.now()).slice(-3)}`,
      name: form.name,
      location: form.location,
      status: "Active",
      capacity: Number(form.capacity),
      booked: 0,
      processed: 0,
      avgWait: "—",
    })
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl">
        <div className="flex items-center justify-between p-5 border-b border-[#e0e5df]">
          <div>
            <h3 className="font-bold text-lg text-[#183328]">
              Add Procurement Centre
            </h3>
            <p className="text-sm text-[#6b776f] mt-1">
              Add a new centre to the network
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#eff8ed]"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <Field
            label="Centre Name"
            placeholder="Enter centre name"
            value={form.name}
            onChange={(value) =>
              setForm({ ...form, name: value })
            }
          />

          <Field
            label="Location"
            placeholder="Enter location"
            value={form.location}
            onChange={(value) =>
              setForm({ ...form, location: value })
            }
          />

          <Field
            label="Daily Capacity"
            placeholder="Enter capacity"
            type="number"
            value={form.capacity}
            onChange={(value) =>
              setForm({ ...form, capacity: value })
            }
          />

          <button
            type="submit"
            disabled={
              !form.name || !form.location || !form.capacity
            }
            className="w-full py-3 rounded-xl bg-[#174d35] text-white font-medium disabled:opacity-40"
          >
            Add Centre
          </button>
        </form>
      </div>
    </div>
  )
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#355341] mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-[#d5ddd3] outline-none focus:border-[#174d35]"
      />
    </div>
  )
}