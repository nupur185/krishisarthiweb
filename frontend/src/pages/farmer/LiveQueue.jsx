import { useEffect, useState } from "react"
import { Link } from "react-router"
import { jsPDF } from "jspdf"
import {
  ArrowLeft,
  Clock3,
  MapPin,
  Radio,
  Users,
  CheckCircle2,
  Download,
  FileText,
  Scale,
  ClipboardCheck,
} from "lucide-react"

const initialQueue = [
  { token: "A-07", status: "Serving", stage: "Procurement" },
  { token: "A-08", status: "Waiting", stage: "Quality Check" },
  { token: "A-09", status: "Waiting", stage: "Registration" },
  { token: "A-10", status: "Waiting", stage: "Registration" },
  { token: "A-11", status: "Waiting", stage: "Registration" },
  { token: "A-12", status: "Waiting", stage: "Registration" },
  { token: "A-13", status: "Waiting", stage: "Waiting" },
]

function LiveQueue() {
  const [queue, setQueue] = useState(initialQueue)
  const [waitTime, setWaitTime] = useState(45)

  // A-13 procurement workflow
  const [a13TurnStarted, setA13TurnStarted] = useState(false)
  const [a13Stage, setA13Stage] = useState("Waiting")
  const [quality, setQuality] = useState("")
  const [quantity, setQuantity] = useState("")
  const [receiptGenerated, setReceiptGenerated] = useState(false)

  /*
   * Existing queue simulation
   */
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
          const nextToken = updatedQueue[nextWaitingIndex].token

          updatedQueue[nextWaitingIndex] = {
            ...updatedQueue[nextWaitingIndex],
            status:
              nextToken === "A-13" ? "Your Turn" : "Serving",
          }
        }

        return updatedQueue
      })

      setWaitTime((time) => Math.max(0, time - 5))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  /*
   * Detect when A-13's turn starts
   */
  useEffect(() => {
    const a13 = queue.find((item) => item.token === "A-13")

    if (
      a13 &&
      a13.status === "Your Turn" &&
      !a13TurnStarted
    ) {
      setA13TurnStarted(true)
      setA13Stage("Registration")
    }
  }, [queue, a13TurnStarted])

  /*
   * A-13 procurement workflow
   *
   * Registration
   *      ↓ 1 sec
   * Quality Check
   *      ↓ 1 sec
   * Weighment
   *      ↓ 1 sec
   * Receipt Generated
   */
  useEffect(() => {
    if (!a13TurnStarted) return

    setA13Stage("Registration")

    const qualityTimer = setTimeout(() => {
      setA13Stage("Quality Check")

      const qualityResultTimer = setTimeout(() => {
        setQuality("Grade A — Good quality crop")

        setA13Stage("Weighment")

        const quantityTimer = setTimeout(() => {
          setQuantity("42.5 Quintals")

          const receiptTimer = setTimeout(() => {
            setA13Stage("Procurement Receipt Generated")
            setReceiptGenerated(true)
          }, 2000)

          return () => clearTimeout(receiptTimer)
        }, 2000)

        return () => clearTimeout(quantityTimer)
      }, 2000)

      return () => clearTimeout(qualityResultTimer)
    }, 2000)

    return () => clearTimeout(qualityTimer)
  }, [a13TurnStarted])

  const yourPosition = queue.findIndex(
    (item) => item.token === "A-13"
  )

  /*
   * Generate procurement receipt
   */
