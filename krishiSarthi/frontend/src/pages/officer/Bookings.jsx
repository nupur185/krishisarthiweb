import { useState } from "react"
import {
  CalendarDays,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock3,
  MapPin,
  X,
} from "lucide-react"

const initialBookings = [
  {
    id: "BK-10231",
    token: "A-13",
    farmer: "Ramesh Kumar",
    farmerId: "FRM-20481",
    crop: "Paddy",
    quantity: "42 Qtl",
    date: "12 Sep 2026",
    time: "10:00 - 11:00 AM",
    status: "Approved",
  },
  {
    id: "BK-10232",
    token: "A-14",
    farmer: "Sunil Kumar",
    farmerId: "FRM-20482",
    crop: "Paddy",
    quantity: "35 Qtl",
    date: "12 Sep 2026",
    time: "10:00 - 11:00 AM",
    status: "Pending",
  },
  {
    id: "BK-10233",
    token: "A-15",
    farmer: "Rajesh Singh",
    farmerId: "FRM-20483",
    crop: "Wheat",
    quantity: "28 Qtl",
    date: "12 Sep 2026",
    time: "11:00 - 12:00 PM",
    status: "Pending",
  },
  {
    id: "BK-10234",
    token: "A-16",
    farmer: "Mohan Yadav",
    farmerId: "FRM-20484",
    crop: "Paddy",
    quantity: "51 Qtl",
    date: "12 Sep 2026",
    time: "11:00 - 12:00 PM",
    status: "Approved",
  },
  {
    id: "BK-10235",
    token: "A-17",
    farmer: "Amit Kumar",
    farmerId: "FRM-20485",
    crop: "Maize",
    quantity: "22 Qtl",
    date: "12 Sep 2026",
    time: "12:00 - 01:00 PM",
    status: "Cancelled",
  },
]

