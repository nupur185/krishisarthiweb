import { useState } from "react"
import { Link } from "react-router"
import {
  LayoutDashboard,
  Map,
  Users,
  Package,
  IndianRupee,
  TrendingUp,
  AlertTriangle,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Download,
  ChevronDown,
} from "lucide-react"

const stats = [
  {
    title: "Registered Farmers",
    value: "24,44,812",
    change: "+8.4%",
    icon: Users,
  },
  {
    title: "Total Procurement",
    value: "1,60,69,291 MT",
    change: "+12.6%",
    icon: Package,
  },
  {
    title: "MSP Paid",
    value: "₹37,537.82 Cr",
    change: "+9.2%",
    icon: IndianRupee,
  },
  {
    title: "Active Centres",
    value: "15,294",
    change: "+4.8%",
    icon: Map,
  },
]

const centres = [
  {
    name: "Muzaffarpur Central Centre",
    district: "Muzaffarpur",
    farmers: 284,
    procurement: "1,842 MT",
    utilization: 86,
    status: "High",
  },
  {
    name: "Sadar Procurement Centre",
    district: "Muzaffarpur",
    farmers: 192,
    procurement: "1,324 MT",
    utilization: 71,
    status: "Normal",
  },
  {
    name: "Kanti Procurement Centre",
    district: "Muzaffarpur",
    farmers: 156,
    procurement: "986 MT",
    utilization: 58,
    status: "Normal",
  },
  {
    name: "Motipur Procurement Centre",
    district: "Muzaffarpur",
    farmers: 241,
    procurement: "1,576 MT",
    utilization: 92,
    status: "Critical",
  },
]

const alerts = [
  {
    title: "High congestion detected",
    description: "Motipur Procurement Centre is operating above 90% capacity.",
    time: "12 min ago",
    type: "warning",
  },
  {
    title: "Procurement target update",
    description: "District procurement has reached 82% of the current target.",
    time: "1 hour ago",
    type: "success",
  },
  {
    title: "Payment reconciliation pending",
    description: "23 transactions require verification.",
    time: "2 hours ago",
    type: "info",
  },
]

