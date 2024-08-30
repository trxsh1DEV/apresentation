import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute: React.FC = () => {
  const token = Cookies.get("token");

  if (!token) {
    // Redireciona para a página de login se não houver token
    return <Navigate to="/login" replace />;
  }

  // Se houver token, renderiza o conteúdo da rota
  return <Outlet />;
};

export default ProtectedRoute;
