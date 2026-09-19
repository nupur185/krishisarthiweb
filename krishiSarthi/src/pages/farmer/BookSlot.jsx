import { useRef, useState } from "react"
import { Link } from "react-router"
import {
  MapPin,
  Clock3,
  Navigation,
  CheckCircle2,
  Sparkles,
  Route,
  Users,
  ArrowRight,
  ArrowLeft
} from "lucide-react"

const centres = [
  {
    id: 1,
    name: "Green Valley Procurement Center",
    distance: "4.2 km",
    wait: "20–30 min",
    slots: 12,
    demand: "Moderate",
    recommended: true,
  },
  {
    id: 2,
    name: "Sadar Procurement Centre",
    distance: "6.8 km",
    wait: "35–45 min",
    slots: 6,
    demand: "High",
    recommended: false,
  },
  {
    id: 3,
    name: "Kanti Procurement Centre",
    distance: "12 km",
    wait: "15–20 min",
    slots: 18,
    demand: "Low",
    recommended: false,
  },
]

const timeSlots = [
  {
    time: "09:00 AM – 10:00 AM",
    wait: "25–35 min",
  },
  {
    time: "10:00 AM – 11:00 AM",
    wait: "20–30 min",
  },
  {
    time: "11:00 AM – 12:00 PM",
    wait: "15–25 min",
    recommended: true,
  },
  {
    time: "12:00 PM – 01:00 PM",
    wait: "30–40 min",
  },
]

