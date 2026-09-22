import { useState } from "react"
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  MapPin,
  Save,
  CheckCircle2,
} from "lucide-react"

export default function Settings() {
  const [saved, setSaved] = useState(false)

  const [profile, setProfile] = useState({
    name: "Raj Kumar",
    email: "raj.kumar@krishisarthi.gov.in",
    phone: "+91 98765 43210",
    centre: "Green Valley Procurement Centre",
  })

  const [notifications, setNotifications] = useState({
    newBookings: true,
    queueAlerts: true,
    farmerRequests: true,
    dailySummary: false,
  })

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 2500)
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
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10"
          >
            Notifications
          </a>

          <a
            href="/officer/procurement/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/15 text-white font-medium"
          >
            <SettingsIcon size={18} />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-64">
        <header className="bg-white border-b border-[#d5ddd3] px-5 md:px-8 py-5">
          <h2 className="text-2xl font-bold text-[#183328]">
            Settings
          </h2>

          <p className="text-sm text-[#6b776f] mt-1">
            Manage your officer account and notification preferences
          </p>
        </header>

        <div className="p-5 md:p-8 max-w-5xl">
          {saved && (
            <div className="mb-5 flex items-center gap-3 bg-[#ddefd9] text-[#27633d] px-4 py-3 rounded-xl">
              <CheckCircle2 size={19} />
              Settings saved successfully.
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            {/* Profile */}
            <section className="bg-white rounded-2xl border border-[#d5ddd3]">
              <div className="p-6 border-b border-[#e4e9e3]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eff8ed] text-[#174d35] flex items-center justify-center">
                    <User size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#183328]">
                      Officer Profile
                    </h3>

                    <p className="text-sm text-[#6b776f] mt-1">
                      Your account information
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-5">
                <Input
                  label="Full Name"
                  value={profile.name}
                  onChange={(value) =>
                    setProfile({
                      ...profile,
                      name: value,
                    })
                  }
                />

                <Input
                  label="Email Address"
                  type="email"
                  value={profile.email}
                  onChange={(value) =>
                    setProfile({
                      ...profile,
                      email: value,
                    })
                  }
                />

                <Input
                  label="Phone Number"
                  value={profile.phone}
                  onChange={(value) =>
                    setProfile({
                      ...profile,
                      phone: value,
                    })
                  }
                />

                <div>
                  <label className="block text-sm font-medium text-[#355341] mb-2">
                    Assigned Centre
                  </label>

                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#d5ddd3] bg-[#f7f4ea]">
                    <MapPin
                      size={18}
                      className="text-[#174d35]"
                    />

                    <span className="text-sm text-[#183328]">
                      {profile.centre}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="bg-white rounded-2xl border border-[#d5ddd3]">
              <div className="p-6 border-b border-[#e4e9e3]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eff8ed] text-[#174d35] flex items-center justify-center">
                    <Bell size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#183328]">
                      Notifications
                    </h3>

                    <p className="text-sm text-[#6b776f] mt-1">
                      Choose which alerts you receive
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-[#e8ece7]">
                <Toggle
                  title="New booking requests"
                  description="Get notified when a farmer submits a booking request."
                  checked={notifications.newBookings}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      newBookings: !notifications.newBookings,
                    })
                  }
                />

                <Toggle
                  title="Queue capacity alerts"
                  description="Receive alerts when the centre queue becomes busy."
                  checked={notifications.queueAlerts}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      queueAlerts: !notifications.queueAlerts,
                    })
                  }
                />

                <Toggle
                  title="Farmer requests"
                  description="Get notified about farmer support and verification requests."
                  checked={notifications.farmerRequests}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      farmerRequests: !notifications.farmerRequests,
                    })
                  }
                />

                <Toggle
                  title="Daily summary"
                  description="Receive a daily summary of centre activity."
                  checked={notifications.dailySummary}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      dailySummary: !notifications.dailySummary,
                    })
                  }
                />
              </div>
            </section>

            {/* Security */}
            <section className="bg-white rounded-2xl border border-[#d5ddd3]">
              <div className="p-6 border-b border-[#e4e9e3]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eff8ed] text-[#174d35] flex items-center justify-center">
                    <Shield size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#183328]">
                      Security
                    </h3>

                    <p className="text-sm text-[#6b776f] mt-1">
                      Manage account security
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-medium text-[#183328]">
                    Password
                  </p>

                  <p className="text-sm text-[#6b776f] mt-1">
                    Last changed 30 days ago
                  </p>
                </div>

                <button
                  type="button"
                  className="px-4 py-2.5 rounded-xl border border-[#d5ddd3] text-sm font-medium text-[#355341] hover:bg-[#eff8ed]"
                >
                  Change Password
                </button>
              </div>
            </section>

            {/* Save */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#174d35] text-white font-medium hover:bg-[#123c2a]"
              >
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

function Input({
  label,
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-[#d5ddd3] outline-none focus:border-[#174d35]"
      />
    </div>
  )
}

function Toggle({
  title,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between gap-5 p-5 md:px-6">
      <div>
        <p className="font-medium text-[#183328]">
          {title}
        </p>

        <p className="text-sm text-[#6b776f] mt-1">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onChange}
        className={`w-12 h-7 rounded-full p-1 shrink-0 transition ${
          checked ? "bg-[#174d35]" : "bg-[#cbd3ca]"
        }`}
      >
        <span
          className={`block w-5 h-5 bg-white rounded-full transition ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  )
}