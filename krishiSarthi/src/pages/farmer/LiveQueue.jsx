import { useEffect, useState } from "react"
import { Link } from "react-router"
import {
  ArrowLeft,
  Clock3,
  MapPin,
  Radio,
  Users,
  CheckCircle2,
} from "lucide-react"

const initialQueue = [
  { token: "A-07", status: "Serving", stage: "Procurement" },
  { token: "A-08", status: "Waiting", stage: "Quality Check" },
  { token: "A-09", status: "Waiting", stage: "Registration" },
  { token: "A-10", status: "Waiting", stage: "Registration" },
  { token: "A-11", status: "Waiting", stage: "Registration" },
  { token: "A-12", status: "Waiting", stage: "Registration" },
  { token: "A-13", status: "Your Turn", stage: "Waiting" },
]

function LiveQueue() {
  const [queue, setQueue] = useState(initialQueue)
  const [waitTime, setWaitTime] = useState(45)

  useEffect(() => {
    const interval = setInterval(() => {
      setQueue((currentQueue) => {
        const servingIndex = currentQueue.findIndex(
          (item) => item.status === "Serving"
        )

        if (servingIndex === -1) return currentQueue

        const updatedQueue = [...currentQueue]

        updatedQueue.splice(servingIndex, 1)

        const nextWaitingIndex = updatedQueue.findIndex(
          (item) => item.status === "Waiting"
        )

        if (nextWaitingIndex !== -1) {
          updatedQueue[nextWaitingIndex] = {
            ...updatedQueue[nextWaitingIndex],
            status: "Serving",
          }
        }

        return updatedQueue
      })

      setWaitTime((time) => Math.max(0, time - 5))
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const yourPosition = queue.findIndex(
    (item) => item.token === "A-13"
  )

  return (
    <div className="min-h-screen bg-[#f7f4ea]">

      {/* Header */}
      <header className="border-b border-[#d5ddd3] bg-white">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-4">

          <Link
            to="/farmer/home"
            className="rounded-lg p-2 text-[#174d35] hover:bg-[#eff8ed]"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>
            <h1 className="text-lg font-bold text-[#174d35]">
              Live Queue
            </h1>

            <p className="text-xs text-[#6b776f]">
              Track your position in real time
            </p>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6 pb-10">

        {/* Centre */}
        <div className="mb-5 flex items-start gap-3">

          <div className="rounded-lg bg-[#eff8ed] p-2 text-[#174d35]">
            <MapPin size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-[#183328]">
              Green Valley Procurement Center
            </h2>

            <p className="mt-1 text-xs text-[#6b776f]">
              Muzaffarpur, Bihar
            </p>
          </div>

        </div>

        {/* Live indicator */}
        <div className="mb-5 flex items-center gap-2 rounded-xl border border-[#b8d9bb] bg-[#eff8ed] px-4 py-3">

          <Radio size={18} className="text-[#174d35]" />

          <span className="text-sm font-semibold text-[#174d35]">
            LIVE
          </span>

          <span className="text-xs text-[#6b776f]">
            Queue updates automatically
          </span>

        </div>

        {/* Main status */}
        <section className="mb-5 rounded-2xl bg-[#174d35] p-6 text-white">

          <div className="grid gap-6 sm:grid-cols-3">

            <div>
              <p className="text-xs text-white/60">
                Current Token
              </p>

              <p className="mt-1 text-3xl font-bold">
                {queue[0]?.token || "—"}
              </p>

              <p className="mt-1 text-xs text-white/70">
                Currently being served
              </p>
            </div>

            <div>
              <p className="text-xs text-white/60">
                Your Token
              </p>

              <p className="mt-1 text-3xl font-bold">
                A-13
              </p>

              <p className="mt-1 text-xs text-white/70">
                Position #{yourPosition + 1}
              </p>
            </div>

            <div>
              <p className="text-xs text-white/60">
                Estimated Wait
              </p>

              <p className="mt-1 text-3xl font-bold">
                ~{waitTime} min
              </p>

              <p className="mt-1 text-xs text-white/70">
                Approximate
              </p>
            </div>

          </div>

        </section>

        {/* Progress */}
        <section className="mb-5 rounded-2xl border border-[#d5ddd3] bg-white p-5">

          <div className="mb-3 flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold text-[#183328]">
                Queue Progress
              </p>

              <p className="mt-1 text-xs text-[#6b776f]">
                Farmers ahead of you
              </p>
            </div>

            <span className="text-lg font-bold text-[#174d35]">
              {Math.max(0, yourPosition)} ahead
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-[#dde5dc]">
            <div
              className="h-full rounded-full bg-[#174d35] transition-all duration-500"
              style={{
                width: `${Math.min(
                  100,
                  ((queue.length - yourPosition) / queue.length) * 100
                )}%`,
              }}
            />
          </div>

        </section>

        {/* Token Queue */}
        <section className="mb-5 rounded-2xl border border-[#d5ddd3] bg-white p-5">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <h3 className="font-semibold text-[#183328]">
                Current Queue
              </h3>

              <p className="mt-1 text-xs text-[#6b776f]">
                Token sequence at this centre
              </p>
            </div>

            <div className="flex items-center gap-1 text-xs text-[#6b776f]">
              <Users size={15} />
              {queue.length} tokens
            </div>

          </div>

          <div className="space-y-2">

            {queue.map((item, index) => {

              const isYourToken = item.token === "A-13"

              return (
                <div
                  key={item.token}
                  className={`flex items-center justify-between rounded-xl border p-4 ${
                    isYourToken
                      ? "border-[#174d35] bg-[#eff8ed]"
                      : "border-[#d5ddd3] bg-white"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f4ea] text-xs font-semibold text-[#183328]">
                      {index + 1}
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#183328]">
                        {item.token}
                      </p>

                      <p className="mt-0.5 text-xs text-[#6b776f]">
                        {item.stage}
                      </p>
                    </div>

                  </div>

                  <StatusBadge status={item.status} />

                </div>
              )
            })}

          </div>

        </section>

        {/* Centre counters */}
        <section className="rounded-2xl border border-[#d5ddd3] bg-white p-5">

          <h3 className="font-semibold text-[#183328]">
            Centre Status
          </h3>

          <p className="mt-1 text-xs text-[#6b776f]">
            Current counter activity
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">

            <Counter
              name="Counter 1"
              functionName="Registration"
              token="A-09"
              status="Active"
            />

            <Counter
              name="Counter 2"
              functionName="Quality Check"
              token="A-08"
              status="Active"
            />

            <Counter
              name="Counter 3"
              functionName="Weighment"
              token="A-06"
              status="Busy"
            />

            <Counter
              name="Counter 4"
              functionName="Receiving"
              token="A-07"
              status="Active"
            />

          </div>

        </section>

        {/* Reminder */}
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#e2d8b8] bg-[#fff9df] p-4">

          <Clock3
            size={19}
            className="mt-0.5 text-[#8a6d1d]"
          />

          <div>
            <p className="text-sm font-semibold text-[#183328]">
              Please arrive on time
            </p>

            <p className="mt-1 text-xs leading-5 text-[#6b776f]">
              Keep your token and required documents ready before
              reaching the procurement centre.
            </p>
          </div>

        </div>

      </main>

    </div>
  )
}

function StatusBadge({ status }) {
  if (status === "Serving") {
    return (
      <span className="rounded-full bg-[#174d35] px-3 py-1 text-xs font-medium text-white">
        Serving
      </span>
    )
  }

  if (status === "Your Turn") {
    return (
      <span className="rounded-full bg-[#dde

f9] px-3 py-1 text-xs font-semibold text-[#174d35]">
        Your Turn
      </span>
    )
  }

  return (
    <span className="rounded-full bg-[#f1f2ef] px-3 py-1 text-xs font-medium text-[#6b776f]">
      Waiting
    </span>
  )
}

function Counter({ name, functionName, token, status }) {
  return (
    <div className="rounded-xl border border-[#d5ddd3] p-4">

      <div className="flex items-center justify-between">

        <p className="text-sm font-semibold text-[#183328]">
          {name}
        </p>

        <span className="flex items-center gap-1.5 text-xs text-[#174d35]">
          <span className="h-2 w-2 rounded-full bg-[#5eaf68]" />
          {status}
        </span>

      </div>

      <p className="mt-2 text-xs text-[#6b776f]">
        {functionName}
      </p>

      <p className="mt-2 text-sm font-semibold text-[#183328]">
        Serving: {token}
      </p>

    </div>
  )
}

export default LiveQueue