function BookSlot() {
  const [selectedCentre, setSelectedCentre] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const timeSlotRef = useRef(null)

  const handleConfirm = () => {
    if (!selectedCentre || !selectedSlot) return
    setShowConfirmation(true)
  }

  return (
    <div className="min-h-screen bg-[#f7f4ea]">

      {/* Header */}
      <header className="border-b border-[#d5ddd3] bg-white">
  <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-4 sm:px-6">

    <Link
      to="/farmer/home"
      className="rounded-lg p-2 text-[#174d35] hover:bg-[#eff8ed]"
    >
      <ArrowLeft size={20} />
    </Link>

    <div>
      <h1 className="text-xl font-bold text-[#174d35]">
        KrishiSarthi
      </h1>

      <p className="text-xs text-[#6b776f]">
        Smart Procurement
      </p>
    </div>

  </div>
</header>

      <main className="mx-auto max-w-5xl px-4 py-6 pb-28 sm:px-6">

        {/* Heading */}
        <section className="mb-6">
          <div className="flex items-center gap-2 text-[#174d35]">
            <Sparkles size={18} />

            <span className="text-xs font-bold uppercase tracking-wide">
              AI Smart Allocation
            </span>
          </div>

          <h2 className="mt-2 text-2xl font-bold text-[#183328] sm:text-3xl">
            Find your best procurement slot
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6b776f]">
            KrishiSarthi compares distance, current waiting time, centre
            capacity and expected demand to suggest a suitable centre and
            arrival window for you.
          </p>
        </section>

        {/* Location */}
        <section className="mb-6 rounded-2xl border border-[#d5ddd3] bg-white p-4 sm:p-5">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff8ed] text-[#174d35]">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">
                  Your location
                </p>

                <p className="mt-1 font-semibold text-[#183328]">
                  Muzaffarpur, Bihar
                </p>
              </div>

            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-[#174d35] px-4 py-2.5 text-xs font-semibold text-[#174d35] transition hover:bg-[#eff8ed]">
              <Navigation size={14} />
              Use Current Location
            </button>

          </div>

        </section>

        {/* Centre Selection */}
        <section className="mb-7">

          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#183328]">
              Available Procurement Centre
            </h3>

            <p className="mt-1 text-sm text-[#6b776f]">
              Compare centres by the two things that matter most:
              <span className="font-semibold text-[#174d35]">
                {" "}distance and waiting time.
              </span>
            </p>
          </div>

          <div className="space-y-5">

            {centres.map((centre) => {

              const selected = selectedCentre?.id === centre.id

              return (
                <button
                  key={centre.id}
                  onClick={() => {
  setSelectedCentre(centre)
  setSelectedSlot(null)

  setTimeout(() => {
    timeSlotRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, 100)
}}
                  className={`relative w-full rounded-2xl border-2 p-5 text-left transition ${
  selected
    ? "border-[#174d35] bg-[#174d35] text-white shadow-md"
    : centre.recommended
      ? "border-[#5eaf68] bg-[#eff8ed] shadow-sm hover:shadow-md"
      : "border-[#d5ddd3] bg-white hover:border-[#174d35]"
}`}
                >

                  {/* AI Badge */}
                  {centre.recommended && (
                    <div className="absolute -top-3 left-4 flex items-center gap-1.5 rounded-full bg-[#174d35] px-3 py-1.5 text-[11px] font-bold text-white shadow-sm">
                      <Sparkles size={13} />
                      AI BEST MATCH FOR YOU
                    </div>
                  )}

                  <div className={centre.recommended ? "pt-2" : ""}>

                    <div className="flex items-start justify-between gap-4">

                      <div className="min-w-0">
                        <h4
  className={`text-base font-bold sm:text-lg ${
    selected ? "text-white" : "text-[#183328]"
  }`}
>
  {centre.name}
</h4>

                        {centre.recommended && (
                          <p className="mt-1 text-xs font-medium text-[#174d35]">
                            Best suitable centre based on your current location
                            and expected queue.
                          </p>
                        )}
                      </div>

                      {selected && (
                        <CheckCircle2
                          size={23}
                          className="shrink-0 text-[#174d35]"
                        />
                      )}

                    </div>

                    {/* Main Metrics */}
                    <div className="mt-5 grid grid-cols-2 gap-3">

                      <div className="rounded-xl border border-[#d5ddd3] bg-white p-3">
                        <div className="flex items-center gap-2 text-[#174d35]">
                          <MapPin size={17} />

                          <span className="text-[11px] font-bold uppercase tracking-wide">
                            Distance
                          </span>
                        </div>

                        <p className="mt-1.5 text-xl font-bold text-[#183328]">
                          {centre.distance}
                        </p>

                        <p className="text-[11px] text-[#6b776f]">
                          From your location
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#d5ddd3] bg-white p-3">
                        <div className="flex items-center gap-2 text-[#174d35]">
                          <Clock3 size={17} />

                          <span className="text-[11px] font-bold uppercase tracking-wide">
                            Waiting Time
                          </span>
                        </div>

                        <p className="mt-1.5 text-xl font-bold text-[#183328]">
                          {centre.wait}
                        </p>

                        <p className="text-[11px] text-[#6b776f]">
                          Expected at centre
                        </p>
                      </div>

                    </div>

                    {/* Secondary information */}
                    <div className="mt-4 flex flex-wrap gap-2">

                      <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs text-[#6b776f]">
                        <Users size={13} />
                        {centre.slots} slots available
                      </span>

                      <span className="rounded-full bg-white px-3 py-1.5 text-xs text-[#6b776f]">
                        Demand:{" "}
                        <strong className="text-[#183328]">
                          {centre.demand}
                        </strong>
                      </span>

                    </div>

                  </div>

                </button>
              )
            })}

          </div>

        </section>

        {/* AI Recommendation */}
        {selectedCentre && (
          <section className="mb-7 overflow-hidden rounded-3xl bg-[#174d35] text-white shadow-md">

            <div className="p-5 sm:p-6">

              <div className="flex items-start gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Sparkles size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#ddefd9]">
                    AI Recommendation
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    This is the best suitable option for you
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    {selectedCentre.name} currently offers a suitable balance
                    between travel distance and expected waiting time.
                  </p>
                </div>

              </div>

              {/* Key metrics */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

                <RecommendationMetric
                  icon={<MapPin size={17} />}
                  label="Distance"
                  value={selectedCentre.distance}
                />

                <RecommendationMetric
                  icon={<Clock3 size={17} />}
                  label="Expected Wait"
                  value={selectedCentre.wait}
                />

                <RecommendationMetric
                  icon={<Users size={17} />}
                  label="Available Slots"
                  value={selectedCentre.slots}
                />

                <RecommendationMetric
                  icon={<Route size={17} />}
                  label="Demand"
                  value={selectedCentre.demand}
                />

              </div>

              <div className="mt-5 rounded-xl bg-white/10 p-4">
                <p className="text-xs font-semibold text-white/70">
                  Why this recommendation?
                </p>

                <p className="mt-1 text-sm leading-5 text-white">
                  Lower travel distance + manageable queue + available
                  capacity = better overall visit experience.
                </p>
              </div>

            </div>

          </section>
        )}

        {/* Time Slots */}
        {selectedCentre && (
          <section ref={timeSlotRef} className="mb-7 scroll-mt-6">

            <div className="mb-4">
              <h3 className="text-lg font-bold text-[#183328]">
                Choose Your Arrival Slot
              </h3>

              <p className="mt-1 text-sm text-[#6b776f]">
                AI has identified the expected waiting time for each slot.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {timeSlots.map((slot) => {

                const selected = selectedSlot?.time === slot.time

                return (
                  <button
                    key={slot.time}
                    onClick={() => setSelectedSlot(slot)}
                    className={`relative rounded-2xl border-2 p-4 text-left transition ${
  selected
    ? "border-[#174d35] bg-[#174d35] text-white shadow-md"
    : slot.recommended
      ? "border-[#5eaf68] bg-[#eff8ed] hover:shadow-sm"
      : "border-[#d5ddd3] bg-white hover:border-[#174d35]"
}`}
                  >

                    {slot.recommended && (
                      <div className="mb-3 flex items-center gap-1.5 text-[11px] font-bold text-[#174d35]">
                        <Sparkles size={13} />
                        AI RECOMMENDED — BEST TIME FOR YOU
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3">

                      <div>
                        <p
  className={`text-base font-bold ${
    selected ? "text-white" : "text-[#183328]"
  }`}
>
  {slot.time}
</p>

                        <div className="mt-3 flex items-center gap-2">

                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff8ed] text-[#174d35]">
                            <Clock3 size={17} />
                          </div>

                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#6b776f]">
                              Expected Waiting Time
                            </p>

                            <p
  className={`text-sm font-bold ${
    selected ? "text-white" : "text-[#174d35]"
  }`}
>
  {slot.wait}
</p>
                          </div>

                        </div>
                      </div>

                      {selected && (
                        <CheckCircle2
                          size={22}
                          className="shrink-0 text-[#174d35]"
                        />
                      )}

                    </div>

                  </button>
                )
              })}

            </div>

          </section>
        )}

        {/* Confirm */}
        {selectedCentre && selectedSlot && (
          <button
            onClick={handleConfirm}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#174d35] py-4 font-bold text-white shadow-sm transition hover:bg-[#123c2a]"
          >
            Confirm My Slot
            <ArrowRight size={18} />
          </button>
        )}

      </main>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ddefd9]">
              <CheckCircle2
                size={29}
                className="text-[#174d35]"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#183328]">
              Slot Confirmed
            </h3>

            <p className="mt-2 text-sm text-[#6b776f]">
              Your smart procurement slot has been successfully booked.
            </p>

            <div className="mt-5 space-y-4 rounded-2xl bg-[#f7f4ea] p-4">

              <div>
                <p className="text-xs text-[#6b776f]">
                  Procurement Centre
                </p>

                <p className="mt-1 text-sm font-bold text-[#183328]">
                  {selectedCentre.name}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <p className="text-xs text-[#6b776f]">
                    Distance
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#174d35]">
                    {selectedCentre.distance}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#6b776f]">
                    Expected Wait
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#174d35]">
                    {selectedSlot.wait}
                  </p>
                </div>

              </div>

              <div>
                <p className="text-xs text-[#6b776f]">
                  Arrival Time
                </p>

                <p className="mt-1 text-sm font-bold text-[#183328]">
                  {selectedSlot.time}
                </p>
              </div>

            </div>

            <button
              onClick={() => setShowConfirmation(false)}
              className="mt-5 w-full rounded-xl bg-[#174d35] py-3.5 font-semibold text-white transition hover:bg-[#123c2a]"
            >
              Done
            </button>

          </div>

        </div>
      )}

    </div>
  )
}

function RecommendationMetric({ icon, label, value }) {
  return (
    <div className="rounded-xl bg-white/10 p-3">

      <div className="flex items-center gap-2 text-white/70">
        {icon}

        <span className="text-[10px] font-semibold uppercase tracking-wide">
          {label}
        </span>
      </div>

      <p className="mt-1.5 text-lg font-bold">
        {value}
      </p>

    </div>
  )
}

export default BookSlot