const downloadReceipt = () => {
  if (!receiptGenerated) return

  const doc = new jsPDF()

  const receiptId = `KS-${Date.now()}`
  const generatedAt = new Date().toLocaleString("en-IN")

  // Header
  doc.setFillColor(23, 77, 53)
  doc.rect(0, 0, 210, 35, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont("helvetica", "bold")
  doc.text("KrishiSarthi", 20, 17)

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Farmer Procurement Platform", 20, 25)

  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("PROCUREMENT RECEIPT", 130, 20)

  // Reset text color
  doc.setTextColor(24, 51, 40)

  // Receipt information
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text(`Receipt ID: ${receiptId}`, 20, 48)
  doc.text(`Generated: ${generatedAt}`, 20, 55)

  // Centre section
  doc.setFontSize(13)
  doc.setFont("helvetica", "bold")
  doc.text("Procurement Centre", 20, 72)

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Green Valley Procurement Center", 20, 81)
  doc.text("Muzaffarpur, Bihar", 20, 88)

  // Farmer / token section
  doc.setFontSize(13)
  doc.setFont("helvetica", "bold")
  doc.text("Procurement Details", 20, 108)

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")

  doc.text("Token Number", 20, 119)
  doc.text("A-13", 80, 119)

  doc.text("Farmer", 20, 128)
  doc.text("Registered Farmer", 80, 128)

  doc.text("Crop Quality", 20, 137)
  doc.text(quality || "Not available", 80, 137)

  doc.text("Quantity Procured", 20, 146)
  doc.text(quantity || "Not available", 80, 146)

  doc.text("Payment Amount", 20, 155)
doc.setFont("helvetica", "bold")
doc.text("Rs. 18,560", 80, 155)

doc.text("Procurement Status", 20, 164)
doc.setFont("helvetica", "bold")
doc.text("Successfully Completed", 80, 164)


  // Divider
  doc.setDrawColor(210, 220, 211)
  doc.line(20, 174, 190, 174)

  // Completion message
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(23, 77, 53)
  doc.text("Procurement Completed Successfully", 20, 189)

  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(100, 110, 105)

  doc.text(
    "This is a system-generated procurement receipt.",
    20,
    190
  )

  doc.text(
    "Please retain this receipt for your records.",
    20,
    197
  )

  // Footer
  doc.setDrawColor(210, 220, 211)
  doc.line(20, 270, 190, 270)

  doc.setFontSize(8)
  doc.text(
    "KrishiSarthi — Smart Farmer Procurement Platform",
    20,
    280
  )

  doc.text(
    "Digital Receipt",
    160,
    280
  )

  // Download PDF
  doc.save(`KrishiSarthi-Procurement-Receipt-A13.pdf`)
}

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
                  className={`rounded-xl border p-4 ${
                    isYourToken
                      ? "border-[#174d35] bg-[#eff8ed]"
                      : "border-[#d5ddd3] bg-white"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f4ea] text-xs font-semibold text-[#183328]">
                        {index + 1}
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-[#183328]">
                          {item.token}
                        </p>

                        <p className="mt-0.5 text-xs text-[#6b776f]">
                          {isYourToken && a13TurnStarted
                            ? a13Stage
                            : item.stage}
                        </p>
                      </div>

                    </div>

                    <StatusBadge
                      status={
                        isYourToken && a13TurnStarted
                          ? "Your Turn"
                          : item.status
                      }
                    />

                  </div>

                  {/* A-13 live procurement details */}
                  {isYourToken && a13TurnStarted && (
                    <div className="mt-4 border-t border-[#cfe0d0] pt-4">

                      <div className="grid gap-3 sm:grid-cols-2">

                        {/* Quality */}
                        <div className="rounded-xl border border-[#d5ddd3] bg-white p-3">

                          <div className="flex items-center gap-2">

                            <ClipboardCheck
                              size={17}
                              className="text-[#174d35]"
                            />

                            <p className="text-xs font-semibold text-[#183328]">
                              Crop Quality
                            </p>

                          </div>

                          <p className="mt-2 text-sm font-medium text-[#174d35]">
                            {quality || "Checking crop quality..."}
                          </p>

                        </div>

                        {/* Quantity */}
                        <div className="rounded-xl border border-[#d5ddd3] bg-white p-3">

                          <div className="flex items-center gap-2">

                            <Scale
                              size={17}
                              className="text-[#174d35]"
                            />

                            <p className="text-xs font-semibold text-[#183328]">
                              Quantity
                            </p>

                          </div>

                          <p className="mt-2 text-sm font-medium text-[#174d35]">
                            {quantity || "Waiting for weighment..."}
                          </p>

                        </div>

                      </div>

                      {/* Receipt status */}
                      <div
                        className={`mt-3 rounded-xl border p-3 ${
                          receiptGenerated
                            ? "border-[#b8d9bb] bg-[#eff8ed]"
                            : "border-[#d5ddd3] bg-[#f7f4ea]"
                        }`}
                      >

                        <div className="flex items-center gap-2">

                          {receiptGenerated ? (
                            <CheckCircle2
                              size={18}
                              className="text-[#5eaf68]"
                            />
                          ) : (
                            <FileText
                              size={18}
                              className="text-[#6b776f]"
                            />
                          )}

                          <div>

                            <p className="text-sm font-semibold text-[#183328]">
                              {receiptGenerated
                                ? "Procurement Receipt Generated"
                                : "Procurement Receipt"}
                            </p>

                            <p className="mt-0.5 text-xs text-[#6b776f]">
                              {receiptGenerated
                                ? "Your procurement process is complete."
                                : "Receipt will be available after procurement is completed."}
                            </p>

                          </div>

                        </div>

                      </div>

                      {/* Download */}
                      <button
                        type="button"
                        onClick={downloadReceipt}
                        disabled={!receiptGenerated}
                        className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                          receiptGenerated
                            ? "bg-[#174d35] text-white hover:bg-[#123c2a]"
                            : "cursor-not-allowed bg-[#e4e7e2] text-[#9aa29b]"
                        }`}
                      >
                        <Download size={17} />

                        {receiptGenerated
                          ? "Download Procurement Receipt"
                          : "Receipt Not Generated"}
                      </button>

                    </div>
                  )}

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
      <span className="rounded-full bg-[#dde5dc] px-3 py-1 text-xs font-semibold text-[#174d35]">
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