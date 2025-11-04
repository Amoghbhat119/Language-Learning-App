import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const { data } = await api.post("/api/auth/register", {
        name: fullName.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim(),
        confirmPassword: confirmPassword.trim(),
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Redirect to homepage and trigger success modal there
      navigate("/", {
        replace: true,
        state: { modal: { type: "signup-success", name: data.user?.name || "" } },
      });
    } catch (err) {
      const msg = err?.response?.data?.message || "Registration failed. Try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="p-6 sm:p-8">
          <h1 className="text-center text-2xl font-semibold text-gray-900">Create Your Account</h1>
          <p className="mt-1 text-center text-sm text-gray-500">
            Start your English learning journey today!
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4" autoComplete="off">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-800">
                Name
              </label>
              <input
                id="fullName"
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-800">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            {error && <p className="text-center text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-lg text-white font-medium bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:opacity-70"
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>

            <p className="text-center text-sm text-gray-600 mt-5">
              Already have an account?
              <a href="/login" className="ml-1 text-green-600 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
