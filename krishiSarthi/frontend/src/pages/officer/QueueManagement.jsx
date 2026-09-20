import { useState } from "react"
import { Link } from "react-router"
import {
  ArrowLeft,
  Search,
  Clock3,
  UserCheck,
  PackageCheck,
  PlayCircle,
  CheckCircle2,
  MapPin,
} from "lucide-react"

export default function QueueManagement() {
  const [search, setSearch] = useState("")
  const [activeQueue, setActiveQueue] = useState([
    {
      token: "A-13",
      farmer: "Ramesh Kumar",
      mobile: "9876543210",
      crop: "Paddy",
      quantity: "15 Qt",
      slot: "10:00 – 11:00 AM",
      status: "Waiting",
      wait: "8 min",
    },
    {
      token: "A-14",
      farmer: "Suresh Kumar",
      mobile: "9876543211",
      crop: "Paddy",
      quantity: "12 Qt",
      slot: "10:00 – 11:00 AM",
      status: "Waiting",
      wait: "18 min",
    },
    {
      token: "A-15",
      farmer: "Mohan Singh",
      mobile: "9876543212",
      crop: "Wheat",
      quantity: "20 Qt",
      slot: "11:00 – 12:00 PM",
      status: "Upcoming",
      wait: "32 min",
    },
  ])

  const updateStatus = (token, newStatus) => {
    setActiveQueue((queue) =>
      queue.map((item) =>
        item.token === token
          ? { ...item, status: newStatus }
          : item
      )
    )
  }

  const filteredQueue = activeQueue.filter(
    (item) =>
      item.token.toLowerCase().includes(search.toLowerCase()) ||
      item.farmer.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#183328]">

      {/* Header */}
      <header className="border-b border-[#d5ddd3] bg-white px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/officer/procurement"
              className="rounded-full p-2 hover:bg-[#eff8ed]"
            >
              <ArrowLeft size={21} />
            </Link>

            <div>
              <h1 className="text-xl font-bold">
                Queue Management
              </h1>
              <p className="text-xs text-[#6b776f]">
                Manage today's farmer queue
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-sm text-[#6b776f] sm:flex">
            <MapPin size={17} />
            Green Valley Procurement Center
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-4 md:p-8">

        {/* Queue Summary */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#eff8ed] p-3">
                <UserCheck size={20} className="text-[#174d35]" />
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">
                  Waiting
                </p>
                <p className="text-2xl font-bold">
                  17
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#fff9df] p-3">
                <Clock3 size={20} className="text-[#8a7200]" />
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">
                  Avg. Wait
                </p>
                <p className="text-2xl font-bold">
                  24 min
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#eff8ed] p-3">
                <PackageCheck size={20} className="text-[#5eaf68]" />
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">
                  Processed
                </p>
                <p className="text-2xl font-bold">
                  31
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#fff2ed] p-3">
                <Clock3 size={20} className="text-[#b76537]" />
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">
                  Centre Capacity
                </p>
                <p className="text-2xl font-bold">
                  62%
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Search */}
        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-[#d5ddd3] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="font-bold">
              Live Queue
            </h2>
            <p className="text-xs text-[#6b776f]">
              Update farmer status as they move through procurement
            </p>
          </div>

          <div className="relative">
            <Search
              size={17}
              className="absolute left-3 top-3 text-[#6b776f]"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search token or farmer"
              className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#174d35] sm:w-64"
            />
          </div>

        </div>

        {/* Queue Cards */}
        <div className="space-y-4">

          {filteredQueue.map((item, index) => (
            <div
              key={item.token}
              className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm"
            >

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* Farmer */}
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d35] font-bold text-white">
                    {item.token}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">
                        {item.farmer}
                      </h3>

                      {index === 0 &&
                        item.status === "Waiting" && (
                          <span className="rounded-full bg-[#eff8ed] px-2 py-1 text-[10px] font-bold text-[#4d9657]">
                            NEXT
                          </span>
                        )}
                    </div>

                    <p className="mt-1 text-xs text-[#6b776f]">
                      {item.mobile}
                    </p>
                  </div>

                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-4">

                  <div>
                    <p className="text-xs text-[#6b776f]">
                      Crop
                    </p>
                    <p className="font-semibold">
                      {item.crop}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#6b776f]">
                      Quantity
                    </p>
                    <p className="font-semibold">
                      {item.quantity}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#6b776f]">
                      Slot
                    </p>
                    <p className="font-semibold">
                      {item.slot}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#6b776f]">
                      Est. Wait
                    </p>
                    <p className="font-semibold">
                      {item.wait}
                    </p>
                  </div>

                </div>

                {/* Status */}
                <div className="flex items-center gap-3">

                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      item.status === "Waiting"
                        ? "bg-[#fff9df] text-[#8a7200]"
                        : item.status === "Serving"
                        ? "bg-[#eff8ed] text-[#174d35]"
                        : item.status === "Completed"
                        ? "bg-[#eff8ed] text-[#4d9657]"
                        : "bg-[#f1f3f1] text-[#6b776f]"
                    }`}
                  >
                    {item.status}
                  </span>

                  {item.status === "Waiting" && (
                    <button
                      onClick={() =>
                        updateStatus(item.token, "Serving")
                      }
                      className="flex items-center gap-2 rounded-xl bg-[#174d35] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#123c2a]"
                    >
                      <PlayCircle size={15} />
                      Serve
                    </button>
                  )}

                  {item.status === "Serving" && (
                    <button
                      onClick={() =>
                        updateStatus(item.token, "Completed")
                      }
                      className="flex items-center gap-2 rounded-xl bg-[#5eaf68] px-4 py-2.5 text-xs font-semibold text-white hover:opacity-90"
                    >
                      <CheckCircle2 size={15} />
                      Complete
                    </button>
                  )}

                  {item.status === "Completed" && (
                    <span className="text-xs font-semibold text-[#4d9657]">
                      Done
                    </span>
                  )}

                </div>

              </div>
            </div>
          ))}

          {filteredQueue.length === 0 && (
            <div className="rounded-2xl border border-[#d5ddd3] bg-white p-10 text-center">
              <p className="font-semibold">
                No farmers found
              </p>
              <p className="mt-1 text-sm text-[#6b776f]">
                Try searching with another token or farmer name.
              </p>
            </div>
          )}

        </div>

      </main>
    </div>
  )
}