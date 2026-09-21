import React, { useState } from "react";
import { Link } from "react-router"
import { useAuth } from "../../context/AuthContext"
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  IndianRupee,
  CheckCircle2,
  FileCheck2,
  Scale,
  Star,
  MessageSquareWarning,
  Download,
  X,
  Send,
  Home,
  Calendar,
  CreditCard,
  HelpCircle,
  LogOut,
  Menu,
  Bell,
  User,
  Building2,
  Sparkles,
} from "lucide-react";
import { toast, Toaster } from "sonner";


// Standalone Mock Data

export default function PaymentAndUpdates() {
  const { user } = useAuth()
  const [activeModal, setActiveModal] = useState(null); // 'quality' | 'weight' | 'feedback' | 'grievance'
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [grievanceCategory, setGrievanceCategory] = useState("Payment Delay");
  const [grievanceText, setGrievanceText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);


const paymentData = {
  farmerName: user?.fullName || "Farmer",
  farmerId: "F013456",
  status: "Credited",
  amount: "₹18,560",
  netQuantity: "3,200 kg",
  mspRate: "₹5.80 / kg",
  bankRef: "SBIN12345678",
  centerName: "PACS Centre 042, Karnal",
timeline: [
  {
    id: 1,
    title: "Payment Maker",
    status: "completed",
    description: "Payment details prepared",
  },
  {
    id: 2,
    title: "Payment Checker",
    status: "completed",
    description: "Payment verified and approved",
  },
  {
    id: 3,
    title: "Disbursement Bank Clearance",
    status: "current",
    description: "Payment sent for bank-side processing",
  },
  {
    id: 4,
    title: "Cheque Handover",
    status: "pending",
    description: "Payment advice/instrument handed over",
  },
  {
    id: 5,
    title: "Initiate Payment",
    status: "pending",
    description: "Payment is being transferred to your bank",
  },
  {
    id: 6,
    title: "Fully Disbursed",
    status: "pending",
    description: "Money credited to your account",
  },
],
  qualityDetails: {
    crop: "Paddy (Grade A)",
    moistureContent: "13.2%",
    foreignMatter: "0.8%",
    damagedGrains: "1.1%",
    overallGrade: "FAQ (Fair Average Quality)",
    inspectedBy: "Quality Inspector V. Sharma",
  },
  weightSlipDetails: {
    grossWeight: "3,450 kg",
    tareWeight: "250 kg",
    netWeight: "3,200 kg",
    weighbridgeNo: "WB-KNL-04",
    weighmentTime: "12 Sep 2026, 11:30 AM",
    operator: "S. Singh",
  },
};

  const closeModal = () => setActiveModal(null);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a star rating before submitting.");
      return;
    }
    toast.success("Thank you! Your feedback has been recorded.");
    setRating(0);
    setFeedbackText("");
    closeModal();
  };

  const handleGrievanceSubmit = (e) => {
    e.preventDefault();
    if (!grievanceText.trim()) {
      toast.error("Please provide a description of your grievance.");
      return;
    }
    toast.success("Grievance logged! Reference ID: GRV-2026-9921");
    setGrievanceText("");
    closeModal();
  };

  const handleDownload = (type) => {
    toast.success(`${type} downloaded successfully!`);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F4] text-[#1A2E22] font-sans antialiased overflow-x-hidden">
      <Toaster position="top-center" richColors />

      {/* ==========================================
          DESKTOP & TABLET LAYOUT (Sidebar + Topbar)
         ========================================== */}
      <div className="hidden md:flex min-h-screen">

        {/* Desktop Main Content Workspace */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Bar */}
          <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between shadow-xs">
            <Link
            to="/farmer/home"
            className="rounded-lg p-2 text-[#174d35] hover:bg-[#eff8ed]"
          >
            <ArrowLeft size={20} />
          </Link>
            <h2 className="text-lg font-bold text-[#14532D] flex items-center gap-2">
              <CreditCard size={20} className="text-[#14532D]" />
              Payment & Procurement Updates
            </h2>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-full hover:bg-gray-100 text-gray-600 transition">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500"></span>
              </button>
              <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                <User size={15} className="text-[#14532D]" />
                <span className="text-xs font-semibold text-[#14532D]">
                  {paymentData.farmerName}
                </span>
              </div>
            </div>
          </header>

          {/* Desktop Dashboard Grid */}
          <main className="p-8 max-w-7xl mx-auto w-full space-y-6 overflow-y-auto">
            {/* Status & Summary Cards Row */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 w-full">
              {/* Payment Status Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 text-[#14532D] flex items-center justify-center font-bold">
                      <IndianRupee size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Payout Status
                      </p>
                      <h3 className="text-xl font-bold text-gray-900">Payment Status</h3>
                    </div>
                  </div>

                  <span className="inline-flex gap-1.5 px-5 py-1.5 rounded-full text-2xl font-bold bg-emerald-200 border border-emerald-200 ml-[-60%] text-black">
                    {paymentData.amount}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#14532D] border border-emerald-200">
                    <CheckCircle2 size={14} />
                    {paymentData.status}
                  </span>

                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Procurement Centre</span>
                  <span className="text-xs font-semibold text-gray-800 flex items-center gap-1">
                    <Building2 size={13} className="text-[#14532D]" />
                    {paymentData.centerName}
                  </span>
                </div>
              </div>

              {/* Payment Summary Box */}
            </div>

            {/* Timeline & Actions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              {/* Vertical Timeline Panel */}
              {/* Vertical Timeline Panel */}
<div className="lg:col-span-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
  <h3 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
    <span className="h-2 w-2 rounded-full bg-[#14532D]"></span>
    Payment Processing Timeline
  </h3>

  <div className="relative pl-8">
    {/* Vertical line */}
    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-emerald-200"></div>

    <div className="space-y-7">
      {paymentData.timeline.map((item) => (
        <div key={item.id} className="relative">
          {/* Step Circle */}
          <div
  className={`absolute -left-8 top-0.5 h-6 w-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${
    item.status === "completed"
      ? "bg-[#14532D]"
      : item.status === "current"
      ? "bg-[#B76537]"
      : "bg-white border-gray-300"
  }`}
>
  {item.status === "completed" && (
    <CheckCircle2 size={12} className="text-white" />
  )}

  {item.status === "current" && (
    <span className="h-2 w-2 rounded-full bg-white" />
  )}
</div>

          {/* Step Content */}
          <div>
            <h4 className="text-sm font-bold text-gray-900">
              {item.title}
            </h4>

            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


            </div>

            {/* Desktop Footer */}
            <footer className="pt-4 text-center text-xs text-gray-500 border-t border-gray-200">
              KrishiSarthi — Government-supported procurement assistance for farmers.
            </footer>
          </main>
        </div>
      </div>

      {/* ==========================================
          MOBILE LAYOUT (Optimized Single Column)
         ========================================== */}
      <div className="md:hidden flex flex-col min-h-screen">
        {/* 1. Mobile Header */}
        <header className="bg-[#14532D] text-white px-4 py-4 sticky top-0 z-20 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <button className="p-1.5 rounded-full hover:bg-white/10 active:scale-95 transition">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-base font-bold tracking-wide">Payment & Updates</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={20} />
          </button>
        </header>

        {/* Mobile Main Section */}
        <main className="flex-1 p-4 space-y-4 max-w-md mx-auto w-full">
          {/* 2. White Payment Status Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-emerald-100 text-[#14532D] flex items-center justify-center font-bold">
                <IndianRupee size={22} />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </p>
                <h3 className="text-base font-bold text-gray-900">Payment status</h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#14532D] border border-emerald-200">
              <CheckCircle2 size={13} />
              {paymentData.status}
            </span>
          </div>

          {/* 3. Vertical Payment Timeline */}
          {/* 3. Vertical Payment Timeline */}
<div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80">
  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">
    Payment Timeline
  </h4>

  <div className="relative pl-7">
    {/* Vertical line */}
    <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-emerald-200"></div>

    <div className="space-y-6">
      {paymentData.timeline.map((item) => (
        <div key={item.id} className="relative">
          {/* Step Circle */}
          <div
  className={`absolute -left-7 top-0 h-5 w-5 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${
    item.status === "completed"
      ? "bg-[#14532D]"
      : item.status === "current"
      ? "bg-[#B76537]"
      : "bg-white border-gray-300"
  }`}
>
  {item.status === "completed" && (
    <CheckCircle2 size={10} className="text-white" />
  )}

  {item.status === "current" && (
    <span className="h-1.5 w-1.5 rounded-full bg-white" />
  )}
</div>
          {/* Step Content */}
          <div>
            <h5 className="text-sm font-bold text-gray-900 leading-tight">
              {item.title}
            </h5>

            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* 4. Light-Green Payment Summary Card */}
          <div className="bg-[#E8F5E9] rounded-2xl p-4 border border-emerald-200 shadow-xs space-y-3">
            <div className="flex justify-between items-baseline border-b border-emerald-200/60 pb-2">
              <span className="text-xs text-emerald-800">Amount</span>
              <span className="text-xl font-extrabold text-[#14532D]">
                {paymentData.amount}
              </span>
            </div>
            <div className="flex justify-between text-xs border-b border-emerald-200/60 pb-2">
              <span className="text-emerald-800">Net Quantity</span>
              <span className="font-bold text-gray-800">{paymentData.netQuantity}</span>
            </div>
            <div className="flex justify-between text-xs border-b border-emerald-200/60 pb-2">
              <span className="text-emerald-800">MSP Rate</span>
              <span className="font-bold text-gray-800">{paymentData.mspRate}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-emerald-800">Bank Reference</span>
              <span className="font-mono font-semibold text-gray-800">
                {paymentData.bankRef}
              </span>
            </div>
          </div>

          {/* 5. Four Action Cards (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-3">
            <ActionCard
              icon={<FileCheck2 size={18} className="text-[#14532D]" />}
              title="Quality Report"
              description="View grading details"
              onClick={() => setActiveModal("quality")}
            />
            <ActionCard
              icon={<Scale size={18} className="text-[#14532D]" />}
              title="Weight Slip"
              description="Download / View"
              onClick={() => setActiveModal("weight")}
            />
            <ActionCard
              icon={<Star size={18} className="text-[#14532D]" />}
              title="Centre Feedback"
              description="Rate your experience"
              onClick={() => setActiveModal("feedback")}
            />
            <ActionCard
              icon={<MessageSquareWarning size={18} className="text-[#14532D]" />}
              title="Raise Grievance"
              description="Download / View"
              onClick={() => setActiveModal("grievance")}
            />
          </div>

          {/* 6. Light-Green Thank You Card */}
          <div className="bg-[#E8F5E9] rounded-2xl p-4 border border-emerald-200 text-center space-y-1">
            <p className="text-sm font-bold text-[#14532D]">
              Thank you for using KrishiSarthi!
            </p>
            <p className="text-xs text-emerald-800 font-medium">
              Together for better harvest
            </p>
          </div>

          {/* 7. Small Mobile Footer */}
          <footer className="py-4 text-center text-[11px] text-gray-500">
            KrishiSarthi — Government-supported procurement assistance for farmers.
          </footer>
        </main>
      </div>

      {/* ==========================================
          FUNCTIONAL MODALS (Framer Motion Animated)
         ========================================== */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-200 relative overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-base font-bold text-[#14532D] flex items-center gap-2">
                  {activeModal === "quality" && <FileCheck2 size={18} />}
                  {activeModal === "weight" && <Scale size={18} />}
                  {activeModal === "feedback" && <Star size={18} />}
                  {activeModal === "grievance" && <MessageSquareWarning size={18} />}
                  {activeModal === "quality" && "Quality & Grading Details"}
                  {activeModal === "weight" && "Official Weight Slip"}
                  {activeModal === "feedback" && "Procurement Centre Feedback"}
                  {activeModal === "grievance" && "Raise a Grievance"}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-1 rounded-full text-gray-400 hover:bg-gray-100 transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body Content */}
              <div className="py-4 text-sm">
                {/* Modal 1: Quality Report */}
                {activeModal === "quality" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs">
                      <div>
                        <span className="text-gray-500 block">Crop Variety</span>
                        <span className="font-bold text-gray-800">
                          {paymentData.qualityDetails.crop}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Overall Grade</span>
                        <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded inline-block mt-0.5">
                          {paymentData.qualityDetails.overallGrade}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Moisture Level</span>
                        <span className="font-semibold text-gray-800">
                          {paymentData.qualityDetails.moistureContent}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Foreign Matter</span>
                        <span className="font-semibold text-gray-800">
                          {paymentData.qualityDetails.foreignMatter}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Inspected by:{" "}
                      <span className="font-medium text-gray-700">
                        {paymentData.qualityDetails.inspectedBy}
                      </span>
                    </p>
                    <button
                      onClick={() => handleDownload("Quality Report")}
                      className="w-full flex items-center justify-center gap-2 bg-[#14532D] text-white py-2.5 rounded-xl font-semibold hover:bg-emerald-900 transition"
                    >
                      <Download size={16} /> Download Quality Certificate
                    </button>
                  </div>
                )}

                {/* Modal 2: Weight Slip */}
                {activeModal === "weight" && (
                  <div className="space-y-3">
                    <div className="bg-[#F4F7F4] p-4 rounded-xl border border-emerald-200 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gross Weight</span>
                        <span className="font-bold">
                          {paymentData.weightSlipDetails.grossWeight}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Tare Weight (Vehicle)</span>
                        <span>-{paymentData.weightSlipDetails.tareWeight}</span>
                      </div>
                      <div className="flex justify-between border-t border-emerald-200 pt-2 text-sm font-extrabold text-[#14532D]">
                        <span>Net Crop Weight</span>
                        <span>{paymentData.weightSlipDetails.netWeight}</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-gray-500 space-y-1">
                      <p>
                        Weighbridge: {paymentData.weightSlipDetails.weighbridgeNo}
                      </p>
                      <p>
                        Timestamp: {paymentData.weightSlipDetails.weighmentTime}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDownload("Weight Slip")}
                      className="w-full flex items-center justify-center gap-2 bg-[#14532D] text-white py-2.5 rounded-xl font-semibold hover:bg-emerald-900 transition"
                    >
                      <Download size={16} /> Download Official Receipt
                    </button>
                  </div>
                )}

                {/* Modal 3: Centre Feedback */}
                {activeModal === "feedback" && (
                  <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-2">
                        How was your experience at PACS Centre 042, Karnal?
                      </p>
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="p-1 text-amber-400 hover:scale-110 transition"
                          >
                            <Star
                              size={28}
                              fill={star <= rating ? "currentColor" : "none"}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Comments (Optional)
                      </label>
                      <textarea
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder="Tell us about waiting time, staff behavior, or weighing..."
                        rows={3}
                        className="w-full p-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#14532D]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#14532D] text-white py-2.5 rounded-xl font-semibold hover:bg-emerald-900 transition"
                    >
                      <Send size={15} /> Submit Feedback
                    </button>
                  </form>
                )}

                {/* Modal 4: Raise Grievance */}
                {activeModal === "grievance" && (
                  <form onSubmit={handleGrievanceSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Select Issue Type
                      </label>
                      <select
                        value={grievanceCategory}
                        onChange={(e) => setGrievanceCategory(e.target.value)}
                        className="w-full p-2.5 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#14532D]"
                      >
                        <option>Payment Delay</option>
                        <option>Discrepancy in Quantity/Weight</option>
                        <option>Quality Grading Dispute</option>
                        <option>Uncooperative Staff</option>
                        <option>Other Issue</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Grievance Details
                      </label>
                      <textarea
                        value={grievanceText}
                        onChange={(e) => setGrievanceText(e.target.value)}
                        placeholder="Describe your issue in detail..."
                        rows={3}
                        className="w-full p-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#14532D]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#14532D] text-white py-2.5 rounded-xl font-semibold hover:bg-emerald-900 transition"
                    >
                      <Send size={15} /> Log Grievance Complaint
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reusable Action Card Sub-Component
function ActionCard({ icon, title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white p-3.5 sm:p-4 rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition text-left flex flex-col justify-between group active:scale-98"
    >
      <div className="h-9 w-9 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition mb-3">
        {icon}
      </div>
      <div>
        <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
          {title}
        </h4>
        <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{description}</p>
      </div>
    </button>
  );
}