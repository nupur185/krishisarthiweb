import { useState } from "react"
import { Link } from "react-router"
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Clock3,
  PackageCheck,
  Bell,
  Search,
  LogOut,
  Menu,
  X,
  MapPin,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react"

export default function ProcurementDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const stats = [
    {
      title: "Today's Bookings",
      value: "48",
      icon: CalendarCheck,
      bg: "bg-[#eff8ed]",
      text: "text-[#174d35]",
    },
    {
      title: "Farmers Waiting",
      value: "17",
      icon: Clock3,
      bg: "bg-[#fff9df]",
      text: "text-[#8a7200]",
    },
    {
      title: "Processed Today",
      value: "31",
      icon: PackageCheck,
      bg: "bg-[#eff8ed]",
      text: "text-[#4d9657]",
    },
    {
      title: "Pending Requests",
      value: "9",
      icon: AlertTriangle,
      bg: "bg-[#fff2ed]",
      text: "text-[#b76537]",
    },
  ]

  const queue = [
    {
      token: "A-13",
      farmer: "Ramesh Kumar",
      crop: "Paddy",
      quantity: "15 Qt",
      slot: "10:00 – 11:00 AM",
      status: "Waiting",
    },
    {
      token: "A-14",
      farmer: "Suresh Kumar",
      crop: "Paddy",
      quantity: "12 Qt",
      slot: "10:00 – 11:00 AM",
      status: "Waiting",
    },
    {
      token: "A-15",
      farmer: "Mohan Singh",
      crop: "Wheat",
      quantity: "20 Qt",
      slot: "11:00 – 12:00 PM",
      status: "Upcoming",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#183328]">

      {/* Mobile Header */}
      <div className="flex items-center justify-between border-b border-[#d5ddd3] bg-white px-4 py-4 lg:hidden">
        <div>
          <h1 className="font-bold text-[#174d35]">KrishiSarthi</h1>
          <p className="text-xs text-[#6b776f]">Procurement Officer</p>
        </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg p-2 hover:bg-[#eff8ed]"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#123c2a] p-5 text-white transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">KrishiSarthi</h1>
            <p className="mt-1 text-xs text-white/60">
              Procurement Portal
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-2">
          <Link
            to="/officer/procurement"
            className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10">
            <Users size={18} />
            Farmers
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10">
            <CalendarCheck size={18} />
            Bookings
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10">
            <PackageCheck size={18} />
            Procurement
          </button>
        </nav>

        <div className="absolute bottom-5 left-5 right-5">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:ml-64">

        {/* Topbar */}
        <header className="hidden items-center justify-between border-b border-[#d5ddd3] bg-white px-8 py-5 lg:flex">
          <div>
            <h2 className="text-xl font-bold">
              Procurement Dashboard
            </h2>
            <p className="mt-1 text-sm text-[#6b776f]">
              Monitor today's procurement activity
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative rounded-full p-2 hover:bg-[#eff8ed]">
              <Bell size={20} />

              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#e94b4b]" />
            </button>

            <div className="border-l border-[#d5ddd3] pl-5">
              <p className="text-sm font-semibold">Anil Kumar</p>
              <p className="text-xs text-[#6b776f]">
                Procurement Officer
              </p>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6 lg:p-8">

          {/* Location */}
          <div className="mb-6 flex flex-col justify-between gap-3 rounded-2xl bg-[#174d35] p-5 text-white sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-sm font-semibold">
                  Green Valley Procurement Center
                </span>
              </div>

              <p className="mt-1 text-xs text-white/70">
                Muzaffarpur, Bihar
              </p>
            </div>

            <div className="rounded-lg bg-white/10 px-3 py-2 text-xs">
              Centre Status:{" "}
              <span className="font-semibold text-[#b9e5bd]">
                Operational
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon

              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm"
                >
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg}`}
                  >
                    <Icon size={20} className={stat.text} />
                  </div>

                  <p className="text-sm text-[#6b776f]">
                    {stat.title}
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    {stat.value}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Queue */}
          <div className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white shadow-sm">

            <div className="flex flex-col justify-between gap-3 border-b border-[#d5ddd3] p-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-bold">
                  Today's Queue
                </h2>
                <p className="mt-1 text-xs text-[#6b776f]">
                  Farmers currently scheduled at your centre
                </p>
              </div>

              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-3 top-3 text-[#6b776f]"
                />

                <input
                  placeholder="Search token or farmer"
                  className="rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#174d35]"
                />
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#eff8ed] text-[#174d35]">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Token</th>
                    <th className="px-5 py-3 font-semibold">Farmer</th>
                    <th className="px-5 py-3 font-semibold">Crop</th>
                    <th className="px-5 py-3 font-semibold">Quantity</th>
                    <th className="px-5 py-3 font-semibold">Slot</th>
                    <th className="px-5 py-3 font-semibold">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {queue.map((item) => (
                    <tr
                      key={item.token}
                      className="border-t border-[#d5ddd3]"
                    >
                      <td className="px-5 py-4 font-bold">
                        {item.token}
                      </td>

                      <td className="px-5 py-4">
                        {item.farmer}
                      </td>

                      <td className="px-5 py-4">
                        {item.crop}
                      </td>

                      <td className="px-5 py-4">
                        {item.quantity}
                      </td>

                      <td className="px-5 py-4">
                        {item.slot}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            item.status === "Waiting"
                              ? "bg-[#fff9df] text-[#8a7200]"
                              : "bg-[#eff8ed] text-[#4d9657]"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-3 p-4 md:hidden">
              {queue.map((item) => (
                <div
                  key={item.token}
                  className="rounded-xl border border-[#d5ddd3] p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">{item.token}</p>
                      <p className="mt-1 text-sm">
                        {item.farmer}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#fff9df] px-3 py-1 text-xs font-semibold text-[#8a7200]">
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#6b776f]">
                    <p>Crop: {item.crop}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p className="col-span-2">
                      Slot: {item.slot}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Processing Status */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#eff8ed] p-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#5eaf68]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Centre Capacity
                  </p>
                  <p className="text-xs text-[#6b776f]">
                    31 / 50 farmers processed today
                  </p>
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#dde8dc]">
                <div className="h-full w-[62%] rounded-full bg-[#5eaf68]" />
              </div>
            </div>

            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#fff9df] p-3">
                  <Clock3
                    size={20}
                    className="text-[#8a7200]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Average Waiting Time
                  </p>
                  <p className="text-xs text-[#6b776f]">
                    Currently around 24 minutes
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}