export default function GovernmentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [district, setDistrict] = useState("Muzaffarpur")

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#183328]">
      {/* Mobile Header */}
      <div className="flex items-center justify-between border-b border-[#d5ddd3] bg-white px-5 py-4 lg:hidden">
        <div>
          <h1 className="text-lg font-bold text-[#174d35]">KrishiSarthi</h1>
          <p className="text-xs text-[#6b776f]">Government Portal</p>
        </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-xl border border-[#d5ddd3] p-2"
        >
          <Menu size={21} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#123c2a] text-white transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
            <div>
              <h1 className="text-xl font-bold">KrishiSarthi</h1>
              <p className="mt-1 text-xs text-white/60">
                Government Command Centre
              </p>
            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-5">
            <SidebarItem
              icon={LayoutDashboard}
              label="Dashboard"
              active
            />
            <SidebarItem icon={Map} label="Procurement Centres" />
            <Link
              to="/government/farmers"
              className="font-semibold text-[#174d35] hover:underline"
            >
            <SidebarItem icon={Users} label="Farmers" /> </Link>
            <Link
              to="/government/procurement"
              className="font-semibold text-[#174d35] hover:underline"
            ><SidebarItem icon={Package} label="Procurement" /> </Link>
            <Link
              to="/government/payments"
              className="font-semibold text-[#174d35] hover:underline"
            >
            <SidebarItem icon={IndianRupee} label="Payments" /> </Link>
            <Link
              to="/government/analytics"
              className="font-semibold text-[#174d35] hover:underline"
            >
            <SidebarItem icon={TrendingUp} label="Analytics & Reports" /> </Link>
            <Link
              to="/government/alerts"
              className="font-semibold text-[#174d35] hover:underline"
            >
            <SidebarItem icon={AlertTriangle} label="Alerts" /> </Link>
            <SidebarItem icon={Bell} label="Notifications" />
            <SidebarItem icon={Settings} label="Settings" />
          </nav>

          <div className="border-t border-white/10 p-4">
            <div className="mb-4 rounded-xl bg-white/10 p-3">
              <p className="text-sm font-semibold">Government Officer</p>
              <p className="mt-1 text-xs text-white/60">
                Bihar Procurement Department
              </p>
            </div>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/75 hover:bg-white/10">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:ml-64">
        {/* Top Bar */}
        <header className="hidden items-center justify-between border-b border-[#d5ddd3] bg-white px-8 py-5 lg:flex">
          <div>
            <h2 className="text-xl font-bold">Government Dashboard</h2>
            <p className="mt-1 text-sm text-[#6b776f]">
              State-level procurement overview
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-xl border border-[#d5ddd3] p-2.5">
              <Bell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#e94b4b]" />
            </button>

            <div className="flex items-center gap-3 border-l border-[#d5ddd3] pl-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ddefd9] font-bold text-[#174d35]">
                GO
              </div>
              <div>
                <p className="text-sm font-semibold">Government Officer</p>
                <p className="text-xs text-[#6b776f]">Bihar</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-5 md:p-8">
          {/* Page Controls */}
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold">State Overview</h3>
              <p className="mt-1 text-sm text-[#6b776f]">
                Monitor procurement, farmers, payments and centre performance.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="appearance-none rounded-xl border border-[#d5ddd3] bg-white py-2.5 pl-4 pr-10 text-sm font-medium outline-none"
                >
                  <option>Muzaffarpur</option>
                  <option>Vaishali</option>
                  <option>Samastipur</option>
                  <option>Darbhanga</option>
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-3"
                />
              </div>

              <button className="flex items-center gap-2 rounded-xl bg-[#174d35] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#123c2a]">
                <Download size={17} />
                Export
              </button>
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
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-[#6b776f]">{stat.title}</p>
                      <h4 className="mt-2 text-2xl font-bold">{stat.value}</h4>
                    </div>

                    <div className="rounded-xl bg-[#eff8ed] p-3 text-[#174d35]">
                      <Icon size={21} />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#5eaf68]">
                      <TrendingUp size={14} />
                      {stat.change}
                    </span>
                    <span className="text-xs text-[#6b776f]">
                      vs previous period
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Main Grid */}
          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            {/* Procurement Trend */}
            <section className="rounded-2xl border border-[#d5ddd3] bg-white p-6 xl:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">Procurement Overview</h3>
                  <p className="mt-1 text-sm text-[#6b776f]">
                    Weekly procurement volume
                  </p>
                </div>

                <select className="rounded-lg border border-[#d5ddd3] px-3 py-2 text-xs outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>

              <div className="mt-8 flex h-64 items-end gap-3 border-b border-[#d5ddd3] px-2">
                {[42, 58, 47, 72, 65, 84, 76, 91, 68, 87, 94, 81].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="group flex h-full flex-1 items-end"
                    >
                      <div
                        className="relative w-full rounded-t-lg bg-[#174d35] transition hover:bg-[#b76537]"
                        style={{ height: `${height}%` }}
                      >
                        <span className="absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded bg-[#183328] px-2 py-1 text-[10px] text-white group-hover:block">
                          {Math.round(height * 42)} MT
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="mt-3 flex justify-between px-1 text-[10px] text-[#6b776f]">
                <span>01 Sep</span>
                <span>03 Sep</span>
                <span>05 Sep</span>
                <span>07 Sep</span>
                <span>09 Sep</span>
                <span>11 Sep</span>
                <span>12 Sep</span>
              </div>
            </section>

            {/* Alerts */}
            <section className="rounded-2xl border border-[#d5ddd3] bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">System Alerts</h3>
                  <p className="mt-1 text-sm text-[#6b776f]">
                    Requires attention
                  </p>
                </div>

                <span className="rounded-full bg-[#fff3d4] px-2.5 py-1 text-xs font-semibold text-[#8a6900]">
                  3 Active
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.title}
                    className="rounded-xl border border-[#d5ddd3] p-4"
                  >
                    <div className="flex gap-3">
                      <div
                        className={`mt-0.5 rounded-lg p-2 ${
                          alert.type === "warning"
                            ? "bg-[#fff3d4] text-[#8a6900]"
                            : alert.type === "success"
                              ? "bg-[#eff8ed] text-[#43844c]"
                              : "bg-[#eef4f8] text-[#41657a]"
                        }`}
                      >
                        {alert.type === "warning" ? (
                          <AlertTriangle size={16} />
                        ) : (
                          <Bell size={16} />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold">{alert.title}</p>
                        <p className="mt-1 text-xs leading-5 text-[#6b776f]">
                          {alert.description}
                        </p>
                        <p className="mt-2 text-[11px] text-[#9aa39d]">
                          {alert.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Centre Performance */}
          <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-6">
            <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <h3 className="font-bold">Procurement Centre Performance</h3>
                <p className="mt-1 text-sm text-[#6b776f]">
                  Current performance across {district} centres
                </p>
              </div>

              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-3 top-3 text-[#8a948e]"
                />
                <input
                  placeholder="Search centre..."
                  className="w-full rounded-xl border border-[#d5ddd3] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#174d35] md:w-56"
                />
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#d5ddd3] text-xs uppercase tracking-wide text-[#6b776f]">
                    <th className="px-4 py-3">Centre</th>
                    <th className="px-4 py-3">Farmers Today</th>
                    <th className="px-4 py-3">Procurement</th>
                    <th className="px-4 py-3">Utilization</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {centres.map((centre) => (
                    <tr
                      key={centre.name}
                      className="border-b border-[#eef1ed] last:border-0"
                    >
                      <td className="px-4 py-4">
                        <p className="text-sm font-semibold">{centre.name}</p>
                        <p className="mt-1 text-xs text-[#6b776f]">
                          {centre.district}
                        </p>
                      </td>

                      <td className="px-4 py-4 text-sm">
                        {centre.farmers}
                      </td>

                      <td className="px-4 py-4 text-sm font-medium">
                        {centre.procurement}
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-24 rounded-full bg-[#e7ebe5]">
                            <div
                              className="h-2 rounded-full bg-[#174d35]"
                              style={{
                                width: `${centre.utilization}%`,
                              }}
                            />
                          </div>
                          <span className="text-xs font-semibold">
                            {centre.utilization}%
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <StatusBadge status={centre.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-3 md:hidden">
              {centres.map((centre) => (
                <div
                  key={centre.name}
                  className="rounded-xl border border-[#d5ddd3] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{centre.name}</p>
                      <p className="mt-1 text-xs text-[#6b776f]">
                        {centre.district}
                      </p>
                    </div>

                    <StatusBadge status={centre.status} />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-[#6b776f]">Farmers</p>
                      <p className="mt-1 font-semibold">{centre.farmers}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b776f]">Procurement</p>
                      <p className="mt-1 font-semibold">
                        {centre.procurement}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-[#6b776f]">Utilization</span>
                      <span className="font-semibold">
                        {centre.utilization}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-[#e7ebe5]">
                      <div
                        className="h-2 rounded-full bg-[#174d35]"
                        style={{
                          width: `${centre.utilization}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function SidebarItem({ icon: Icon, label, active = false }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
        active
          ? "bg-white text-[#174d35] font-semibold"
          : "text-white/70 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  )
}

function StatusBadge({ status }) {
  const styles = {
    High: "bg-[#fff3d4] text-[#8a6900]",
    Normal: "bg-[#eff8ed] text-[#43844c]",
    Critical: "bg-[#ffe7e7] text-[#c73838]",
  }

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  )
}