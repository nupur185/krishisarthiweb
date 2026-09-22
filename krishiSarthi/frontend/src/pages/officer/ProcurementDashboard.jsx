import { useEffect, useState } from "react"
import { Link } from "react-router"
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Clock3,
  PackageCheck,
  Bell,
  LogOut,
  Menu,
  X,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Scale,
  ClipboardCheck,
  ReceiptText,
  Activity,
} from "lucide-react"

// ------------------------------------------------------------
// INITIAL FARMER PIPELINE
// ------------------------------------------------------------

const initialFarmers = [
  {
    token: "A-07",
    farmer: "Ramesh Kumar",
    crop: "Paddy",
    quantity: "15 Qt",
    stage: "Receiving",
    status: "Serving",
  },
  {
    token: "A-08",
    farmer: "Suresh Kumar",
    crop: "Paddy",
    quantity: "12 Qt",
    stage: "Quality Check",
    status: "Serving",
  },
  {
    token: "A-09",
    farmer: "Mohan Singh",
    crop: "Wheat",
    quantity: "20 Qt",
    stage: "Registration",
    status: "Serving",
  },
  {
    token: "A-10",
    farmer: "Rajesh Yadav",
    crop: "Paddy",
    quantity: "18 Qt",
    stage: "Registration",
    status: "Waiting",
  },
  {
    token: "A-11",
    farmer: "Sunil Kumar",
    crop: "Wheat",
    quantity: "22 Qt",
    stage: "Registration",
    status: "Waiting",
  },
  {
    token: "A-12",
    farmer: "Vijay Kumar",
    crop: "Paddy",
    quantity: "16 Qt",
    stage: "Registration",
    status: "Waiting",
  },
  {
    token: "A-13",
    farmer: "Ramesh Kumar",
    crop: "Paddy",
    quantity: "42.5 Qt",
    stage: "Registration",
    status: "Waiting",
  },
]

// ------------------------------------------------------------
// COUNTERS
// ------------------------------------------------------------

const counters = [
  {
    name: "Counter 1",
    stage: "Registration",
    icon: Users,
  },
  {
    name: "Counter 2",
    stage: "Quality Check",
    icon: ClipboardCheck,
  },
  {
    name: "Counter 3",
    stage: "Weighment",
    icon: Scale,
  },
  {
    name: "Counter 4",
    stage: "Receiving",
    icon: ReceiptText,
  },
]

// ------------------------------------------------------------
// COMPONENT
// ------------------------------------------------------------

