import { NavLink } from "react-router-dom";
import {
  Home,
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
} from "lucide-react";
import { logout, userIsLogged } from "@/pages/Auth/token-methods";
import { BarChart4 } from "lucide-react";

const Sidebar = () => {
  return (
    <nav className="fixed top-0 bottom-0 left-0 h-full w-[70px] bg-slate-100 dark:bg-slate-900 pt-5 mr-16 transition-all duration-300 ease-in-out overflow-hidden hover:w-52 z-20">
      <>
        <NavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 px-2.5  rounded transition-all duration-300 ease-in cursor-pointer  hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <Home size={32} />
            <span className="ml-2 py-2">Home</span>
          </div>
        </NavLink>

        <NavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <LucideLayers size={32} />
            <span className="ml-2 py-2">Inventário</span>
          </div>
        </NavLink>

        <NavLink
          to="/dashboards-general"
          className="text-azure block w-52 p-2.5"
        >
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <BarChart4 size={32} />
            <span className="ml-2 py-2">Dashboards</span>
          </div>
        </NavLink>

        <NavLink to="/triggers" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <Siren size={32} />
            <span className="ml-2 py-2">Alertas</span>
          </div>
        </NavLink>

        <NavLink to="/stock" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <MonitorSmartphone size={32} />
            <span className="ml-2 py-2">Equipamentos</span>
          </div>
        </NavLink>

        <NavLink to="/development" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <Code size={32} />
            <span className="ml-2 py-2">API</span>
          </div>
        </NavLink>

        <NavLink
          to="https://wa.me/5511969642568"
          target="_blank"
          className="text-azure block w-52 p-2.5"
        >
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <MessageCircle size={32} />
            <span className="ml-2 py-2">Suporte</span>
          </div>
        </NavLink>

        <NavLink to="/custom" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <LayoutDashboardIcon size={32} />
            <span className="ml-2 py-2">Customização</span>
          </div>
        </NavLink>

        <NavLink to="/download" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <DownloadCloud size={32} />
            <span className="ml-2 py-2">Download</span>
          </div>
        </NavLink>

        <NavLink to="/payment" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <CreditCard size={32} />
            <span className="ml-2 py-2">Assinatura</span>
          </div>
        </NavLink>

        <NavLink to="/profile" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
            <UserCircle size={32} />
            <span className="ml-2 py-2">Meu perfil</span>
          </div>
        </NavLink>

        {userIsLogged() ? (
          <NavLink to="/login" className="text-azure block w-52 p-2.5">
            <div
              onClick={() => logout()}
              className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400"
            >
              <LogOut size={32} />
              <span className="ml-2 py-2">Sair</span>
            </div>
          </NavLink>
        ) : (
          <NavLink to="/" className="text-azure block w-52 p-2.5">
            <div className="flex items-center font-medium gap-2.5 px-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-green-300  dark:hover:bg-slate-600 dark:hover:text-indigo-400">
              <LogOut size={32} />
              <span className="ml-2 py-2">Entrar</span>
            </div>
          </NavLink>
        )}
      </>
    </nav>
  );
};

export default Sidebar;
