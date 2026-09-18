import { useState } from "react"
import {
  Bell,
  AlertTriangle,
  CheckCircle,
  Info,
  XCircle,
  Search,
  Filter,
  Check,
  Clock,
  MapPin,
  Users,
  X,
} from "lucide-react"

const initialAlerts = [
  {
    id: 1,
    type: "warning",
    title: "High Queue Congestion",
    message:
      "Sadar Procurement Centre is experiencing higher than normal waiting time.",
    location: "Sadar, Muzaffarpur",
    time: "10 min ago",
    status: "Unread",
  },
  {
    id: 2,
    type: "error",
    title: "Payment Processing Delay",
    message:
      "Payment processing for 23 farmers in Muzaffarpur district requires attention.",
    location: "Muzaffarpur",
    time: "32 min ago",
    status: "Unread",
  },
  {
    id: 3,
    type: "info",
    title: "Procurement Target Update",
    message:
      "State procurement has reached 82% of the current monthly target.",
    location: "Bihar",
    time: "1 hour ago",
    status: "Read",
  },
  {
    id: 4,
    type: "success",
    title: "Centre Capacity Restored",
    message:
      "Additional processing capacity has been activated at Green Valley Procurement Centre.",
    location: "Muzaffarpur",
    time: "2 hours ago",
    status: "Read",
  },
  {
    id: 5,
    type: "warning",
    title: "Low Slot Availability",
    message:
      "Multiple procurement centres have limited slots available for tomorrow.",
    location: "North Bihar",
    time: "3 hours ago",
    status: "Read",
  },
  {
    id: 6,
    type: "info",
    title: "Farmer Registration Update",
    message:
      "1,284 new farmer registrations were received today across the state.",
    location: "Bihar",
    time: "5 hours ago",
    status: "Read",
  },
]

const alertStyles = {
  warning: {
    icon: AlertTriangle,
    box: "bg-[#fff8e5] border-[#f1d98a]",
    iconBox: "bg-[#fff0b8]",
    iconColor: "text-[#a77900]",
  },
  error: {
    icon: XCircle,
    box: "bg-[#fff0f0] border-[#f0c2c2]",
    iconBox: "bg-[#ffdede]",
    iconColor: "text-[#d43d3d]",
  },
  success: {
    icon: CheckCircle,
    box: "bg-[#eff8ed] border-[#cce4c9]",
    iconBox: "bg-[#ddefd9]",
    iconColor: "text-[#3f8d4c]",
  },
  info: {
    icon: Info,
    box: "bg-[#f0f7ff] border-[#c9dced]",
    iconBox: "bg-[#dcecff]",
    iconColor: "text-[#3972a8]",
  },
}

