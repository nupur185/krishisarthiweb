const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

console.log("API BASE URL:", API_BASE_URL)

export const api = async (endpoint, options = {}) => {
  console.log("API REQUEST:", `${API_BASE_URL}${endpoint}`)
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong")
  }

  return data
}