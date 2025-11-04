import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const emailNorm = email.trim().toLowerCase();
    const passwordNorm = password.trim();

    if (!emailNorm || !passwordNorm) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const { data } = await api.post("/api/auth/login", {
        email: emailNorm,
        password: passwordNorm,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Navigate to HomePage and show modal there
      navigate("/", {
        state: {
          modal: {
            type: "login-success",
            name: data.user?.name || "",
          },
        },
      });
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Invalid credentials.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="p-6 sm:p-8">
          <h1 className="text-center text-2xl font-semibold text-gray-900">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" autoComplete="off">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Username or Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-emerald-300"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="mt-2">
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?
              <a href="/signup" className="pl-1 text-emerald-600 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
