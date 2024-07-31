// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import Clients from "./pages/Clients/Clients";
import Client from "./pages/Clients/Client";
import Peripherical from "./pages/Peripherical/TablePeriphericals";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import Charts from "./pages/Charts/Charts";
import CompareHardware from "./pages/Performance/CompareHardware";
import Softwares from "./pages/Software/Software";
import SearchComponent from "./components/SearchComponent";
import SeuComponente from "./components/test";
import { ModeToggle } from "./components/customerComponents/mode-toggle";
import { ThemeProvider } from "./components/ui/theme-provider";
import Modal from "./components/Modal/ModalComponent";
import AlertTrigger from "./pages/Triggers/Trigger";
import Layout from "./pages/Layout/Layout";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Use Layout como elemento principal
      children: [
        {
          path: "/",
          element: <Clients />,
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
