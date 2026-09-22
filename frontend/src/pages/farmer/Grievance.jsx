import { useState } from "react"
import { useNavigate } from "react-router"
import {
  ArrowLeft,
  MessageSquareWarning,
  Send,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Calendar,
  Building2,
  Users,
  UserCheck,
  HelpCircle,
} from "lucide-react"

export default function Grievance() {
  const navigate = useNavigate()

  // Predefined categories with corresponding visual icons
  const categories = [
    { label: "Payment Issue", icon: AlertCircle },
    { label: "Slot Booking Issue", icon: Calendar },
    { label: "Procurement Centre Issue", icon: Building2 },
    { label: "Queue / Waiting Issue", icon: Users },
    { label: "Farmer Registration Issue", icon: UserCheck },
    { label: "Other", icon: HelpCircle },
  ]

  const [category, setCategory] = useState("Payment Issue")
  const [description, setDescription] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description.trim()) return

    console.log({
      category,
      description,
    })

    setSubmitted(true)
    setDescription("")
  }

  return (
    <div className="min-h-screen bg-[#f7f4ea] px-4 py-5 text-[#183328] md:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => navigate("/farmer/home")}
            className="rounded-full bg-white p-2.5 shadow-sm transition hover:bg-[#eff8ed]"
          >
            <ArrowLeft size={21} />
          </button>

          <div>
            <h1 className="text-2xl font-bold">Grievance</h1>
            <p className="text-sm text-[#6b776f]">
              Report an issue or request support
            </p>
          </div>
        </div>

        {/* Success Alert */}
        {submitted && (
          <div className="mb-5 flex items-start gap-3 rounded-2xl border border-[#b9d9bd] bg-[#eff8ed] p-4">
            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0 text-[#5eaf68]"
            />

            <div>
              <p className="text-sm font-semibold text-[#174d35]">
                Grievance submitted successfully
              </p>
              <p className="mt-1 text-xs text-[#5d6f63]">
                Your complaint has been registered. You can track its status
                below.
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-[#eff8ed] p-3">
              <MessageSquareWarning
                size={22}
                className="text-[#174d35]"
              />
            </div>

            <div>
              <h2 className="font-bold">Raise a Grievance</h2>
              <p className="text-xs text-[#6b776f]">
                Tell us what went wrong
              </p>
            </div>
          </div>

          {/* Issue Category Options Grid */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold">
              Select Issue Category
            </label>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
              {categories.map((item) => {
                const IconComponent = item.icon
                const isSelected = category === item.label

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setCategory(item.label)}
                    className={`flex items-center gap-2.5 rounded-xl border p-3 text-left text-xs font-semibold transition-all ${
                      isSelected
                        ? "border-[#174d35] bg-[#eff8ed] text-[#174d35] shadow-sm"
                        : "border-[#d5ddd3] bg-[#f7f4ea]/60 text-[#4c5c52] hover:bg-[#eff8ed]/50"
                    }`}
                  >
                    <IconComponent
                      size={16}
                      className={isSelected ? "text-[#174d35]" : "text-[#7a8a80]"}
                    />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Description */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your issue in detail..."
              rows={4}
              className="w-full resize-none rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] px-4 py-3 text-sm outline-none placeholder:text-[#8b968f] focus:border-[#174d35]"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#174d35] px-4 py-3 font-semibold text-white transition hover:bg-[#123c2a]"
          >
            <Send size={17} />
            Submit Grievance
          </button>
        </form>

        {/* Previous Grievances */}
        <div className="mt-5 rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-bold">My Grievances</h2>

          <div className="space-y-4">

            <div className="rounded-xl border border-[#d5ddd3] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">
                    Payment Issue
                  </p>
                  <p className="mt-1 text-xs text-[#6b776f]">
                    GRV-2026-0148 · 10 Sep 2026
                  </p>
                </div>

                <span className="flex items-center gap-1 rounded-full bg-[#fff9df] px-3 py-1 text-xs font-semibold text-[#8a7200]">
                  <Clock3 size={13} />
                  In Review
                </span>
              </div>

              <p className="mt-3 text-sm text-[#5d6f63]">
                Payment for previous procurement has not been reflected yet.
              </p>
            </div>

            <div className="rounded-xl border border-[#d5ddd3] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">
                    Slot Booking Issue
                  </p>
                  <p className="mt-1 text-xs text-[#6b776f]">
                    GRV-2026-0112 · 05 Sep 2026
                  </p>
                </div>

                <span className="flex items-center gap-1 rounded-full bg-[#eff8ed] px-3 py-1 text-xs font-semibold text-[#4d9657]">
                  <CheckCircle2 size={13} />
                  Resolved
                </span>
              </div>

              <p className="mt-3 text-sm text-[#5d6f63]">
                Slot timing was successfully corrected by the centre.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}