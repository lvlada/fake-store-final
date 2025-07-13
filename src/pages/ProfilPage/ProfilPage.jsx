import { useAuth } from "../../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center mt-10 text-gray-600 dark:text-gray-300 text-lg">
        Učitavanje profila...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full">
        <div className="flex flex-col items-center">
          <img
            src={user.image}
            alt="Profilna slika"
            className="w-32 h-32 rounded-full shadow-md border-4 border-indigo-500 object-cover"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600 dark:text-gray-300">Korisničko ime:</span>
            <span className="text-gray-800 dark:text-white">{user.username}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600 dark:text-gray-300">Email:</span>
            <span className="text-gray-800 dark:text-white">{user.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600 dark:text-gray-300">Ime:</span>
            <span className="text-gray-800 dark:text-white">{user.firstName}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600 dark:text-gray-300">Prezime:</span>
            <span className="text-gray-800 dark:text-white">{user.lastName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProfilePage };
