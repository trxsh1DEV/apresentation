import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import TableInventoryDevices from "./pages/Clients/Clients";
import Client from "./pages/Clients/Client";
import { TablePeripherals } from "./pages/Peripherical/TablePeriphericals";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import Charts from "./pages/Charts/Charts";
import CompareHardware from "./pages/Performance/CompareHardware";
import SeuComponente from "./components/test";
import { ThemeProvider } from "./components/ui/theme-provider";
import Modal from "./components/Modal/ModalComponent";
import AlertTrigger from "./pages/Triggers/Trigger";
import Layout from "./pages/Layout/Layout";
import StockAutomatic from "./pages/Stock/StockTable";
import LoginPage from "./pages/Auth/Login";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <ProtectedRoute />, // Adicione o ProtectedRoute aqui
          children: [
            {
              path: "/",
              element: <TableInventoryDevices />,
            },
            {
              path: "/devices/inventory/general",
              element: <TableInventoryDevices />,
            },
            {
              path: "/performance",
              element: <CompareHardware />,
            },
            {
              path: "/stock",
              element: <TablePeripherals />,
            },
            {
              path: "/stock/automatic",
              element: <StockAutomatic />,
            },
            {
              path: "/teste",
              element: <SeuComponente />,
            },
            {
              path: "/charts",
              element: <Charts />,
            },
            {
              path: "/agent/:id",
              element: <Client />,
            },
            {
              path: "/triggers",
              element: <AlertTrigger />,
            },
          ],
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Modal />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
