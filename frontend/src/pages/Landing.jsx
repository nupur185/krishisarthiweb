import { Link } from "react-router"
import {
  Sprout,
  CalendarCheck,
  Clock3,
  Bell,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  BarChart3,
  MapPin,
} from "lucide-react"

function Landing() {
  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#183328]">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-[#d5ddd3] bg-[#f7f4ea]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#174d35] text-white">
              <Sprout size={22} />
            </div>

            <div>
              <h1 className="font-bold text-[#174d35]">KrishiSarthi</h1>
              <p className="hidden text-[11px] text-[#6b776f] sm:block">
                Smart Procurement Platform
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-[#b76537]">
              Home
            </a>
            <a href="#features" className="hover:text-[#b76537]">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-[#b76537]">
              How It Works
            </a>
            <a href="#about" className="hover:text-[#b76537]">
              About
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#174d35] hover:bg-[#eff8ed]"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-[#174d35] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#123c2a]"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ddefd9] px-4 py-2 text-xs font-semibold text-[#174d35]">
              <ShieldCheck size={15} />
              Transparent & Smart Procurement
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#123c2a] md:text-6xl">
              Smarter Procurement.
              <span className="block text-[#b76537]">
                Better for Farmers.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#6b776f] md:text-lg">
              KrishiSarthi connects farmers with procurement centres through
              smart slot booking, real-time queue tracking, notifications
              and transparent payment updates.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#174d35] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#123c2a]"
              >
                Get Started
                <ArrowRight size={17} />
              </Link>

              <a
                href="#how-it-works"
                className="flex items-center justify-center rounded-xl border border-[#d5ddd3] bg-white px-6 py-3.5 text-sm font-semibold text-[#174d35] hover:bg-[#eff8ed]"
              >
                How It Works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <div>
                <p className="text-2xl font-bold text-[#174d35]">24L+</p>
                <p className="text-[#6b776f]">Registered Farmers</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#174d35]">15K+</p>
                <p className="text-[#6b776f]">Active Centres</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#174d35]">99%+</p>
                <p className="text-[#6b776f]">Payment Processing</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#ddefd9] blur-2xl" />

            <div className="relative rounded-[2rem] bg-[#174d35] p-5 shadow-xl md:p-7">
              <div className="rounded-2xl bg-[#f7f4ea] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#6b776f]">
                      Today's Procurement
                    </p>
                    <h3 className="mt-1 text-xl font-bold">
                      Green Valley Centre
                    </h3>
                  </div>

                  <div className="rounded-xl bg-[#ddefd9] p-3 text-[#174d35]">
                    <MapPin size={21} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs text-[#6b776f]">Current Queue</p>
                    <p className="mt-1 text-2xl font-bold">17</p>
                    <p className="mt-1 text-xs text-[#5eaf68]">
                      Moderate
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs text-[#6b776f]">Avg. Wait</p>
                    <p className="mt-1 text-2xl font-bold">24 min</p>
                    <p className="mt-1 text-xs text-[#5eaf68]">
                      Live estimate
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      Your Slot
                    </span>
                    <span className="rounded-full bg-[#ddefd9] px-3 py-1 text-xs font-semibold text-[#174d35]">
                      Confirmed
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="rounded-xl bg-[#174d35] px-4 py-3 text-xl font-bold text-white">
                      A-13
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        10:00 – 11:00 AM
                      </p>
                      <p className="text-xs text-[#6b776f]">
                        12 September 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
<section id="features" className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-5 md:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold text-[#b76537]">
        PLATFORM FEATURES
      </p>

      <h2 className="mt-2 text-3xl font-bold text-[#123c2a] md:text-4xl">
        Everything in one place
      </h2>

      <p className="mt-4 text-sm leading-6 text-[#6b776f]">
        From booking a slot to receiving payment, every important
        step is visible to the farmer.
      </p>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          icon: CalendarCheck,
          title: "Smart Slot Booking",
          text: "Choose procurement centres and suitable arrival windows.",
        },
        {
          icon: Clock3,
          title: "Live Queue",
          text: "Track your queue position and estimated waiting time.",
        },
        {
          icon: Bell,
          title: "Smart Notifications",
          text: "Receive timely updates about slots, queues and payments.",
        },
        {
          icon: BarChart3,
          title: "Transparent Status",
          text: "Monitor procurement and payment progress from one dashboard.",
        },
      ].map((feature) => {
        const Icon = feature.icon

        return (
          <Link
            key={feature.title}
            to="/register"
            className="rounded-2xl border border-[#d5ddd3] bg-[#f7f4ea] p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ddefd9] text-[#174d35]">
              <Icon size={21} />
            </div>

            <h3 className="mt-5 font-semibold">{feature.title}</h3>

            <p className="mt-2 text-sm leading-6 text-[#6b776f]">
              {feature.text}
            </p>
          </Link>
        )
      })}
    </div>
  </div>
</section>

      {/* How it works */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-[#b76537]">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#123c2a] md:text-4xl">
              How KrishiSarthi works
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Register", "Create your farmer account and complete verification."],
              ["02", "Book Slot", "Select a centre and AI-assisted arrival window."],
              ["03", "Track Queue", "Follow your token and live estimated waiting time."],
              ["04", "Get Paid", "Track procurement and payment status transparently."],
            ].map(([number, title, text]) => (
              <div key={number} className="relative">
                <div className="rounded-2xl border border-[#d5ddd3] bg-white p-6 shadow-sm">
                  <span className="text-3xl font-bold text-[#d5ddd3]">
                    {number}
                  </span>

                  <h3 className="mt-4 font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#6b776f]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#123c2a] p-8 text-white md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#ddefd9]">
                <Smartphone size={19} />
                <span className="text-sm font-semibold">
                  Built for modern agriculture
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Make every procurement visit simpler.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/65">
                Reduce uncertainty, avoid unnecessary waiting and stay
                informed throughout the procurement journey.
              </p>
            </div>

            <Link
              to="/register"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#174d35] hover:bg-[#eff8ed]"
            >
              Register as Farmer
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d5ddd3] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-bold text-[#174d35]">KrishiSarthi</p>
            <p className="mt-1 text-xs text-[#6b776f]">
              Smart Procurement Ecosystem
            </p>
          </div>

          <p className="text-xs text-[#6b776f]">
            © 2026 KrishiSarthi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Landing