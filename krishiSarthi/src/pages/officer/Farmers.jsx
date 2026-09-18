import { useState } from "react"
import { Link } from "react-router"
import {
  ArrowLeft,
  Search,
  UserCheck,
  Phone,
  MapPin,
  Sprout,
  Eye,
  X,
} from "lucide-react"

export default function Farmers() {
  const [search, setSearch] = useState("")
  const [selectedFarmer, setSelectedFarmer] = useState(null)

  const farmers = [
    {
      id: "FRM-BR-2026-01452",
      name: "Ramesh Kumar",
      mobile: "9876543210",
      village: "Kanti",
      district: "Muzaffarpur",
      crop: "Paddy",
      bookings: 4,
      status: "Verified",
    },
    {
      id: "FRM-BR-2026-01453",
      name: "Suresh Kumar",
      mobile: "9876543211",
      village: "Sakra",
      district: "Muzaffarpur",
      crop: "Paddy",
      bookings: 2,
      status: "Verified",
    },
    {
      id: "FRM-BR-2026-01454",
      name: "Mohan Singh",
      mobile: "9876543212",
      village: "Katra",
      district: "Muzaffarpur",
      crop: "Wheat",
      bookings: 3,
      status: "Verified",
    },
    {
      id: "FRM-BR-2026-01455",
      name: "Rajesh Prasad",
      mobile: "9876543213",
      village: "Minapur",
      district: "Muzaffarpur",
      crop: "Maize",
      bookings: 1,
      status: "Pending",
    },
  ]

  const filteredFarmers = farmers.filter(
    (farmer) =>
      farmer.name.toLowerCase().includes(search.toLowerCase()) ||
      farmer.id.toLowerCase().includes(search.toLowerCase()) ||
      farmer.mobile.includes(search)
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
                Farmer Management
              </h1>
              <p className="text-xs text-[#6b776f]">
                View registered farmers and procurement activity
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-sm text-[#6b776f] sm:flex">
            <UserCheck size={17} />
            1,248 Registered Farmers
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-4 md:p-8">

        {/* Stats */}
        <div className="mb-6 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5">
            <p className="text-sm text-[#6b776f]">
              Total Farmers
            </p>
            <p className="mt-1 text-2xl font-bold">
              1,248
            </p>
          </div>

          <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5">
            <p className="text-sm text-[#6b776f]">
              Verified
            </p>
            <p className="mt-1 text-2xl font-bold text-[#4d9657]">
              1,196
            </p>
          </div>

          <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5">
            <p className="text-sm text-[#6b776f]">
              Pending Verification
            </p>
            <p className="mt-1 text-2xl font-bold text-[#b76537]">
              52
            </p>
          </div>

        </div>

        {/* Farmer List */}
        <div className="rounded-2xl border border-[#d5ddd3] bg-white shadow-sm">

          <div className="flex flex-col justify-between gap-4 border-b border-[#d5ddd3] p-5 md:flex-row md:items-center">

            <div>
              <h2 className="text-lg font-bold">
                Registered Farmers
              </h2>
              <p className="mt-1 text-xs text-[#6b776f]">
                Search by farmer name, ID or mobile number
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
                placeholder="Search farmer..."
                className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#174d35] md:w-72"
              />
            </div>

          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#eff8ed] text-[#174d35]">
                <tr>
                  <th className="px-5 py-3 font-semibold">Farmer</th>
                  <th className="px-5 py-3 font-semibold">Farmer ID</th>
                  <th className="px-5 py-3 font-semibold">Location</th>
                  <th className="px-5 py-3 font-semibold">Crop</th>
                  <th className="px-5 py-3 font-semibold">Bookings</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredFarmers.map((farmer) => (
                  <tr
                    key={farmer.id}
                    className="border-t border-[#d5ddd3]"
                  >
                    <td className="px-5 py-4">
                      <p className="font-semibold">
                        {farmer.name}
                      </p>
                      <p className="mt-1 text-xs text-[#6b776f]">
                        {farmer.mobile}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-xs font-medium">
                      {farmer.id}
                    </td>

                    <td className="px-5 py-4">
                      {farmer.village}, {farmer.district}
                    </td>

                    <td className="px-5 py-4">
                      {farmer.crop}
                    </td>

                    <td className="px-5 py-4 font-semibold">
                      {farmer.bookings}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          farmer.status === "Verified"
                            ? "bg-[#eff8ed] text-[#4d9657]"
                            : "bg-[#fff9df] text-[#8a7200]"
                        }`}
                      >
                        {farmer.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() => setSelectedFarmer(farmer)}
                        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-[#174d35] hover:bg-[#eff8ed]"
                      >
                        <Eye size={15} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-3 p-4 md:hidden">
            {filteredFarmers.map((farmer) => (
              <div
                key={farmer.id}
                className="rounded-xl border border-[#d5ddd3] p-4"
              >
                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h3 className="font-bold">
                      {farmer.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#6b776f]">
                      {farmer.id}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      farmer.status === "Verified"
                        ? "bg-[#eff8ed] text-[#4d9657]"
                        : "bg-[#fff9df] text-[#8a7200]"
                    }`}
                  >
                    {farmer.status}
                  </span>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">

                  <div className="flex items-center gap-2 text-[#6b776f]">
                    <Phone size={14} />
                    {farmer.mobile}
                  </div>

                  <div className="flex items-center gap-2 text-[#6b776f]">
                    <Sprout size={14} />
                    {farmer.crop}
                  </div>

                  <div className="col-span-2 flex items-center gap-2 text-[#6b776f]">
                    <MapPin size={14} />
                    {farmer.village}, {farmer.district}
                  </div>

                </div>

                <button
                  onClick={() => setSelectedFarmer(farmer)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#174d35] py-2.5 text-xs font-semibold text-white"
                >
                  <Eye size={15} />
                  View Details
                </button>
              </div>
            ))}
          </div>

          {filteredFarmers.length === 0 && (
            <div className="p-10 text-center">
              <p className="font-semibold">
                No farmers found
              </p>
              <p className="mt-1 text-sm text-[#6b776f]">
                Try another search.
              </p>
            </div>
          )}

        </div>
      </main>

      {/* Farmer Details Modal */}
      {selectedFarmer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">

            <div className="flex items-center justify-between border-b border-[#d5ddd3] p-5">
              <div>
                <h2 className="text-lg font-bold">
                  Farmer Details
                </h2>
                <p className="text-xs text-[#6b776f]">
                  {selectedFarmer.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedFarmer(null)}
                className="rounded-full p-2 hover:bg-[#f7f4ea]"
              >
                <X size={19} />
              </button>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2">

              <div>
                <p className="text-xs text-[#6b776f]">Name</p>
                <p className="mt-1 text-sm font-semibold">
                  {selectedFarmer.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">Mobile</p>
                <p className="mt-1 text-sm font-semibold">
                  {selectedFarmer.mobile}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">Village</p>
                <p className="mt-1 text-sm font-semibold">
                  {selectedFarmer.village}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">District</p>
                <p className="mt-1 text-sm font-semibold">
                  {selectedFarmer.district}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">Primary Crop</p>
                <p className="mt-1 text-sm font-semibold">
                  {selectedFarmer.crop}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">Total Bookings</p>
                <p className="mt-1 text-sm font-semibold">
                  {selectedFarmer.bookings}
                </p>
              </div>

            </div>

            <div className="border-t border-[#d5ddd3] p-5">
              <button
                onClick={() => setSelectedFarmer(null)}
                className="w-full rounded-xl bg-[#174d35] py-3 text-sm font-semibold text-white hover:bg-[#123c2a]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}