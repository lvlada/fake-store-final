import { useState } from "react";
import { useNavigate } from "react-router";
import { UserCircle2, Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png"
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

function Header() {

  const {user, logout} = useAuth();
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleLogout() {
    setMenuOpen(false);
    logout()
    navigate("/login");
  }

  function handleProfile() {
    setMenuOpen(false);
    navigate("/profile");
  }

  function handleTheme() {
    setDark((d) => !d);
    document.documentElement.classList.toggle("dark");
  }

  return (
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-20 mr-2"
          style={{ minWidth: 32 }}
        />

      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="bg-white! border-black! p-2 rounded-full! hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Promeni temu"
        >
          {theme === "dark"  ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="bg-white! w-5 h-5 text-gray-700" />}
        </button>

        {!user ? (
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-blue-600 text-red-600 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Log In
          </button>
        ) : (
          <div className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black! border-black! dark:bg-white! transition"
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <UserCircle2 className="w-8 h-8 text-white dark:text-red-900" />
              )}
              <span className="text-white dark:text-red-900">{user.username}</span>
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                <button
                  onClick={handleProfile}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-black"
                >
                  My Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export { Header };