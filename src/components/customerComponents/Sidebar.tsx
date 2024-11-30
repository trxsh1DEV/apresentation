import { NavLink } from "react-router-dom";
import {
  LayoutDashboardIcon,
  UserCircle,
  LogOut,
  LucideLayers,
  MessageCircle,
  Siren,
  MonitorSmartphone,
  Code,
  DownloadCloud,
  CreditCard,
  AppWindow,
} from "lucide-react";
import { logout, userIsLogged } from "@/pages/Auth/token-methods";
import { BarChart4 } from "lucide-react";

const Sidebar = () => {
  return (
    <nav className="fixed top-0 bottom-0 left-0 h-full w-[60px] sm:w-[70px] text-gray-800 bg-gray-500 dark:bg-slate-900 pt-5 mr-12 sm:mr-16 transition-all duration-300 ease-in-out overflow-hidden hover:w-44 sm:hover:w-52 z-20">
      {/* <NavLink to="/" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <Home size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Home</span>
        </div>
      </NavLink> */}

      <NavLink to="/" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <LucideLayers size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Inventário</span>
        </div>
      </NavLink>

      <NavLink to="/dashboards-general" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <BarChart4 size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Dashboards</span>
        </div>
      </NavLink>

      <NavLink to="/softwares/licenses" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <AppWindow size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Licenças</span>
        </div>
      </NavLink>

      <NavLink to="/triggers" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <Siren size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Alertas</span>
        </div>
      </NavLink>

      <NavLink to="/stock" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <MonitorSmartphone size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Equipamentos</span>
        </div>
      </NavLink>

      <NavLink to="/development" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <Code size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">API</span>
        </div>
      </NavLink>

      <NavLink to="https://wa.me/5511969642568" target="_blank" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <MessageCircle size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Suporte</span>
        </div>
      </NavLink>

      <NavLink to="/custom" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <LayoutDashboardIcon size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Customização</span>
        </div>
      </NavLink>

      <NavLink to="/download" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <DownloadCloud size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Download</span>
        </div>
      </NavLink>

      <NavLink to="/payment" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <CreditCard size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Assinatura</span>
        </div>
      </NavLink>

      <NavLink to="/profile" className="text-white block w-44 sm:w-52 px-2.5 py-2">
        <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
          <UserCircle size={28} className="sm:size-[32px]" />
          <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Meu perfil</span>
        </div>
      </NavLink>

      {userIsLogged() ? (
        <NavLink to="/login" className="text-white block w-44 sm:w-52 px-2.5 py-2">
          <div
            onClick={() => logout()}
            className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400"
          >
            <LogOut size={28} className="sm:size-[32px]" />
            <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Sair</span>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/" className="text-white block w-44 sm:w-52 px-2.5 py-2">
          <div className="flex items-center font-medium gap-2 sm:gap-2.5 px-2 sm:px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <LogOut size={28} className="sm:size-[32px]" />
            <span className="ml-1.5 sm:ml-2 py-1.5 sm:py-2 text-sm sm:text-base">Entrar</span>
          </div>
        </NavLink>
      )}
    </nav>
  );
};

export default Sidebar;