export default function ProcurementDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [farmers, setFarmers] =
    useState(initialFarmers)

  const [processedToday, setProcessedToday] =
    useState(31)

  const [currentTime, setCurrentTime] =
    useState(24)

  // ----------------------------------------------------------
  // PARALLEL PROCUREMENT PIPELINE
  // ----------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      setFarmers((currentFarmers) => {
        let updated = [...currentFarmers]

        // ----------------------------------------------------
        // RECEIVING → COMPLETED
        // ----------------------------------------------------

        const receivingIndex =
          updated.findIndex(
            (farmer) =>
              farmer.stage === "Receiving" &&
              farmer.status === "Serving"
          )

        if (receivingIndex !== -1) {
          updated.splice(
            receivingIndex,
            1
          )

          setProcessedToday(
            (value) => value + 1
          )
        }

        // ----------------------------------------------------
        // WEIGHMENT → RECEIVING
        // ----------------------------------------------------

        const weighmentIndex =
          updated.findIndex(
            (farmer) =>
              farmer.stage === "Weighment" &&
              farmer.status === "Serving"
          )

        if (weighmentIndex !== -1) {
          updated[weighmentIndex] = {
            ...updated[weighmentIndex],
            stage: "Receiving",
            status: "Serving",
          }
        }

        // ----------------------------------------------------
        // QUALITY → WEIGHMENT
        // ----------------------------------------------------

        const qualityIndex =
          updated.findIndex(
            (farmer) =>
              farmer.stage === "Quality Check" &&
              farmer.status === "Serving"
          )

        if (qualityIndex !== -1) {
          updated[qualityIndex] = {
            ...updated[qualityIndex],
            stage: "Weighment",
            status: "Serving",
          }
        }

        // ----------------------------------------------------
        // REGISTRATION → QUALITY
        // ----------------------------------------------------

        const registrationIndex =
          updated.findIndex(
            (farmer) =>
              farmer.stage === "Registration" &&
              farmer.status === "Serving"
          )

        if (registrationIndex !== -1) {
          updated[registrationIndex] = {
            ...updated[registrationIndex],
            stage: "Quality Check",
            status: "Serving",
          }
        }

        // ----------------------------------------------------
        // WAITING → REGISTRATION
        // ----------------------------------------------------

        const registrationBusy =
          updated.some(
            (farmer) =>
              farmer.stage === "Registration" &&
              farmer.status === "Serving"
          )

        if (!registrationBusy) {
          const nextWaiting =
            updated.findIndex(
              (farmer) =>
                farmer.stage === "Registration" &&
                farmer.status === "Waiting"
            )

          if (nextWaiting !== -1) {
            updated[nextWaiting] = {
              ...updated[nextWaiting],
              status: "Serving",
            }
          }
        }

        return updated
      })

      // Dynamic waiting time
      setCurrentTime((time) =>
        Math.max(8, time - 1)
      )
    }, 3000)

    return () =>
      clearInterval(interval)
  }, [])

  // ----------------------------------------------------------
  // COUNTER TOKEN
  // ----------------------------------------------------------

  const getCounterFarmer = (stage) => {
    return farmers.find(
      (farmer) =>
        farmer.stage === stage &&
        farmer.status === "Serving"
    )
  }

  // ----------------------------------------------------------
  // STATS
  // ----------------------------------------------------------

  const waitingFarmers =
    farmers.filter(
      (farmer) =>
        farmer.status === "Waiting"
    ).length

  const activeFarmers =
    farmers.filter(
      (farmer) =>
        farmer.status === "Serving"
    ).length

  const pendingRequests =
    farmers.filter(
      (farmer) =>
        farmer.status === "Waiting"
    ).length + 5

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
      value: waitingFarmers,
      icon: Clock3,
      bg: "bg-[#fff9df]",
      text: "text-[#8a7200]",
    },
    {
      title: "Processed Today",
      value: processedToday,
      icon: PackageCheck,
      bg: "bg-[#eff8ed]",
      text: "text-[#4d9657]",
    },
    {
      title: "Pending Requests",
      value: pendingRequests,
      icon: AlertTriangle,
      bg: "bg-[#fff2ed]",
      text: "text-[#b76537]",
    },
  ]

  // ----------------------------------------------------------
  // RETURN
  // ----------------------------------------------------------

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#183328]">

      {/* -------------------------------------------------- */}
      {/* MOBILE HEADER */}
      {/* -------------------------------------------------- */}

      <div className="flex items-center justify-between border-b border-[#d5ddd3] bg-white px-4 py-4 lg:hidden">

        <div>
          <h1 className="font-bold text-[#174d35]">
            KrishiSarthi
          </h1>

          <p className="text-xs text-[#6b776f]">
            Procurement Officer
          </p>
        </div>

        <button
          onClick={() =>
            setSidebarOpen(true)
          }
          className="rounded-lg p-2 hover:bg-[#eff8ed]"
        >
          <Menu size={22} />
        </button>

      </div>

      {/* -------------------------------------------------- */}
      {/* SIDEBAR OVERLAY */}
      {/* -------------------------------------------------- */}

      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* -------------------------------------------------- */}
      {/* SIDEBAR */}
      {/* -------------------------------------------------- */}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#123c2a] p-5 text-white transition-transform lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-xl font-bold">
              KrishiSarthi
            </h1>

            <p className="mt-1 text-xs text-white/60">
              Procurement Portal
            </p>

          </div>

          <button
            onClick={() =>
              setSidebarOpen(false)
            }
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

          <Link
            to="/officer/procurement/farmers"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10"
          >
            <Users size={18} />
            Farmers
          </Link>

          <Link
            to="/officer/procurement/bookings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10"
          >
            <CalendarCheck size={18} />
            Bookings
          </Link>

          <Link
            to="/officer/procurement/queue"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10"
          >
            <Clock3 size={18} />
            Live Queue
          </Link>

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

      {/* -------------------------------------------------- */}
      {/* MAIN */}
      {/* -------------------------------------------------- */}

      <main className="lg:ml-64">

        {/* TOPBAR */}
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

              <p className="text-sm font-semibold">
                Anil Kumar
              </p>

              <p className="text-xs text-[#6b776f]">
                Procurement Officer
              </p>

            </div>

          </div>

        </header>

        <div className="p-4 md:p-6 lg:p-8">

          {/* ------------------------------------------------ */}
          {/* LOCATION */}
          {/* ------------------------------------------------ */}

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

          {/* ------------------------------------------------ */}
          {/* STATS */}
          {/* ------------------------------------------------ */}

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
                    <Icon
                      size={20}
                      className={stat.text}
                    />
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

          {/* ------------------------------------------------ */}
          {/* LIVE COUNTERS */}
          {/* ------------------------------------------------ */}

          <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-5">

            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">

              <div>

                <div className="flex items-center gap-2">

                  <Activity
                    size={19}
                    className="text-[#174d35]"
                  />

                  <h3 className="font-semibold">
                    Live Centre Processing
                  </h3>

                </div>

                <p className="mt-1 text-xs text-[#6b776f]">
                  All four counters are processing farmers in parallel
                </p>

              </div>

              <div className="flex items-center gap-2 text-xs text-[#174d35]">

                <span className="h-2 w-2 animate-pulse rounded-full bg-[#5eaf68]" />

                LIVE

              </div>

            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">

              {counters.map((counter) => {

                const farmer =
                  getCounterFarmer(
                    counter.stage
                  )

                const Icon =
                  counter.icon

                return (
                  <CounterCard
                    key={counter.stage}
                    name={counter.name}
                    stage={counter.stage}
                    farmer={farmer}
                    Icon={Icon}
                  />
                )
              })}

            </div>

          </section>

          {/* ------------------------------------------------ */}
          {/* CURRENT PROCESSING TABLE */}
          {/* ------------------------------------------------ */}


          {/* Four Counter Queues */}
