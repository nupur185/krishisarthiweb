import { useState } from "react"
import {
  ArrowLeft,
  IndianRupee,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  Search,
  Download,
  Filter,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react"
import { Link } from "react-router"

const payments = [
  {
    id: "PAY-582941",
    farmer: "Ramesh Kumar",
    farmerId: "FRM-10284",
    district: "Muzaffarpur",
    amount: "₹84,210",
    date: "12 Sep 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    id: "PAY-582942",
    farmer: "Suresh Prasad",
    farmerId: "FRM-10321",
    district: "Muzaffarpur",
    amount: "₹1,36,425",
    date: "12 Sep 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    id: "PAY-582943",
    farmer: "Rajesh Kumar",
    farmerId: "FRM-10456",
    district: "Muzaffarpur",
    amount: "₹72,890",
    date: "11 Sep 2026",
    method: "Bank Transfer",
    status: "Pending",
  },
  {
    id: "PAY-582944",
    farmer: "Mohan Singh",
    farmerId: "FRM-10872",
    district: "Muzaffarpur",
    amount: "₹1,02,340",
    date: "11 Sep 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    id: "PAY-582945",
    farmer: "Vijay Kumar",
    farmerId: "FRM-10943",
    district: "Muzaffarpur",
    amount: "₹1,52,760",
    date: "10 Sep 2026",
    method: "Bank Transfer",
    status: "Review",
  },
]

export default function PaymentsOverview() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("All Status")
  const [district, setDistrict] = useState("All Districts")

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(search.toLowerCase()) ||
      payment.farmer.toLowerCase().includes(search.toLowerCase()) ||
      payment.farmerId.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      status === "All Status" || payment.status === status

    const matchesDistrict =
      district === "All Districts" || payment.district === district

    return matchesSearch && matchesStatus && matchesDistrict
  })

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-[#183328]">
      {/* Header */}
      <header className="border-b border-[#d5ddd3] bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <Link
              to="/government/dashboard"
              className="rounded-xl border border-[#d5ddd3] p-2.5 hover:bg-[#eff8ed]"
            >
              <ArrowLeft size={19} />
            </Link>

            <div>
              <h1 className="text-xl font-bold text-[#174d35]">
                Payment Overview
              </h1>
              <p className="mt-1 text-xs text-[#6b776f]">
                Government payment monitoring
              </p>
            </div>
          </div>

          <button className="hidden items-center gap-2 rounded-xl bg-[#174d35] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#123c2a] sm:flex">
            <Download size={17} />
            Export Payments
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] p-5 md:p-8">
        {/* Title */}
        <div className="mb-7">
          <p className="text-sm text-[#6b776f]">Bihar State Procurement</p>

          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Payment Monitoring
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-[#6b776f]">
            Track MSP payments, pending transactions and payment
            reconciliation across procurement operations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="MSP Payable"
            value="₹37,537.85 Cr"
            subtitle="Total amount payable"
            icon={IndianRupee}
          />

          <StatCard
            title="Amount Paid"
            value="₹37,537.82 Cr"
            subtitle="99.99% processed"
            icon={CheckCircle2}
          />

          <StatCard
            title="Pending Payments"
            value="₹2.84 Cr"
            subtitle="Awaiting processing"
            icon={Clock3}
          />

          <StatCard
            title="Under Review"
            value="₹48.6 L"
            subtitle="Transactions requiring review"
            icon={AlertTriangle}
          />
        </div>

        {/* Payment Progress */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-6">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h3 className="font-bold">Payment Completion</h3>
              <p className="mt-1 text-sm text-[#6b776f]">
                Overall MSP payment processing status
              </p>
            </div>

            <span className="rounded-full bg-[#eff8ed] px-3 py-1.5 text-xs font-semibold text-[#43844c]">
              99.99% Completed
            </span>
          </div>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-[#e7ebe5]">
            <div
              className="h-full rounded-full bg-[#174d35]"
              style={{ width: "99.99%" }}
            />
          </div>

          <div className="mt-4 flex flex-col justify-between gap-2 text-xs text-[#6b776f] sm:flex-row">
            <span>₹37,537.82 Cr paid</span>
            <span>₹2.84 Cr remaining</span>
          </div>
        </section>

        {/* Filters */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-5">
          <div className="mb-4 flex items-center gap-2">
            <Filter size={18} className="text-[#174d35]" />
            <h3 className="font-bold">Search & Filters</h3>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-xs font-semibold text-[#6b776f]">
                Search Payment
              </label>

              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-3 top-3 text-[#8a948e]"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Payment ID, farmer name..."
                  className="w-full rounded-xl border border-[#d5ddd3] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#174d35]"
                />
              </div>
            </div>

            <FilterSelect
              label="District"
              value={district}
              onChange={setDistrict}
              options={[
                "All Districts",
                "Muzaffarpur",
                "Vaishali",
                "Samastipur",
              ]}
            />

            <FilterSelect
              label="Payment Status"
              value={status}
              onChange={setStatus}
              options={[
                "All Status",
                "Paid",
                "Pending",
                "Review",
              ]}
            />
          </div>
        </section>

        {/* Payment Table */}
        <section className="mt-6 rounded-2xl border border-[#d5ddd3] bg-white p-6">
          <div className="mb-5">
            <h3 className="font-bold">Recent Payment Transactions</h3>
            <p className="mt-1 text-sm text-[#6b776f]">
              Showing {filteredPayments.length} transactions
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#d5ddd3] text-xs uppercase tracking-wide text-[#6b776f]">
                  <th className="px-4 py-3">Payment</th>
                  <th className="px-4 py-3">Farmer</th>
                  <th className="px-4 py-3">District</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-[#eef1ed] last:border-0"
                  >
                    <td className="px-4 py-4">
                      <p className="text-sm font-semibold">{payment.id}</p>
                    </td>

                    <td className="px-4 py-4">
                      <p className="text-sm font-semibold">
                        {payment.farmer}
                      </p>
                      <p className="mt-1 text-xs text-[#6b776f]">
                        {payment.farmerId}
                      </p>
                    </td>

                    <td className="px-4 py-4 text-sm">
                      {payment.district}
                    </td>

                    <td className="px-4 py-4 text-sm font-bold">
                      {payment.amount}
                    </td>

                    <td className="px-4 py-4 text-sm">
                      {payment.date}
                    </td>

                    <td className="px-4 py-4 text-sm">
                      {payment.method}
                    </td>

                    <td className="px-4 py-4">
                      <StatusBadge status={payment.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="space-y-3 md:hidden">
            {filteredPayments.map((payment) => (
              <div
                key={payment.id}
                className="rounded-xl border border-[#d5ddd3] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold">{payment.id}</p>
                    <p className="mt-1 text-sm font-semibold">
                      {payment.farmer}
                    </p>
                    <p className="mt-1 text-xs text-[#6b776f]">
                      {payment.farmerId}
                    </p>
                  </div>

                  <StatusBadge status={payment.status} />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Info label="Amount" value={payment.amount} />
                  <Info label="Date" value={payment.date} />
                  <Info label="District" value={payment.district} />
                  <Info label="Method" value={payment.method} />
                </div>
              </div>
            ))}
          </div>

          {filteredPayments.length === 0 && (
            <div className="py-12 text-center text-sm text-[#6b776f]">
              No payment transactions found.
            </div>
          )}
        </section>

        {/* Reconciliation */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#d5ddd3] bg-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Payment Reconciliation</h3>
                <p className="mt-1 text-sm text-[#6b776f]">
                  Transaction matching status
                </p>
              </div>

              <div className="rounded-xl bg-[#eff8ed] p-3 text-[#174d35]">
                <CheckCircle2 size={20} />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <ProgressRow
                label="Successfully reconciled"
                value="98.7%"
                progress={98.7}
              />

              <ProgressRow
                label="Pending reconciliation"
                value="1.1%"
                progress={1.1}
              />

              <ProgressRow
                label="Exceptions"
                value="0.2%"
                progress={0.2}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[#d5ddd3] bg-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Payment Insights</h3>
                <p className="mt-1 text-sm text-[#6b776f]">
                  Current payment activity
                </p>
              </div>

              <ArrowUpRight size={20} className="text-[#174d35]" />
            </div>

            <div className="mt-6 space-y-4">
              <Insight
                label="Payments processed today"
                value="₹18.42 Cr"
              />

              <Insight
                label="Average processing time"
                value="1.8 Days"
              />

              <Insight
                label="Successful transactions"
                value="99.6%"
              />

              <Insight
                label="Farmers paid"
                value="23,41,802"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[#6b776f]">{title}</p>
          <h3 className="mt-2 text-2xl font-bold">{value}</h3>
          <p className="mt-2 text-xs text-[#6b776f]">{subtitle}</p>
        </div>

        <div className="rounded-xl bg-[#eff8ed] p-3 text-[#174d35]">
          <Icon size={21} />
        </div>
      </div>
    </div>
  )
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#6b776f]">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-[#d5ddd3] bg-white px-4 py-2.5 pr-10 text-sm outline-none focus:border-[#174d35]"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-3 text-[#6b776f]"
        />
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const styles = {
    Paid: "bg-[#eff8ed] text-[#43844c]",
    Pending: "bg-[#fff3d4] text-[#8a6900]",
    Review: "bg-[#ffe7e7] text-[#c73838]",
  }

  return (
    <span
      className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  )
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-[#6b776f]">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  )
}

function ProgressRow({ label, value, progress }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs">
        <span className="text-[#6b776f]">{label}</span>
        <span className="font-semibold">{value}</span>
      </div>

      <div className="h-2 rounded-full bg-[#e7ebe5]">
        <div
          className="h-2 rounded-full bg-[#174d35]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

function Insight({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-[#eef1ed] pb-3 last:border-0">
      <span className="text-sm text-[#6b776f]">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  )
}