function Alerts() {
  const [alerts, setAlerts] = useState(initialAlerts)
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")

  const unreadCount = alerts.filter(
    (alert) => alert.status === "Unread"
  ).length

  const filteredAlerts = alerts.filter((alert) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Unread" && alert.status === "Unread") ||
      (filter === "Read" && alert.status === "Read") ||
      alert.type === filter

    const matchesSearch =
      alert.title.toLowerCase().includes(search.toLowerCase()) ||
      alert.message.toLowerCase().includes(search.toLowerCase()) ||
      alert.location.toLowerCase().includes(search.toLowerCase())

    return matchesFilter && matchesSearch
  })

  const markAsRead = (id) => {
    setAlerts((current) =>
      current.map((alert) =>
        alert.id === id ? { ...alert, status: "Read" } : alert
      )
    )
  }

  const markAllAsRead = () => {
    setAlerts((current) =>
      current.map((alert) => ({ ...alert, status: "Read" }))
    )
  }

  const removeAlert = (id) => {
    setAlerts((current) => current.filter((alert) => alert.id !== id))
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
            className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white"
          >
            <span>Alerts</span>
            {unreadCount > 0 && (
              <span className="rounded-full bg-[#b76537] px-2 py-0.5 text-xs">
                {unreadCount}
              </span>
            )}
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
        <header className="sticky top-0 z-20 border-b border-[#d5ddd3] bg-[#f7f4ea]/95 px-5 py-5 backdrop-blur md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">
                Alerts & Notifications
              </h1>
              <p className="mt-1 text-sm text-[#6b776f]">
                Monitor important system and procurement alerts
              </p>
            </div>

            <div className="relative rounded-xl border border-[#d5ddd3] bg-white p-3">
              <Bell size={21} />
              {unreadCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b76537] px-1 text-[10px] font-bold text-white">
                  {unreadCount}
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="space-y-6 p-5 md:p-8">
          {/* Summary */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eff8ed] text-[#174d35]">
                <Bell size={20} />
              </div>
              <p className="text-sm text-[#6b776f]">Total Alerts</p>
              <p className="mt-1 text-2xl font-bold">{alerts.length}</p>
            </div>

            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0b8] text-[#a77900]">
                <AlertTriangle size={20} />
              </div>
              <p className="text-sm text-[#6b776f]">Unread</p>
              <p className="mt-1 text-2xl font-bold">{unreadCount}</p>
            </div>

            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffdede] text-[#d43d3d]">
                <XCircle size={20} />
              </div>
              <p className="text-sm text-[#6b776f]">Critical</p>
              <p className="mt-1 text-2xl font-bold">
                {alerts.filter((a) => a.type === "error").length}
              </p>
            </div>

            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#ddefd9] text-[#3f8d4c]">
                <CheckCircle size={20} />
              </div>
              <p className="text-sm text-[#6b776f]">Resolved/Read</p>
              <p className="mt-1 text-2xl font-bold">
                {alerts.filter((a) => a.status === "Read").length}
              </p>
            </div>
          </section>

          {/* Filters */}
          <section className="rounded-2xl border border-[#d5ddd3] bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b776f]"
                />
                <input
                  type="text"
                  placeholder="Search alerts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#174d35]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="mr-1 flex items-center gap-2 text-sm text-[#6b776f]">
                  <Filter size={16} />
                  Filter
                </div>

                {["All", "Unread", "warning", "error", "success", "info"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => setFilter(item)}
                      className={`rounded-lg px-3 py-2 text-xs font-medium capitalize transition ${
                        filter === item
                          ? "bg-[#174d35] text-white"
                          : "bg-[#eff8ed] text-[#174d35] hover:bg-[#ddefd9]"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}

                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="ml-auto flex items-center gap-2 rounded-lg border border-[#d5ddd3] px-3 py-2 text-xs font-medium text-[#174d35] hover:bg-[#eff8ed]"
                  >
                    <Check size={15} />
                    Mark all read
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Alert List */}
          <section className="space-y-4">
            {filteredAlerts.length === 0 ? (
              <div className="rounded-2xl border border-[#d5ddd3] bg-white p-10 text-center">
                <Bell
                  size={35}
                  className="mx-auto mb-3 text-[#6b776f]"
                />
                <h3 className="font-semibold">No alerts found</h3>
                <p className="mt-1 text-sm text-[#6b776f]">
                  Try changing your search or filter.
                </p>
              </div>
            ) : (
              filteredAlerts.map((alert) => {
                const style = alertStyles[alert.type]
                const Icon = style.icon

                return (
                  <div
                    key={alert.id}
                    className={`rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${style.box} ${
                      alert.status === "Unread" ? "ring-1 ring-[#174d35]/10" : ""
                    }`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.iconBox}`}
                      >
                        <Icon size={21} className={style.iconColor} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-semibold">{alert.title}</h3>

                              {alert.status === "Unread" && (
                                <span className="rounded-full bg-[#174d35] px-2 py-0.5 text-[10px] font-semibold text-white">
                                  NEW
                                </span>
                              )}
                            </div>

                            <p className="mt-2 text-sm leading-6 text-[#59665e]">
                              {alert.message}
                            </p>
                          </div>

                          <button
                            onClick={() => removeAlert(alert.id)}
                            className="self-end rounded-lg p-1.5 text-[#6b776f] hover:bg-white/70 hover:text-[#183328] md:self-start"
                          >
                            <X size={17} />
                          </button>
                        </div>

                        <div className="mt-4 flex flex-col gap-3 border-t border-black/5 pt-3 text-xs text-[#6b776f] sm:flex-row sm:items-center">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {alert.location}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {alert.time}
                          </span>

                          <div className="sm:ml-auto">
                            {alert.status === "Unread" ? (
                              <button
                                onClick={() => markAsRead(alert.id)}
                                className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 font-medium text-[#174d35] shadow-sm hover:bg-[#eff8ed]"
                              >
                                <Check size={14} />
                                Mark as read
                              </button>
                            ) : (
                              <span className="flex items-center gap-1.5 text-[#3f8d4c]">
                                <CheckCircle size={14} />
                                Read
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </section>

          {/* System Monitoring */}
          <section className="rounded-2xl bg-[#174d35] p-6 text-white">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <h2 className="text-lg font-semibold">
                    System Monitoring
                  </h2>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                  Alerts are generated from procurement centres, queue
                  activity, farmer transactions and payment processing.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 px-5 py-4">
                <p className="text-xs text-white/60">System Status</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5eaf68]" />
                  <span className="font-medium">Operational</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Alerts