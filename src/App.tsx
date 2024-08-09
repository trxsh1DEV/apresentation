// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import TableInventoryDevices from "./pages/Clients/Clients";
import Client from "./pages/Clients/Client";
import Peripherical from "./pages/Peripherical/TablePeriphericals";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import Charts from "./pages/Charts/Charts";
import CompareHardware from "./pages/Performance/CompareHardware";
import Softwares from "./pages/Software/Software";
import SearchComponent from "./components/SearchComponent";
import SeuComponente from "./components/test";
import { ThemeProvider } from "./components/ui/theme-provider";
import Modal from "./components/Modal/ModalComponent";
import AlertTrigger from "./pages/Triggers/Trigger";
import Layout from "./pages/Layout/Layout";
import StockAutomatic from "./pages/Stock/StockTable";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          path: "/input",
          element: <SearchComponent />,
        },
        {
          path: "/softwares",
          element: <Softwares />,
        },
        {
          path: "/peripherical",
          element: <Peripherical />,
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
  ]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* <Thempro */}
      <QueryClientProvider client={queryClient}>
        <Modal />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
