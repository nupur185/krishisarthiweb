import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import Login from "./pages/auth/Login"
import Register from "./pages/farmer/Register"
import FarmerHome from "./pages/farmer/Home"
import BookSlot from "./pages/farmer/BookSlot"
import Token from "./pages/farmer/Token"
import LiveQueue from "./pages/farmer/LiveQueue"
import Bookings from "./pages/farmer/Bookings"
import Payment from "./pages/farmer/Payment"
import Grievance from "./pages/farmer/Grievance"
import Profile from "./pages/farmer/Profile"
import ProcurementDashboard from "./pages/officer/ProcurementDashboard"
import QueueManagement from "./pages/officer/QueueManagement"
import Farmers from "./pages/officer/Farmers"
import OfficerBookings from "./pages/officer/Bookings"
import CentreManagement from "./pages/officer/CentreManagement"
import Reports from "./pages/officer/Reports"
import Notifications from "./pages/officer/Notifications"
import Settings from "./pages/officer/Settings"
import GovernmentDashboard from "./pages/government/GovernmentDasboard"
import ProcurementOverview from "./pages/government/ProcurementOverview"
import FarmersOverview from "./pages/government/FarmersOverview"
import PaymentsOverview from "./pages/government/PaymentsOverview"
import Analytics from "./pages/government/Analytics"
import Alerts from "./pages/government/Alerts"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/farmer/register" element={<Register />} />
        <Route path="/farmer/home" element={<FarmerHome />} />
        <Route path="/farmer/book-slot" element={<BookSlot />} />
        <Route path="/farmer/token" element={<Token />} />
        <Route path="/farmer/live-queue" element={<LiveQueue />} />
        <Route path="/farmer/bookings" element={<Bookings />} />
        <Route path="/farmer/payment" element={<Payment />} />
        <Route path="/farmer/grievance" element={<Grievance />} />
        <Route path="/farmer/profile" element={<Profile />} />
        <Route path="/officer/procurement" element={<ProcurementDashboard />} />
        <Route path="/officer/procurement/queue" element={<QueueManagement />} />
        <Route path="/officer/procurement/farmers" element={<Farmers />} />
        <Route path="/officer/procurement/bookings" element={<OfficerBookings />} />
        <Route path="/officer/procurement/centres" element={<CentreManagement />} />
        <Route path="/officer/procurement/reports" element={<Reports />} />
        <Route path="/officer/procurement/notifications" element={<Notifications />} />
        <Route path="/officer/procurement/settings" element={<Settings />} />
        <Route path="/government/dashboard" element={<GovernmentDashboard />} />
        <Route path="/government/procurement" element={<ProcurementOverview />} />
        <Route path="/government/farmers" element={<FarmersOverview />} />
        <Route path="/government/payments" element={<PaymentsOverview />} />
        <Route path="/government/analytics" element={<Analytics />} />
        <Route path="/government/alerts" element={<Alerts />} />

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App