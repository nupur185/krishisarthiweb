import { Link, useNavigate } from "react-router"
import { useAuth } from "../../context/AuthContext"
import {
  CalendarDays,
  Ticket,
  Clock3,
  CreditCard,
  MessageSquareWarning,
  UserRound,
  ChevronRight,
  MapPin,
  Bell,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

function FarmerHome() {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-[#f7f4ea]">

      {/* Header */}
      <header className="border-b border-[#d5ddd3] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">

          <div>
            <h1 className="text-xl font-bold text-[#174d35]">
              KrishiSarthi
            </h1>

            <p className="text-xs text-[#6b776f]">
              Smart Procurement
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button className="relative rounded-full p-2 hover:bg-[#eff8ed]">
              <Bell size={25} className="text-[#174d35]" />

              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#e94b4b]" />
            </button>

            <button
              onClick={() => navigate("/farmer/profile")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ddefd9] hover:bg-[#cde6c8]"
            >
              <UserRound size={22} className="text-[#174d35]" />
            </button>

          </div>

        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 pb-24 sm:px-6">

        {/* Greeting */}
        <section className="mb-7">

          <p className="text-sm text-[#6b776f]">
            Welcome back
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#183328] sm:text-3xl">
            Hello, {user?.fullName || "Farmer"} 👋
          </h2>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#ddefd9] px-3 py-1.5 text-xs font-semibold text-[#174d35]">
            <CheckCircle2 size={14} />
            Farmer Profile Verified
          </div>

        </section>

        {/* Current Booking - shown when farmer has one booking */}
        {/* <section className="mb-7 overflow-hidden rounded-3xl bg-[#174d35] text-white shadow-sm">

          <div className="p-5 sm:p-6">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                  <CalendarDays size={14} />
                  Next Procurement Visit
                </div>

                <h3 className="text-xl font-bold sm:text-2xl">
                  Green Valley Procurement Center
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin size={15} />
                  Muzaffarpur, Bihar
                </div>
              </div>

              <span className="w-fit rounded-full bg-[#5eaf68] px-3 py-1.5 text-xs font-semibold">
                Confirmed
              </span>

            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">

              <BookingInfo
                icon={<CalendarDays size={18} />}
                label="Date"
                value="12 Sep 2026"
              />

              <BookingInfo
                icon={<Clock3 size={18} />}
                label="Time"
                value="10:00 – 11:00 AM"
              />

              <BookingInfo
                icon={<Ticket size={18} />}
                label="Token"
                value="A-13"
              />

            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/farmer/token"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#174d35] transition hover:bg-[#eff8ed]"
              >
                View My Token
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/farmer/live-queue"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Live Queue
                <Clock3 size={16} />
              </Link>

            </div>

          </div>

        </section> */}

        {/* Main Services */}
        <section className="mb-8">

          <div className="mb-4">
            <h3 className="text-xl font-bold text-[#183328]">
              What would you like to do?
            </h3>

            <p className="mt-1 text-sm text-[#6b776f]">
              Manage your procurement journey from one place.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

            {/* Book Slot - highlighted */}
            <Link
              to="/farmer/book-slot"
              className="group relative col-span-2 overflow-hidden rounded-2xl border border-[#174d35] bg-[#174d35] p-5 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-1"
            >

              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5" />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <CalendarDays size={23} />
                  </div>

                  <span className="flex items-center gap-1 rounded-full bg-[#5eaf68] px-2 py-1 text-[10px] font-bold">
                    <Sparkles size={11} />
                    AI
                  </span>

                </div>

                <h4 className="mt-4 text-base font-bold">
                  Book Slot
                </h4>

                <p className="mt-1 text-xs leading-5 text-white/70">
                  Smart slot allocation based on queue, distance & demand.
                </p>

                <div className="mt-3 flex items-center gap-1 text-xs font-semibold">
                  Get AI Recommendation
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

              </div>

            </Link>

            <MainAction
              to="/farmer/token"
              icon={<Ticket size={22} />}
              title="My Token"
              description="View your active token"
            />

            <MainAction
              to="/farmer/live-queue"
              icon={<Clock3 size={22} />}
              title="Live Queue"
              description="Track queue in real time"
            />

            <MainAction
              to="/farmer/payment"
              icon={<CreditCard size={22} />}
              title="Payments"
              description="Track procurement payments"
            />

            <MainAction
              to="/farmer/grievance"
              icon={<MessageSquareWarning size={22} />}
              title="Help & Grievance"
              description="Report an issue or get help"
            />

          </div>

        </section>

        {/* Smart Slot Allocation */}
        <section className="mb-7 rounded-3xl border border-[#c9ddc5] bg-[#eff8ed] p-5 sm:p-6">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#174d35] text-white">
                <Sparkles size={23} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#174d35]">
                    Smart Slot Allocation
                  </span>

                  <span className="rounded-full bg-[#ddefd9] px-2 py-0.5 text-[10px] font-bold text-[#174d35]">
                    AI Powered
                  </span>
                </div>

                <h3 className="mt-1 text-lg font-bold text-[#183328]">
                  Get the best time to visit
                </h3>

                <p className="mt-1 max-w-xl text-sm leading-5 text-[#6b776f]">
                  KrishiSarthi analyses centre distance, current queue,
                  available capacity and expected demand to recommend a
                  suitable arrival window.
                </p>
              </div>

            </div>

            <Link
              to="/farmer/book-slot"
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#174d35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123c2a]"
            >
              Find My Slot
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="mt-5 grid gap-3 border-t border-[#c9ddc5] pt-5 sm:grid-cols-3">

            <AIReason
              title="Queue"
              text="Current waiting load"
            />

            <AIReason
              title="Distance"
              text="Travel from your location"
            />

            <AIReason
              title="Demand"
              text="Expected centre congestion"
            />

          </div>

        </section>

        {/* Latest Updates */}
        <section>

          <div className="mb-4 flex items-center justify-between">

            <div>
              <h3 className="text-lg font-bold text-[#183328]">
                Latest Updates
              </h3>

              <p className="mt-1 text-xs text-[#6b776f]">
                Important information from your procurement centre
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm font-semibold text-[#174d35]">
              View all
              <ChevronRight size={16} />
            </button>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            <UpdateCard
              title="Procurement Centre Update"
              text="Green Valley Centre is currently operating normally."
            />

            <UpdateCard
              title="Payment Update"
              text="Your previous procurement payment has been processed."
            />

          </div>

        </section>

      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#d5ddd3] bg-white sm:hidden">

        <div className="grid grid-cols-5">

          <BottomNav
            to="/farmer/home"
            icon={<CalendarDays size={19} />}
            label="Home"
          />

          <BottomNav
            to="/farmer/live-queue"
            icon={<Clock3 size={19} />}
            label="Queue"
          />

          <BottomNav
            to="/farmer/token"
            icon={<Ticket size={19} />}
            label="Token"
          />

          <BottomNav
            to="/farmer/grievance"
            icon={<MessageSquareWarning size={19} />}
            label="Help"
          />

          <BottomNav
            to="/farmer/profile"
            icon={<UserRound size={19} />}
            label="Profile"
          />

        </div>

      </nav>

    </div>
  )
}

function BookingInfo({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">

      <div className="text-white/80">
        {icon}
      </div>

      <div>
        <p className="text-[11px] text-white/55">
          {label}
        </p>

        <p className="mt-0.5 text-sm font-semibold">
          {value}
        </p>
      </div>

    </div>
  )
}

function MainAction({ to, icon, title, description }) {
  return (
    <Link
      to={to}
      className="group min-h-36 rounded-2xl border border-[#d5ddd3] bg-white p-4 transition hover:-translate-y-1 hover:border-[#174d35] hover:bg-[#eff8ed] hover:shadow-sm"
    >

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff8ed] text-[#174d35] transition group-hover:bg-[#ddefd9]">
        {icon}
      </div>

      <h4 className="mt-4 text-sm font-bold text-[#183328]">
        {title}
      </h4>

      <p className="mt-1 text-xs leading-5 text-[#6b776f]">
        {description}
      </p>

      <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-[#174d35] opacity-0 transition group-hover:opacity-100">
        Open
        <ArrowRight size={12} />
      </div>

    </Link>
  )
}

function AIReason({ title, text }) {
  return (
    <div className="flex items-center gap-3">

      <div className="h-2.5 w-2.5 rounded-full bg-[#5eaf68]" />

      <div>
        <p className="text-xs font-bold text-[#183328]">
          {title}
        </p>

        <p className="text-xs text-[#6b776f]">
          {text}
        </p>
      </div>

    </div>
  )
}

function UpdateCard({ title, text }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[#d5ddd3] bg-white p-4">

      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#5eaf68]" />

      <div>
        <h4 className="text-sm font-semibold text-[#183328]">
          {title}
        </h4>

        <p className="mt-1 text-sm text-[#6b776f]">
          {text}
        </p>
      </div>

    </div>
  )
}

function BottomNav({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center gap-1 px-2 py-3 text-[#6b776f]"
    >
      {icon}

      <span className="text-[11px]">
        {label}
      </span>
    </Link>
  )
}

export default FarmerHome