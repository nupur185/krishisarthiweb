import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../../context/AuthContext"
import {
  ArrowLeft,
  User,
  Phone,
  MapPin,
  Sprout,
  BadgeCheck,
  Pencil,
  Save,
} from "lucide-react"

export default function Profile() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [editing, setEditing] = useState(false)

  const [profile, setProfile] = useState({
    name: user?.fullName || "Farmer",
    mobile: user?.mobile || "",
    farmerId: "FRM-BR-2026-01452",
    village: "Kanti",
    district: "Muzaffarpur",
    state: "Bihar",
    crop: "Paddy",
    emailId: user?.email || "",
    expectedProduction: "40 Q",
    Area: "2 Acres",
  })

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    console.log("Updated profile:", profile)
    setEditing(false)
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

          <div className="flex-1">
            <h1 className="text-2xl font-bold">My Profile</h1>
            <p className="text-sm text-[#6b776f]">
              View and manage your farmer details
            </p>
          </div>

          {!editing && (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-2 rounded-xl bg-[#174d35] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#123c2a]"
            >
              <Pencil size={16} />
              Edit
            </button>
          )}
        </div>

        {/* Profile Header */}
        <div className="mb-5 rounded-2xl bg-[#174d35] p-6 text-white shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#174d35]">
              <User size={30} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">{profile.name}</h2>
                <BadgeCheck size={19} />
              </div>

              <p className="mt-1 text-sm opacity-80">
                Verified Farmer
              </p>

              <p className="mt-1 text-xs opacity-70">
                {profile.farmerId}
              </p>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="rounded-2xl border border-[#d5ddd3] bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-bold">
            Personal Information
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3 top-3.5 text-[#6b776f]"
                />

                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-3 pl-10 pr-3 text-sm outline-none focus:border-[#174d35] disabled:cursor-not-allowed disabled:opacity-80"
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email Id
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3 top-3.5 text-[#6b776f]"
                />

                <input
                  name="name"
                  value={profile.emailId}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-3 pl-10 pr-3 text-sm outline-none focus:border-[#174d35] disabled:cursor-not-allowed disabled:opacity-80"
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Mobile Number
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-3 top-3.5 text-[#6b776f]"
                />

                <input
                  name="mobile"
                  value={profile.mobile}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-3 pl-10 pr-3 text-sm outline-none focus:border-[#174d35] disabled:cursor-not-allowed disabled:opacity-80"
                />
              </div>
            </div>

            {/* Farmer ID */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Farmer ID
              </label>

              <input
                value={profile.farmerId}
                disabled
                className="w-full rounded-xl border border-[#d5ddd3] bg-[#eff8ed] px-3 py-3 text-sm text-[#174d35]"
              />
            </div>


          </div>

          {/* Location */}
          <h2 className="mb-5 mt-7 text-lg font-bold">
            Location
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Village
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="absolute left-3 top-3.5 text-[#6b776f]"
                />

                <input
                  name="village"
                  value={profile.village}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-3 pl-10 pr-3 text-sm outline-none focus:border-[#174d35] disabled:opacity-80"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                District
              </label>

              <input
                name="district"
                value={profile.district}
                onChange={handleChange}
                disabled={!editing}
                className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] px-3 py-3 text-sm outline-none focus:border-[#174d35] disabled:opacity-80"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                State
              </label>

              <input
                value={profile.state}
                disabled
                className="w-full rounded-xl border border-[#d5ddd3] bg-[#eff8ed] px-3 py-3 text-sm text-[#174d35]"
              />
            </div>

          </div>


          {/* crop details */}

          <h2 className="mb-5 text-lg font-bold">
            Crop Details
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Expected Production
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3 top-3.5 text-[#6b776f]"
                />

                <input
                  name="name"
                  value={profile.expectedProduction}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-3 pl-10 pr-3 text-sm outline-none focus:border-[#174d35] disabled:cursor-not-allowed disabled:opacity-80"
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Primary Crop
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3 top-3.5 text-[#6b776f]"
                />

                <input
                  name="name"
                  value={profile.crop}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-3 pl-10 pr-3 text-sm outline-none focus:border-[#174d35] disabled:cursor-not-allowed disabled:opacity-80"
                />
              </div>
            </div>

          </div>


                    {/* crop details */}

          <h2 className="mb-5 text-lg font-bold">
            Land Details
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Area of Production land
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3 top-3.5 text-[#6b776f]"
                />

                <input
                  name="name"
                  value={profile.Area}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full rounded-xl border border-[#d5ddd3] bg-[#f7f4ea] py-3 pl-10 pr-3 text-sm outline-none focus:border-[#174d35] disabled:cursor-not-allowed disabled:opacity-80"
                />
              </div>
            </div>

          </div>


          {/* Save */}
          {editing && (
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setEditing(false)}
                className="flex-1 rounded-xl border border-[#d5ddd3] px-4 py-3 text-sm font-semibold hover:bg-[#f7f4ea]"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#174d35] px-4 py-3 text-sm font-semibold text-white hover:bg-[#123c2a]"
              >
                <Save size={17} />
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Verification */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#b9d9bd] bg-[#eff8ed] p-4">
          <BadgeCheck
            size={21}
            className="mt-0.5 shrink-0 text-[#5eaf68]"
          />

          <div>
            <p className="text-sm font-semibold text-[#174d35]">
              Farmer account verified
            </p>
            <p className="mt-1 text-xs leading-5 text-[#5d6f63]">
              Your farmer identity has been verified and you can use
              procurement slot booking services.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}