<div className="mt-6">
  <div className="mb-4">
    <h2 className="text-xl font-bold text-[#183328]">
      Live Procurement Queue
    </h2>
    <p className="text-sm text-[#6B776F] mt-1">
      All four counters are processing farmers in parallel
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

    {/* Registration Queue */}
    <div className="bg-white rounded-2xl border border-[#D5DDD3] shadow-sm overflow-hidden">
      <div className="px-4 py-4 bg-[#EFF8ED] border-b border-[#D5DDD3]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-[#174D35]">
              Registration
            </h3>
            <p className="text-xs text-[#6B776F] mt-1">
              Counter 1
            </p>
          </div>

          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#DDEFD9] text-[#174D35]">
            {farmers.filter(
              (f) => f.stage === "Registration"
            ).length}
          </span>
        </div>
      </div>

      <div className="p-3 space-y-3 max-h-[320px] overflow-y-auto">
        {farmers
          .filter((f) => f.stage === "Registration")
          .map((farmer) => (
            <div
              key={farmer.token}
              className={`p-3 rounded-xl border ${
                farmer.status === "Serving"
                  ? "border-[#5EAF68] bg-[#F3FAF1]"
                  : "border-[#D5DDD3] bg-[#FAFAF7]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#174D35]">
                  {farmer.token}
                </span>

                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-semibold ${
                    farmer.status === "Serving"
                      ? "bg-[#DDEFD9] text-[#174D35]"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {farmer.status}
                </span>
              </div>

              <p className="text-sm font-medium mt-2 text-[#183328]">
                {farmer.farmer}
              </p>

              <p className="text-xs text-[#6B776F] mt-1">
                {farmer.crop} • {farmer.quantity}
              </p>
            </div>
          ))}

        {farmers.filter((f) => f.stage === "Registration").length === 0 && (
          <p className="text-sm text-center text-[#6B776F] py-8">
            No farmers in queue
          </p>
        )}
      </div>
    </div>

    {/* Quality Check Queue */}
    <div className="bg-white rounded-2xl border border-[#D5DDD3] shadow-sm overflow-hidden">
      <div className="px-4 py-4 bg-[#EFF8ED] border-b border-[#D5DDD3]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-[#174D35]">
              Quality Check
            </h3>
            <p className="text-xs text-[#6B776F] mt-1">
              Counter 2
            </p>
          </div>

          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#DDEFD9] text-[#174D35]">
            {farmers.filter(
              (f) => f.stage === "Quality Check"
            ).length}
          </span>
        </div>
      </div>

      <div className="p-3 space-y-3 max-h-[320px] overflow-y-auto">
        {farmers
          .filter((f) => f.stage === "Quality Check")
          .map((farmer) => (
            <div
              key={farmer.token}
              className={`p-3 rounded-xl border ${
                farmer.status === "Serving"
                  ? "border-[#5EAF68] bg-[#F3FAF1]"
                  : "border-[#D5DDD3] bg-[#FAFAF7]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#174D35]">
                  {farmer.token}
                </span>

                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-semibold ${
                    farmer.status === "Serving"
                      ? "bg-[#DDEFD9] text-[#174D35]"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {farmer.status}
                </span>
              </div>

              <p className="text-sm font-medium mt-2 text-[#183328]">
                {farmer.farmer}
              </p>

              <p className="text-xs text-[#6B776F] mt-1">
                {farmer.crop} • {farmer.quantity}
              </p>
            </div>
          ))}

        {farmers.filter((f) => f.stage === "Quality Check").length === 0 && (
          <p className="text-sm text-center text-[#6B776F] py-8">
            No farmers in queue
          </p>
        )}
      </div>
    </div>

    {/* Weighment Queue */}
    <div className="bg-white rounded-2xl border border-[#D5DDD3] shadow-sm overflow-hidden">
      <div className="px-4 py-4 bg-[#EFF8ED] border-b border-[#D5DDD3]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-[#174D35]">
              Weighment
            </h3>
            <p className="text-xs text-[#6B776F] mt-1">
              Counter 3
            </p>
          </div>

          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#DDEFD9] text-[#174D35]">
            {farmers.filter(
              (f) => f.stage === "Weighment"
            ).length}
          </span>
        </div>
      </div>

      <div className="p-3 space-y-3 max-h-[320px] overflow-y-auto">
        {farmers
          .filter((f) => f.stage === "Weighment")
          .map((farmer) => (
            <div
              key={farmer.token}
              className={`p-3 rounded-xl border ${
                farmer.status === "Serving"
                  ? "border-[#5EAF68] bg-[#F3FAF1]"
                  : "border-[#D5DDD3] bg-[#FAFAF7]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#174D35]">
                  {farmer.token}
                </span>

                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-semibold ${
                    farmer.status === "Serving"
                      ? "bg-[#DDEFD9] text-[#174D35]"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {farmer.status}
                </span>
              </div>

              <p className="text-sm font-medium mt-2 text-[#183328]">
                {farmer.farmer}
              </p>

              <p className="text-xs text-[#6B776F] mt-1">
                {farmer.crop} • {farmer.quantity}
              </p>
            </div>
          ))}

        {farmers.filter((f) => f.stage === "Weighment").length === 0 && (
          <p className="text-sm text-center text-[#6B776F] py-8">
            No farmers in queue
          </p>
        )}
      </div>
    </div>

    {/* Receive Receipt Queue */}
    <div className="bg-white rounded-2xl border border-[#D5DDD3] shadow-sm overflow-hidden">
      <div className="px-4 py-4 bg-[#EFF8ED] border-b border-[#D5DDD3]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-[#174D35]">
              Receive Receipt
            </h3>
            <p className="text-xs text-[#6B776F] mt-1">
              Counter 4
            </p>
          </div>

          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#DDEFD9] text-[#174D35]">
            {farmers.filter(
              (f) => f.stage === "Receiving"
            ).length}
          </span>
        </div>
      </div>

      <div className="p-3 space-y-3 max-h-[320px] overflow-y-auto">
        {farmers
          .filter((f) => f.stage === "Receiving")
          .map((farmer) => (
            <div
              key={farmer.token}
              className={`p-3 rounded-xl border ${
                farmer.status === "Serving"
                  ? "border-[#5EAF68] bg-[#F3FAF1]"
                  : "border-[#D5DDD3] bg-[#FAFAF7]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#174D35]">
                  {farmer.token}
                </span>

                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-semibold ${
                    farmer.status === "Serving"
                      ? "bg-[#DDEFD9] text-[#174D35]"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {farmer.status}
                </span>
              </div>

              <p className="text-sm font-medium mt-2 text-[#183328]">
                {farmer.farmer}
              </p>

              <p className="text-xs text-[#6B776F] mt-1">
                {farmer.crop} • {farmer.quantity}
              </p>
            </div>
          ))}

        {farmers.filter((f) => f.stage === "Receiving").length === 0 && (
          <p className="text-sm text-center text-[#6B776F] py-8">
            No farmers in queue
          </p>
        )}
      </div>
    </div>

  </div>
</div>



          <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-5">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  Current Processing Queue
                </h3>

                <p className="mt-1 text-xs text-[#6b776f]">
                  Farmers currently moving through the procurement process
                </p>

              </div>

              <span className="rounded-full bg-[#eff8ed] px-3 py-1 text-xs font-semibold text-[#174d35]">
                {activeFarmersCount(farmers)} Active
              </span>

            </div>

            <div className="mt-5 overflow-x-auto">

              <table className="w-full min-w-[700px] text-left">

                <thead>

                  <tr className="border-b border-[#d5ddd3] text-xs text-[#6b776f]">

                    <th className="pb-3 font-medium">
                      Token
                    </th>

                    <th className="pb-3 font-medium">
                      Farmer
                    </th>

                    <th className="pb-3 font-medium">
                      Crop
                    </th>

                    <th className="pb-3 font-medium">
                      Quantity
                    </th>

                    <th className="pb-3 font-medium">
                      Current Stage
                    </th>

                    <th className="pb-3 font-medium">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {farmers.map(
                    (farmer) => (

                      <tr
                        key={farmer.token}
                        className={`border-b border-[#edf0eb] last:border-0 ${
                          farmer.token === "A-13"
                            ? "bg-[#eff8ed]"
                            : ""
                        }`}
                      >

                        <td className="py-4">

                          <span className="font-semibold text-[#174d35]">
                            {farmer.token}
                          </span>

                        </td>

                        <td className="py-4 text-sm">
                          {farmer.farmer}
                        </td>

                        <td className="py-4 text-sm">
                          {farmer.crop}
                        </td>

                        <td className="py-4 text-sm">
                          {farmer.quantity}
                        </td>

                        <td className="py-4">

                          <span className="rounded-full bg-[#f7f4ea] px-3 py-1 text-xs font-medium">
                            {farmer.stage}
                          </span>

                        </td>

                        <td className="py-4">

                          <StatusBadge
                            status={
                              farmer.status
                            }
                          />

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          </section>

          {/* ------------------------------------------------ */}
          {/* PROCESSING STATUS */}
          {/* ------------------------------------------------ */}

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            {/* Capacity */}

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
                    {processedToday} / 50 farmers processed today
                  </p>

                </div>

              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#dde8dc]">

                <div
                  className="h-full rounded-full bg-[#5eaf68] transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (processedToday /
                        50) *
                        100
                    )}%`,
                  }}
                />

              </div>

            </div>

            {/* Waiting time */}

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
                    Currently around{" "}
                    {currentTime} minutes
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

// ------------------------------------------------------------
// COUNTER CARD
// ------------------------------------------------------------

function CounterCard({
  name,
  stage,
  farmer,
  Icon,
}) {
  const active = Boolean(farmer)

  return (
    <div className="rounded-xl border border-[#d5ddd3] p-4">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <div className="rounded-lg bg-[#eff8ed] p-2">

            <Icon
              size={17}
              className="text-[#174d35]"
            />

          </div>

          <p className="text-sm font-semibold">
            {name}
          </p>

        </div>

        <span
          className={`flex items-center gap-1.5 text-xs font-medium ${
            active
              ? "text-[#174d35]"
              : "text-[#9aa29b]"
          }`}
        >

          <span
            className={`h-2 w-2 rounded-full ${
              active
                ? "animate-pulse bg-[#5eaf68]"
                : "bg-[#b8beb9]"
            }`}
          />

          {active
            ? "Active"
            : "Available"}

        </span>

      </div>

      <p className="mt-3 text-xs text-[#6b776f]">
        {stage}
      </p>

      <div className="mt-2">

        {farmer ? (

          <>
            <p className="text-base font-bold text-[#174d35]">
              {farmer.token}
            </p>

            <p className="mt-0.5 text-xs text-[#6b776f]">
              {farmer.farmer}
            </p>
          </>

        ) : (

          <p className="text-sm font-medium text-[#9aa29b]">
            No farmer currently serving
          </p>

        )}

      </div>

    </div>
  )
}

// ------------------------------------------------------------
// STATUS BADGE
// ------------------------------------------------------------

function StatusBadge({
  status,
}) {

  if (status === "Serving") {
    return (
      <span className="rounded-full bg-[#174d35] px-3 py-1 text-xs font-medium text-white">
        Serving
      </span>
    )
  }

  if (status === "Completed") {
    return (
      <span className="rounded-full bg-[#eff8ed] px-3 py-1 text-xs font-semibold text-[#4d9657]">
        Completed
      </span>
    )
  }

  return (
    <span className="rounded-full bg-[#f1f2ef] px-3 py-1 text-xs font-medium text-[#6b776f]">
      Waiting
    </span>
  )
}

// ------------------------------------------------------------
// ACTIVE FARMER COUNT
// ------------------------------------------------------------

function activeFarmersCount(
  farmers
) {
  return farmers.filter(
    (farmer) =>
      farmer.status === "Serving"
  ).length
}