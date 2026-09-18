import { Link } from "react-router"
import { QRCodeCanvas } from "qrcode.react"
import {
  ArrowLeft,
  Ticket,
  MapPin,
  CalendarDays,
  Clock3,
  Download,
  Share2,
  Bell,
  CheckCircle2,
  Timer,
   Wheat,
  Scale
} from "lucide-react"

function Token() {
  return (
    <div className="min-h-screen bg-[#f7f4ea]">

      {/* Header */}
      <header className="border-b border-[#d5ddd3] bg-white">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-4">

          <Link
            to="/farmer/home"
            className="rounded-lg p-2 text-[#174d35] hover:bg-[#eff8ed]"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>
            <h1 className="text-lg font-bold text-[#174d35]">
              My Token
            </h1>

            <p className="text-xs text-[#6b776f]">
              Your procurement token
            </p>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-6 pb-10">

        {/* Status */}
        <div className="mb-5 flex items-center gap-2 rounded-xl border border-[#b8d9bb] bg-[#eff8ed] px-4 py-3">

          <CheckCircle2
            size={20}
            className="text-[#174d35]"
          />

          <div>
            <p className="text-sm font-semibold text-[#174d35]">
              Your token is ready!
            </p>

            <p className="text-xs text-[#6b776f]">
              Show this token at the procurement centre.
            </p>
          </div>

        </div>

        {/* Token Card */}
        <section className="overflow-hidden rounded-2xl bg-white shadow-sm">

          {/* Green top */}
          <div className="bg-[#174d35] px-6 py-6 text-center text-white">

            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <Ticket size={25} />
            </div>

            <p className="text-sm text-white/70">
              Your Token Number
            </p>

            <h2 className="mt-1 text-5xl font-bold tracking-wider">
              A-13
            </h2>

            <p className="mt-2 text-sm text-white/70">
              Confirmed
            </p>

          </div>

          {/* Details */}
          <div className="space-y-5 p-6">

            <div className="flex items-start gap-3">

              <div className="rounded-lg bg-[#eff8ed] p-2 text-[#174d35]">
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-xs text-[#6b776f]">
                  Procurement Centre
                </p>

                <p className="mt-1 font-semibold text-[#183328]">
                  Green Valley Procurement Center
                </p>

                <p className="mt-1 text-xs text-[#6b776f]">
                  Muzaffarpur, Bihar
                </p>
              </div>

            </div>

            <div className="grid gap-5 border-t border-[#d5ddd3] pt-5 sm:grid-cols-2">

              <div className="flex items-start gap-3">

                <CalendarDays
                  size={19}
                  className="mt-0.5 text-[#174d35]"
                />

                <div>
                  <p className="text-xs text-[#6b776f]">
                    Date
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#183328]">
                    12 Sep 2026
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <Clock3
                  size={19}
                  className="mt-0.5 text-[#174d35]"
                />

                <div>
                  <p className="text-xs text-[#6b776f]">
                    Time
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#183328]">
                    10:00 AM – 11:00 AM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* QR placeholder */}
          {/* <div className="border-t border-dashed border-[#d5ddd3] px-6 py-6 text-center">

            <div className="mx-auto flex h-36 w-36 items-center justify-center border-4 border-[#183328] bg-white">

              <div className="grid grid-cols-5 gap-1 p-3">

                {Array.from({ length: 25 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-4 w-4 ${
                      [0, 2, 4, 6, 8, 10, 12, 16, 18, 20, 22, 24].includes(index)
                        ? "bg-[#183328]"
                        : "bg-white"
                    }`}
                  />
                ))}

              </div>

            </div>

            <p className="mt-3 text-xs text-[#6b776f]">
              Scan or show this token at the centre
            </p>

          </div> */}



            {/* USP QR */}

            {/* Actual QR Code */}
<div className="border-t border-dashed border-[#d5ddd3] px-6 py-6 text-center">

  <div className="mx-auto flex w-fit items-center justify-center rounded-2xl border-4 border-[#183328] bg-white p-4">
    <QRCodeCanvas
      value={JSON.stringify({
        token: "A-13",
        farmerName: "Ramesh Kumar",
        centre: "Green Valley Procurement Center",
        location: "Muzaffarpur, Bihar",
        date: "12 Sep 2026",
        time: "10:00 AM – 11:00 AM",
        eta: "15–25 min",
        quantity: "25 quintals",
        crop: "Paddy",
        bookingStatus: "Confirmed",
      })}
      size={190}
      bgColor="#ffffff"
      fgColor="#183328"
      level="H"
      includeMargin
    />
  </div>

  <p className="mt-3 text-xs text-[#6b776f]">
    Scan this QR code to verify your procurement booking
  </p>

</div>





        </section>



        {/* Additional Booking Details */}
<section className="border-t border-[#d5ddd3] bg-[#f7f4ea] p-6">

  <div className="mb-4">
    <h3 className="text-base font-bold text-[#183328]">
      Booking Details
    </h3>

    <p className="mt-1 text-xs text-[#6b776f]">
      Additional information for your procurement visit
    </p>
  </div>

  <div className="grid gap-4 sm:grid-cols-2">

    <div className="rounded-xl bg-white p-4">
      <div className="flex items-center gap-2 text-[#174d35]">
        <Timer size={18} />
        <p className="text-xs font-semibold">
          Estimated Waiting Time
        </p>
      </div>

      <p className="mt-2 text-lg font-bold text-[#183328]">
        15–25 min
      </p>
    </div>

    <div className="rounded-xl bg-white p-4">
      <div className="flex items-center gap-2 text-[#174d35]">
        <Scale size={18} />
        <p className="text-xs font-semibold">
          Procurement Quantity
        </p>
      </div>

      <p className="mt-2 text-lg font-bold text-[#183328]">
        25 quintals
      </p>
    </div>

    <div className="rounded-xl bg-white p-4">
      <div className="flex items-center gap-2 text-[#174d35]">
        <Wheat size={18} />
        <p className="text-xs font-semibold">
          Crop
        </p>
      </div>

      <p className="mt-2 text-sm font-bold text-[#183328]">
        Paddy
      </p>
    </div>

    <div className="rounded-xl bg-white p-4">
      <div className="flex items-center gap-2 text-[#174d35]">
        <MapPin size={18} />
        <p className="text-xs font-semibold">
          Distance from Location
        </p>
      </div>

      <p className="mt-2 text-lg font-bold text-[#183328]">
        4.2 km
      </p>
    </div>

  </div>

  <div className="mt-4 rounded-xl bg-white p-4">

    <h4 className="text-sm font-bold text-[#183328]">
      Slot Booking Information
    </h4>

    <div className="mt-3 space-y-3 text-sm">

      <div className="flex justify-between gap-4">
        <span className="text-[#6b776f]">
          Booking ID
        </span>

        <span className="font-semibold text-[#183328]">
          BK-2026-0013
        </span>
      </div>

      <div className="flex justify-between gap-4">
        <span className="text-[#6b776f]">
          Farmer Name
        </span>

        <span className="font-semibold text-[#183328]">
          Ramesh Kumar
        </span>
      </div>

      <div className="flex justify-between gap-4">
        <span className="text-[#6b776f]">
          Centre Status
        </span>

        <span className="font-semibold text-[#174d35]">
          Confirmed
        </span>
      </div>

    </div>

  </div>

</section>


        {/* Actions */}
        <div className="mt-5 grid grid-cols-2 gap-3">

          <button className="flex items-center justify-center gap-2 rounded-xl border border-[#174d35] bg-white py-3 text-sm font-medium text-[#174d35] hover:bg-[#eff8ed]">
            <Download size={18} />
            Download
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-[#174d35] bg-white py-3 text-sm font-medium text-[#174d35] hover:bg-[#eff8ed]">
            <Share2 size={18} />
            Share Token
          </button>

        </div>

        {/* Notification */}
        <div className="mt-5 flex items-center justify-between rounded-xl border border-[#d5ddd3] bg-white p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-[#eff8ed] p-2 text-[#174d35]">
              <Bell size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#183328]">
                Turn notification
              </p>

              <p className="text-xs text-[#6b776f]">
                Notify me when my turn is near
              </p>
            </div>

          </div>

          <div className="h-6 w-11 rounded-full bg-[#174d35] p-1">
            <div className="ml-auto h-4 w-4 rounded-full bg-white" />
          </div>

        </div>

        {/* Queue link */}
        <Link
          to="/farmer/live-queue"
          className="mt-5 flex items-center justify-center rounded-xl bg-[#174d35] py-3.5 text-sm font-semibold text-white hover:bg-[#123c2a]"
        >
          Track Live Queue
        </Link>

      </main>
    </div>
  )
}

export default Token