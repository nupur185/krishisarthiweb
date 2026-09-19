import { useState } from "react"
import { Link } from "react-router"

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    aadhar: "",
    village: "",
    district: "",
    state: "Bihar",
    crop: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Registration Data:", formData)
  }

  return (
    <div className="min-h-screen bg-[#f7f4ea] px-4 py-8">

      <div className="mx-auto w-full max-w-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#174d35]">
            KrishiSarthi
          </h1>

          <p className="mt-2 text-sm text-[#6b776f]">
            Smart Procurement Ecosystem
          </p>
        </div>

        {/* Registration Card */}
        <div className="rounded-2xl border border-[#d5ddd3] bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-7">
            <h2 className="text-2xl font-semibold text-[#183328]">
              Farmer Registration
            </h2>

            <p className="mt-1 text-sm text-[#6b776f]">
              Create your KrishiSarthi farmer account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#183328]">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none transition focus:border-[#174d35]"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#183328]">
                Mobile Number
              </label>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none transition focus:border-[#174d35]"
              />
            </div>

            {/* Farmer ID */}
            {/* <div>
              <label className="mb-2 block text-sm font-medium text-[#183328]">
                Aadhaar
              </label>

              <input
                type="text"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                placeholder="Enter Farmer ID"
                className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none transition focus:border-[#174d35]"
              />
            </div> */}

            {/* Village */}
            {/* <div>
              <label className="mb-2 block text-sm font-medium text-[#183328]">
                Village / Locality
              </label>

              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleChange}
                placeholder="Enter village or locality"
                className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none transition focus:border-[#174d35]"
              />
            </div> */}

            {/* District + State */}
            {/* <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-[#183328]">
                  District
                </label>

                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#d5ddd3] bg-white px-4 py-3 outline-none focus:border-[#174d35]"
                >
                  <option value="">Select district</option>
                  <option>Muzaffarpur</option>
                  <option>Vaishali</option>
                  <option>Samastipur</option>
                  <option>Darbhanga</option>
                  <option>Patna</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#183328]">
                  State
                </label>

                <input
                  type="text"
                  value="Bihar"
                  disabled
                  className="w-full rounded-lg border border-[#d5ddd3] bg-[#f7f4ea] px-4 py-3 text-[#6b776f]"
                />
              </div>

            </div> */}

            {/* Crop */}
            {/* <div>
              <label className="mb-2 block text-sm font-medium text-[#183328]">
                Primary Crop
              </label>

              <select
                name="crop"
                value={formData.crop}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#d5ddd3] bg-white px-4 py-3 outline-none focus:border-[#174d35]"
              >
                <option value="">Select crop</option>
                <option>Rice</option>
                <option>Wheat</option>
                <option>Paddy</option>
                <option>Maize</option>
                <option>Barley</option>
              </select>
            </div> */}



                        {/* Email Id */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#183328]">
                Email Id
              </label>

              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="farmer@gmail.com"
                required
                className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none transition focus:border-[#174d35]"
              />
            </div>


                        {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#183328]">
                Password
              </label>

              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Strong Password"
                required
                className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none transition focus:border-[#174d35]"
              />
            </div>



            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#174d35] py-3.5 font-medium text-white transition hover:bg-[#123c2a]"
            >
              Create Farmer Account
            </button>

          </form>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-[#6b776f]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#174d35] hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Register