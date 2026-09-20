// import { useState } from "react"
// import { Link, useNavigate } from "react-router"
// import {
//   ArrowLeft,
//   CalendarDays,
//   MapPin,
//   Ticket,
//   Clock3,
//   CheckCircle2,
//   X,
// } from "lucide-react"

// export default function Bookings() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState("upcoming")
//   const [showCancel, setShowCancel] = useState(false)

//   const upcomingBooking = {
//     centre: "Green Valley Procurement Center",
//     location: "Muzaffarpur, Bihar",
//     date: "12 Sep 2026",
//     time: "10:00 AM – 11:00 AM",
//     token: "A-13",
//     status: "Approved",
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f4ea] px-4 py-5 text-[#183328] md:px-8">
//       <div className="mx-auto max-w-3xl">

//         {/* Header */}
//         <div className="mb-6 flex items-center gap-4">
//           <button
//             onClick={() => navigate("/farmer/home")}
//             className="rounded-full bg-white p-2.5 shadow-sm transition hover:bg-[#eff8ed]"
//           >
//             <ArrowLeft size={21} />
//           </button>

//           <div>
//             <h1 className="text-2xl font-bold">My Bookings</h1>
//             <p className="text-sm text-[#6b776f]">
//               Manage your procurement centre visits
//             </p>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="mb-5 flex rounded-xl bg-white p-1 shadow-sm">
//           {["upcoming", "past"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold capitalize transition ${
//                 activeTab === tab
//                   ? "bg-[#174d35] text-white"
//                   : "text-[#6b776f] hover:bg-[#eff8ed]"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Upcoming */}
//         {activeTab === "upcoming" && (
//           <div className="space-y-4">

//             <div className="overflow-hidden rounded-2xl border border-[#d5ddd3] bg-white shadow-sm">

//               {/* Status Header */}
//               <div className="flex items-center justify-between border-b border-[#d5ddd3] bg-[#eff8ed] px-5 py-4">
//                 <div className="flex items-center gap-2">
//                   <CheckCircle2
//                     size={19}
//                     className="text-[#5eaf68]"
//                   />
//                   <span className="text-sm font-semibold text-[#174d35]">
//                     {upcomingBooking.status}
//                   </span>
//                 </div>

//                 <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#174d35]">
//                   Upcoming
//                 </span>
//               </div>

//               {/* Booking Details */}
//               <div className="p-5">

//                 <h2 className="mb-1 text-lg font-bold">
//                   {upcomingBooking.centre}
//                 </h2>

//                 <div className="mb-5 flex items-center gap-1.5 text-sm text-[#6b776f]">
//                   <MapPin size={16} />
//                   {upcomingBooking.location}
//                 </div>

//                 <div className="grid gap-3 sm:grid-cols-3">

//                   <div className="rounded-xl bg-[#f7f4ea] p-3">
//                     <CalendarDays size={18} className="mb-2 text-[#174d35]" />
//                     <p className="text-xs text-[#6b776f]">Date</p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {upcomingBooking.date}
//                     </p>
//                   </div>

//                   <div className="rounded-xl bg-[#f7f4ea] p-3">
//                     <Clock3 size={18} className="mb-2 text-[#174d35]" />
//                     <p className="text-xs text-[#6b776f]">Time</p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {upcomingBooking.time}
//                     </p>
//                   </div>

//                   <div className="rounded-xl bg-[#f7f4ea] p-3">
//                     <Ticket size={18} className="mb-2 text-[#174d35]" />
//                     <p className="text-xs text-[#6b776f]">Token</p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {upcomingBooking.token}
//                     </p>
//                   </div>

//                 </div>

//                 {/* Actions */}
//                 <div className="mt-5 flex flex-col gap-3 sm:flex-row">
//                   <Link
//                     to="/farmer/token"
//                     className="flex flex-1 items-center justify-center rounded-xl bg-[#174d35] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#123c2a]"
//                   >
//                     View Token
//                   </Link>

//                   <button
//                     onClick={() => setShowCancel(true)}
//                     className="flex-1 rounded-xl border border-[#d5ddd3] px-4 py-3 text-sm font-semibold text-[#b76537] transition hover:bg-[#fff5ef]"
//                   >
//                     Cancel Booking
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* AI Reminder */}
//             <div className="rounded-2xl border border-[#d5ddd3] bg-[#ddeFD9] p-4">
//               <p className="text-sm font-semibold text-[#174d35]">
//                 AI Reminder
//               </p>
//               <p className="mt-1 text-sm text-[#486052]">
//                 Based on current traffic and queue conditions, arriving
//                 10–15 minutes before your slot is recommended.
//               </p>
//             </div>