export default function Bookings() {
  const [bookings, setBookings] = useState(initialBookings)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [selectedBooking, setSelectedBooking] = useState(null)

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.farmer.toLowerCase().includes(search.toLowerCase()) ||
      booking.farmerId.toLowerCase().includes(search.toLowerCase()) ||
      booking.token.toLowerCase().includes(search.toLowerCase()) ||
      booking.id.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === "All" || booking.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const updateStatus = (id, status) => {
    setBookings((current) =>
      current.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    )
    setSelectedBooking(null)
  }

  const statusStyle = {
    Approved: "bg-[#ddefd9] text-[#27633d]",
    Pending: "bg-[#fff4cf] text-[#8a6810]",
    Cancelled: "bg-[#fde4e4] text-[#b33a3a]",
  }

  return (
    <div className="min-h-screen bg-[#f7f4ea] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-[#123c2a] text-white flex-col fixed inset-y-0 left-0">
        <div className="px-6 py-7 border-b border-white/10">
          <h1 className="text-2xl font-bold">KrishiSarthi</h1>
          <p className="text-sm text-white/60 mt-1">Procurement Portal</p>
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
            className="block px-4 py-3 rounded-xl bg-white/15 text-white font-medium"
          >
            Bookings
          </a>

          <a
            href="/officer/procurement/farmers"
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10"
          >
            Farmers
          </a>
        </nav>

        <div className="mt-auto p-4">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-sm font-medium">Green Valley Centre</p>
            <p className="text-xs text-white/60 mt-1">Muzaffarpur, Bihar</p>
            <div className="flex items-center gap-2 mt-3 text-xs">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Centre Online
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-64">
        <header className="bg-white border-b border-[#d5ddd3] px-5 md:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#183328]">
                Booking Management
              </h2>
              <p className="text-sm text-[#6b776f] mt-1">
                Review and manage farmer procurement bookings
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#6b776f]">
              <MapPin size={17} />
              Green Valley Procurement Centre
            </div>
          </div>
        </header>

        <div className="p-5 md:p-8">
          {/* Stats */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <StatCard
              icon={<CalendarDays size={21} />}
              title="Today's Bookings"
              value="48"
            />
            <StatCard
              icon={<Clock3 size={21} />}
              title="Pending Approval"
              value="9"
            />
            <StatCard
              icon={<CheckCircle2 size={21} />}
              title="Approved"
              value="35"
            />
            <StatCard
              icon={<XCircle size={21} />}
              title="Cancelled"
              value="4"
            />
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl border border-[#d5ddd3] p-4 mb-6">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a857e]"
                />
                <input
                  type="text"
                  placeholder="Search farmer, booking ID or token..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#d5ddd3] outline-none focus:border-[#174d35]"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter size={18} className="text-[#6b776f]" />

                {["All", "Pending", "Approved", "Cancelled"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                      statusFilter === status
                        ? "bg-[#174d35] text-white"
                        : "bg-[#eff8ed] text-[#355341] hover:bg-[#ddefd9]"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-2xl border border-[#d5ddd3] overflow-hidden">
            <div className="px-6 py-5 border-b border-[#e4e9e3]">
              <h3 className="font-semibold text-[#183328]">
                Procurement Bookings
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#eff8ed] text-[#526158]">
                  <tr>
                    <th className="text-left px-6 py-4">Booking</th>
                    <th className="text-left px-6 py-4">Farmer</th>
                    <th className="text-left px-6 py-4">Crop</th>
                    <th className="text-left px-6 py-4">Quantity</th>
                    <th className="text-left px-6 py-4">Schedule</th>
                    <th className="text-left px-6 py-4">Status</th>
                    <th className="text-right px-6 py-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-t border-[#e8ece7] hover:bg-[#fafcf9]"
                    >
                      <td className="px-6 py-4">
                        <p className="font-semibold text-[#183328]">
                          {booking.id}
                        </p>
                        <p className="text-xs text-[#6b776f] mt-1">
                          Token {booking.token}
                        </p>
                      </td>

                      <td className="px-6 py-4">
                        <p className="font-medium">{booking.farmer}</p>
                        <p className="text-xs text-[#6b776f] mt-1">
                          {booking.farmerId}
                        </p>
                      </td>

                      <td className="px-6 py-4">{booking.crop}</td>
                      <td className="px-6 py-4 font-medium">
                        {booking.quantity}
                      </td>

                      <td className="px-6 py-4">
                        <p>{booking.date}</p>
                        <p className="text-xs text-[#6b776f] mt-1">
                          {booking.time}
                        </p>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusStyle[booking.status]}`}
                        >
                          {booking.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setSelectedBooking(booking)}
                          className="px-4 py-2 rounded-lg bg-[#174d35] text-white text-xs font-medium hover:bg-[#123c2a]"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-2xl border border-[#d5ddd3] p-4"
              >
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#183328]">
                      {booking.farmer}
                    </p>
                    <p className="text-xs text-[#6b776f] mt-1">
                      {booking.id} · Token {booking.token}
                    </p>
                  </div>

                  <span
                    className={`h-fit px-2.5 py-1 rounded-full text-xs font-medium ${statusStyle[booking.status]}`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                  <div>
                    <p className="text-xs text-[#6b776f]">Crop</p>
                    <p className="font-medium mt-1">{booking.crop}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6b776f]">Quantity</p>
                    <p className="font-medium mt-1">{booking.quantity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6b776f]">Date</p>
                    <p className="font-medium mt-1">{booking.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6b776f]">Time</p>
                    <p className="font-medium mt-1">{booking.time}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBooking(booking)}
                  className="w-full mt-4 py-2.5 rounded-xl bg-[#174d35] text-white text-sm font-medium"
                >
                  View Booking
                </button>
              </div>
            ))}
          </div>

          {filteredBookings.length === 0 && (
            <div className="bg-white rounded-2xl border border-[#d5ddd3] p-10 text-center">
              <p className="font-medium text-[#183328]">
                No bookings found
              </p>
              <p className="text-sm text-[#6b776f] mt-1">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Booking modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl">
            <div className="flex items-center justify-between p-5 border-b border-[#e0e5df]">
              <div>
                <h3 className="font-bold text-lg text-[#183328]">
                  Booking Details
                </h3>
                <p className="text-sm text-[#6b776f] mt-1">
                  {selectedBooking.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedBooking(null)}
                className="p-2 rounded-lg hover:bg-[#eff8ed]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <Detail label="Farmer" value={selectedBooking.farmer} />
              <Detail label="Farmer ID" value={selectedBooking.farmerId} />
              <Detail label="Token" value={selectedBooking.token} />
              <Detail label="Crop" value={selectedBooking.crop} />
              <Detail label="Quantity" value={selectedBooking.quantity} />
              <Detail
                label="Schedule"
                value={`${selectedBooking.date} · ${selectedBooking.time}`}
              />

              <div>
                <p className="text-xs text-[#6b776f] mb-2">Current Status</p>
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusStyle[selectedBooking.status]}`}
                >
                  {selectedBooking.status}
                </span>
              </div>
            </div>

            {selectedBooking.status === "Pending" && (
              <div className="p-5 border-t border-[#e0e5df] flex gap-3">
                <button
                  onClick={() =>
                    updateStatus(selectedBooking.id, "Approved")
                  }
                  className="flex-1 py-3 rounded-xl bg-[#174d35] text-white font-medium"
                >
                  Approve Booking
                </button>

                <button
                  onClick={() =>
                    updateStatus(selectedBooking.id, "Cancelled")
                  }
                  className="flex-1 py-3 rounded-xl bg-[#fde4e4] text-[#b33a3a] font-medium"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-2xl border border-[#d5ddd3] p-5">
      <div className="w-10 h-10 rounded-xl bg-[#eff8ed] text-[#174d35] flex items-center justify-center">
        {icon}
      </div>

      <p className="text-sm text-[#6b776f] mt-4">{title}</p>
      <p className="text-2xl font-bold text-[#183328] mt-1">{value}</p>
    </div>
  )
}

function Detail({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <p className="text-sm text-[#6b776f]">{label}</p>
      <p className="text-sm font-medium text-[#183328] text-right">{value}</p>
    </div>
  )
}