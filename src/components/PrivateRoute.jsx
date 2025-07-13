import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

function PrivateRoute() {
  const { user, loading } = useAuth();

  if (loading) return <div>Učitavanje...</div>;
  if (!user) return <Navigate to="/landing" replace />;

  return <Outlet />;
}

export { PrivateRoute }