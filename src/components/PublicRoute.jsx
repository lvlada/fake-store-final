import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

function PublicRoute() {
  const { user, loading } = useAuth()

  if (loading) return <div>Učitavanje...</div>;
  if (user) return <Navigate to="/" replace />;

   return <Outlet />;
}

  export { PublicRoute }