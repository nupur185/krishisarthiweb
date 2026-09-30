import { useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router"
import { api } from "../../api/api"
import { useAuth } from "../../context/AuthContext"

function Login() {
  const navigate = useNavigate()
  const { loginUser } = useAuth()

  const [role, setRole] = useState("Farmer")
  const [emailOrMobile, setEmailOrMobile] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // Demo credentials popup
  const [showDemoPopup, setShowDemoPopup] = useState(false)
  const [demoCredentials, setDemoCredentials] = useState(null)

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value
    setRole(selectedRole)

    if (selectedRole === "Procurement Officer") {
      setDemoCredentials({
        role: "Procurement Officer",
        email: "officer1@gmail.com",
        password: "officer1@123",
      })
      setShowDemoPopup(true)
    } else if (selectedRole === "Government Officer") {
      setDemoCredentials({
        role: "Government Officer",
        email: "gov@gmail.com",
        password: "gov@123",
      })
      setShowDemoPopup(true)
    } else {
      setShowDemoPopup(false)
      setDemoCredentials(null)
    }
  }

  const handleUseDemoCredentials = () => {
    if (!demoCredentials) return

    setEmailOrMobile(demoCredentials.email)
    setPassword(demoCredentials.password)
    setShowDemoPopup(false)
  }

  const handleCancelDemo = () => {
    setShowDemoPopup(false)
    setDemoCredentials(null)
  }

  const handleLogin = async (e) => {
  e.preventDefault()

  console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL)

  if (!role || !emailOrMobile.trim() || !password.trim()) {
    return
  }

  setLoading(true)

  try {
    const data = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        emailOrMobile: emailOrMobile.trim(),
        password,
        role,
      }),
    })

    console.log("Login successful:", data)

    loginUser(data.user)

    // Navigate according to role
    if (role === "Farmer") {
      navigate("/farmer/home")
    } else if (role === "Procurement Officer") {
      navigate("/officer/procurement")
    } else if (role === "Government Officer") {
      navigate("/government/dashboard")
    }

  } catch (error) {
    console.error("Login error:", error)
    alert(error.message)
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="min-h-screen bg-[#f7f4ea] flex items-center justify-center px-4">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-[#d5ddd3]"
      >

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#174d35]">
            KrishiSarthi
          </h1>

          <p className="mt-2 text-sm text-[#6b776f]">
            Smart Procurement Ecosystem
          </p>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#183328]">
            Welcome Back
          </h2>

          <p className="mt-1 text-sm text-[#6b776f]">
            Login to continue
          </p>
        </div>

        {/* Role */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-[#183328]">
            Login as
          </label>

          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full rounded-lg border border-[#d5ddd3] bg-white px-4 py-3 outline-none focus:border-[#174d35]"
          >
            <option>Farmer</option>
            <option>Procurement Officer</option>
            <option>Government Officer</option>
          </select>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-[#183328]">
            Email / Mobile Number
          </label>

          <input
            type="text"
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            required
            placeholder="Enter email or mobile number"
            className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none focus:border-[#174d35]"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-[#183328]">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none focus:border-[#174d35]"
          />
        </div>

        {/* Login */}
        <button
  type="submit"
  disabled={loading}
  className={`w-full rounded-lg py-3 font-medium text-white transition ${
    loading
      ? "bg-[#6b776f] cursor-not-allowed"
      : "bg-[#174d35] hover:bg-[#123c2a]"
  }`}
>
  {loading ? (
    <span className="flex items-center justify-center gap-2">
      <span className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin"></span>
      Logging in...
    </span>
  ) : (
    "Login"
  )}
</button>

        <p className="mt-6 text-center text-sm text-[#6b776f]">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#174d35] hover:underline"
          >
            Register
          </Link>
        </p>

      </form>

      {/* ================= DEMO CREDENTIALS POPUP ================= */}
      {showDemoPopup && demoCredentials && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-[#d5ddd3] overflow-hidden">

            {/* Popup Header */}
            <div className="bg-[#174d35] px-6 py-5 text-white">
              <h2 className="text-xl font-bold">
                Demo Access
              </h2>

              <p className="mt-1 text-sm text-white/80">
                {demoCredentials.role}
              </p>
            </div>

            {/* Popup Content */}
            <div className="p-6">

              <div className="rounded-xl bg-[#eff8ed] border border-[#d5ddd3] p-4 mb-5">
                <p className="text-sm leading-6 text-[#183328]">
                  This is a <strong>demo website</strong>.
                  <br />
                  To view the{" "}
                  <strong>{demoCredentials.role} Dashboard</strong>,
                  please use the demo credentials below.
                </p>
              </div>

              {/* Email */}
              <div className="mb-4">
                <p className="text-xs font-medium text-[#6b776f] mb-1">
                  Email
                </p>

                <div className="flex items-center justify-between rounded-lg border border-[#d5ddd3] bg-[#f7f4ea] px-4 py-3">
                  <span className="text-sm font-medium text-[#183328]">
                    {demoCredentials.email}
                  </span>
                </div>
              </div>

              {/* Password */}
              <div className="mb-6">
                <p className="text-xs font-medium text-[#6b776f] mb-1">
                  Password
                </p>

                <div className="flex items-center justify-between rounded-lg border border-[#d5ddd3] bg-[#f7f4ea] px-4 py-3">
                  <span className="text-sm font-medium text-[#183328]">
                    {demoCredentials.password}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <button
                  type="button"
                  onClick={handleCancelDemo}
                  className="flex-1 rounded-lg border border-[#d5ddd3] bg-white py-3 font-medium text-[#183328] transition hover:bg-[#f7f4ea]"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleUseDemoCredentials}
                  className="flex-1 rounded-lg bg-[#174d35] py-3 font-medium text-white transition hover:bg-[#123c2a]"
                >
                  Enter Credentials
                </button>

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Login