//           </div>
//         )}

//         {/* Past */}
//         {activeTab === "past" && (
//           <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">

//             <div className="flex items-start justify-between gap-4">
//               <div>
//                 <h2 className="font-bold">Sursingar Procurement Centre</h2>

//                 <div className="mt-2 space-y-1.5 text-sm text-[#6b776f]">
//                   <p className="flex items-center gap-2">
//                     <CalendarDays size={15} />
//                     08 Sep 2026
//                   </p>

//                   <p className="flex items-center gap-2">
//                     <Clock3 size={15} />
//                     09:00 AM – 10:00 AM
//                   </p>
//                 </div>
//               </div>

//               <span className="rounded-full bg-[#eff8ed] px-3 py-1 text-xs font-semibold text-[#4d9657]">
//                 Completed
//               </span>
//             </div>

//             <div className="mt-4 border-t border-[#d5ddd3] pt-4 text-sm">
//               <span className="text-[#6b776f]">Token: </span>
//               <span className="font-semibold">A-08</span>
//             </div>

//           </div>
//         )}

//       </div>

//       {/* Cancel Modal */}
//       {showCancel && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

//           <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">

//             <div className="mb-4 flex items-center justify-between">
//               <h2 className="text-lg font-bold">Cancel Booking?</h2>

//               <button
//                 onClick={() => setShowCancel(false)}
//                 className="rounded-full p-1.5 hover:bg-[#f7f4ea]"
//               >
//                 <X size={19} />
//               </button>
//             </div>

//             <p className="text-sm leading-6 text-[#6b776f]">
//               Are you sure you want to cancel your booking at Green Valley
//               Procurement Center?
//             </p>

//             <div className="mt-5 flex gap-3">
//               <button
//                 onClick={() => setShowCancel(false)}
//                 className="flex-1 rounded-xl border border-[#d5ddd3] py-3 text-sm font-semibold"
//               >
//                 Keep Booking
//               </button>

//               <button
//                 onClick={() => {
//                   setShowCancel(false)
//                   alert("Booking cancelled")
//                 }}
//                 className="flex-1 rounded-xl bg-[#b76537] py-3 text-sm font-semibold text-white"
//               >
//                 Confirm Cancel
//               </button>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


import React from 'react';
import { CalendarX, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Bookings() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center p-6 text-center">
      <div className="flex max-w-md flex-col items-center rounded-3xl border border-[#d5ddd3] bg-[#f7f4ea]/50 p-8 shadow-sm backdrop-blur-sm">
        
        {/* Decorative Icon Badge */}
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e2e8df] text-[#174d35]">
          <CalendarX size={32} />
        </div>

        {/* Text Content */}
        <h3 className="mb-2 text-xl font-bold text-[#174d35]">
          No Bookings Yet!
        </h3>
        <p className="mb-6 text-sm text-[#5d6b62]">
          You haven’t scheduled any procurement slots. Book a slot now to avoid long queues at the center.
        </p>

        {/* Action Button */}
        <button
          onClick={() => navigate('/farmer/book-slot')}
          className="flex items-center gap-2 rounded-xl bg-[#174d35] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#113a28] transition-all active:scale-95"
        >
          <PlusCircle size={18} />
          Book Your First Slot
        </button>

      </div>
    </div>
  );
}