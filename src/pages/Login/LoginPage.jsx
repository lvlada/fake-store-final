import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./login.scheme";
import { handleLogin } from "../../services/login";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [view, setView] = useState(true);
  const [loginError, setLoginError] = useState(""); // <-- novo stanje za grešku

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(loginSchema) });

  async function onSubmit(data) {
    setLoginError(""); // resetuj grešku pre svakog pokušaja

    try {
      const res = await handleLogin(data);

      // Pretpostavimo da handleLogin vraća objekat sa tokenom na uspeh
      // i objekat sa greškom na neuspeh, prilagodi po potrebi
      if (!res || !res.accessToken) {
        setLoginError(res?.message || "Korisnički podaci nisu tačni, pokušajte ponovo.");
        return;
      }

      login(res); // upamti usera i token
      reset();
      navigate("/");
    } catch (e) {
      console.error("Login failed:", e);
      setLoginError("Došlo je do greške pri prijavi. Pokušajte ponovo.");
    }
  }

  function handlePasswordView() {
    setView((old) => !old);
  }

  return (
    <div className="items-center! inline-flex bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] ">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dobrodošao korisniče
            </h1>
            <p className="text-gray-600 mb-1">Prijavite se na vaš nalog</p>
            {loginError && (
              <p className="text-red-600 text-sm font-medium">{loginError}</p>
            )}
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register("username")}
                  type="text"
                  placeholder="Unesite korisničko ime"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none hover:border-gray-400"
                />
              </div>
              <p
                className={`text-sm mt-1 min-h-[1.25rem] ${
                  errors.username ? "text-red-500" : "invisible"
                }`}
              >
                {errors.username?.message || "placeholder"}
              </p>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lozinka
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register("password")}
                  type={view ? "password" : "text"}
                  placeholder="Unesite lozinku"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none hover:border-gray-400"
                />
                <button
                  type="button"
                  onClick={handlePasswordView}
                  className="!bg-transparent border-none shadow-none appearance-none absolute inset-y-0 right-0 pr-12 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {view ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <p
                className={`text-sm mt-1 min-h-[1.25rem] ${
                  errors.password ? "text-red-500" : "invisible"
                }`}
              >
                {errors.password?.message || "placeholder"}
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
            >
              Prijavite se
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Nemate nalog?{" "}
              <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors duration-200">
                Registrujte se
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
