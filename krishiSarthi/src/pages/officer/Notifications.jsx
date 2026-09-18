import { useState } from "react"
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Users,
  Clock3,
  Send,
  X,
} from "lucide-react"

const initialNotifications = [
  {
    id: 1,
    type: "queue",
    title: "Queue capacity is high",
    message:
      "17 farmers are currently waiting at Green Valley Procurement Centre.",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "booking",
    title: "New booking request",
    message:
      "Sunil Kumar has requested a procurement slot for 10:00 - 11:00 AM.",
    time: "12 min ago",
    unread: true,
  },
  {
    id: 3,
    type: "system",
    title: "Centre capacity updated",
    message:
      "Today's capacity has been updated successfully to 120 farmers.",
    time: "35 min ago",
    unread: false,
  },
  {
    id: 4,
    type: "farmer",
    title: "Farmer verification pending",
    message:
      "3 farmer registrations are waiting for physical verification.",
    time: "1 hr ago",
    unread: false,
  },
  {
    id: 5,
    type: "success",
    title: "Daily target progress",
    message:
      "The centre has completed 31 procurement transactions today.",
    time: "2 hrs ago",
    unread: false,
  },
]

export default function Notifications() {
  const [notifications, setNotifications] =
    useState(initialNotifications)
  const [showSendModal, setShowSendModal] = useState(false)

  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length

  const markAllRead = () => {
    setNotifications((current) =>
      current.map((item) => ({
        ...item,
        unread: false,
      }))
    )
  }

  const markRead = (id) => {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, unread: false }
          : item
      )
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f4ea] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-[#123c2a] text-white flex-col fixed inset-y-0 left-0">
        <div className="px-6 py-7 border-b border-white/10">
          <h1 className="text-2xl font-bold">
            KrishiSarthi
          </h1>

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
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10"
          >
            Reports
          </a>

          <a
            href="/officer/procurement/notifications"
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/15 text-white font-medium"
          >
            <span>Notifications</span>

            {unreadCount > 0 && (
              <span className="w-6 h-6 rounded-full bg-[#b76537] flex items-center justify-center text-xs">
                {unreadCount}
              </span>
            )}
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-64">
        <header className="bg-white border-b border-[#d5ddd3] px-5 md:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-[#183328]">
                  Notifications
                </h2>

                {unreadCount > 0 && (
                  <span className="px-2.5 py-1 rounded-full bg-[#ddefd9] text-[#27633d] text-xs font-medium">
                    {unreadCount} unread
                  </span>
                )}
              </div>

              <p className="text-sm text-[#6b776f] mt-1">
                Stay updated with centre activity and farmer requests
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={markAllRead}
                className="px-4 py-2.5 rounded-xl border border-[#d5ddd3] bg-white text-[#355341] text-sm font-medium"
              >
                Mark all as read
              </button>

              <button
                onClick={() => setShowSendModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#174d35] text-white text-sm font-medium"
              >
                <Send size={17} />
                Send Alert
              </button>
            </div>
          </div>
        </header>

        <div className="p-5 md:p-8">
          {/* Notification summary */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <SummaryCard
              icon={<Bell size={21} />}
              label="Total Alerts"
              value="24"
            />

            <SummaryCard
              icon={<AlertTriangle size={21} />}
              label="Important"
              value="5"
            />

            <SummaryCard
              icon={<Users size={21} />}
              label="Farmer Alerts"
              value="11"
            />

            <SummaryCard
              icon={<Clock3 size={21} />}
              label="Pending Actions"
              value="7"
            />
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl border border-[#d5ddd3] overflow-hidden">
            <div className="px-5 md:px-6 py-5 border-b border-[#e4e9e3]">
              <h3 className="font-semibold text-[#183328]">
                Recent Notifications
              </h3>
            </div>

            <div>
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onRead={markRead}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Send Alert Modal */}
      {showSendModal && (
        <SendAlertModal
          onClose={() => setShowSendModal(false)}
        />
      )}
    </div>
  )
}

function NotificationItem({ notification, onRead }) {
  const iconMap = {
    queue: <AlertTriangle size={20} />,
    booking: <Clock3 size={20} />,
    system: <CheckCircle2 size={20} />,
    farmer: <Users size={20} />,
    success: <CheckCircle2 size={20} />,
  }

  const iconStyle = {
    queue: "bg-[#fff4cf] text-[#8a6810]",
    booking: "bg-[#eff8ed] text-[#174d35]",
    system: "bg-[#ddefd9] text-[#27633d]",
    farmer: "bg-[#eff8ed] text-[#174d35]",
    success: "bg-[#ddefd9] text-[#27633d]",
  }

  return (
    <button
      onClick={() => onRead(notification.id)}
      className={`w-full text-left flex gap-4 p-5 md:px-6 border-b border-[#e8ece7] last:border-0 hover:bg-[#fafcf9] transition ${
        notification.unread ? "bg-[#f8fbf6]" : ""
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
          iconStyle[notification.type]
        }`}
      >
        {iconMap[notification.type]}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-[#183328]">
              {notification.title}
            </h4>

            {notification.unread && (
              <span className="w-2 h-2 rounded-full bg-[#b76537]" />
            )}
          </div>

          <span className="text-xs text-[#6b776f] whitespace-nowrap">
            {notification.time}
          </span>
        </div>

        <p className="text-sm text-[#6b776f] mt-1 leading-relaxed">
          {notification.message}
        </p>
      </div>
    </button>
  )
}

function SummaryCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-2xl border border-[#d5ddd3] p-5">
      <div className="w-10 h-10 rounded-xl bg-[#eff8ed] text-[#174d35] flex items-center justify-center">
        {icon}
      </div>

      <p className="text-sm text-[#6b776f] mt-4">
        {label}
      </p>

      <p className="text-2xl font-bold text-[#183328] mt-1">
        {value}
      </p>
    </div>
  )
}

function SendAlertModal({ onClose }) {
  const [audience, setAudience] = useState("All Farmers")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)

    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl">
        <div className="flex items-center justify-between p-5 border-b border-[#e0e5df]">
          <div>
            <h3 className="font-bold text-lg text-[#183328]">
              Send Alert
            </h3>

            <p className="text-sm text-[#6b776f] mt-1">
              Notify farmers about important updates
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#eff8ed]"
          >
            <X size={20} />
          </button>
        </div>

        {sent ? (
          <div className="p-10 text-center">
            <CheckCircle2
              size={42}
              className="mx-auto text-[#5eaf68]"
            />

            <p className="font-semibold text-[#183328] mt-4">
              Alert sent successfully
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#355341] mb-2">
                Audience
              </label>

              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#d5ddd3] bg-white outline-none focus:border-[#174d35]"
              >
                <option>All Farmers</option>
                <option>Today's Bookings</option>
                <option>Waiting Farmers</option>
                <option>Pending Requests</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#355341] mb-2">
                Message
              </label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Write your notification..."
                className="w-full px-4 py-3 rounded-xl border border-[#d5ddd3] resize-none outline-none focus:border-[#174d35]"
              />
            </div>

            <button
              type="submit"
              disabled={!message.trim()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#174d35] text-white font-medium disabled:opacity-40"
            >
              <Send size={18} />
              Send Notification
            </button>
          </form>
        )}
      </div>
    </div>
  )
}