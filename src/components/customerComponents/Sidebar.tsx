import { NavLink as ReactRouterNavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboardIcon,
  UserCircle,
  LogOut,
  LucideLayers,
  MessageCircle,
  Siren,
  MonitorSmartphone,
  LocateFixed,
  Code,
} from "lucide-react";

const Sidebar = () => {
  return (
    <nav className="fixed top-0 bottom-0 left-0 h-full w-16 bg-slate-900 pt-5 mr-16 transition-all duration-300 ease-in-out overflow-hidden hover:w-52 z-20">
      <>
        <ReactRouterNavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <Home size={32} />
            <span className="ml-2">Home</span>
          </div>
        </ReactRouterNavLink>

        <ReactRouterNavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <LayoutDashboardIcon size={32} />
            <span className="ml-2">Dashboards</span>
          </div>
        </ReactRouterNavLink>

        <ReactRouterNavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <LucideLayers size={32} />
            <span className="ml-2">Inventário</span>
          </div>
        </ReactRouterNavLink>

        <ReactRouterNavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <Siren size={32} />
            <span className="ml-2">Alertas</span>
          </div>
        </ReactRouterNavLink>

        <ReactRouterNavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <MonitorSmartphone size={32} />
            <span className="ml-2">Equipamentos</span>
          </div>
        </ReactRouterNavLink>

        <ReactRouterNavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <LocateFixed size={32} />
            <span className="ml-2">Geolocalização</span>
          </div>
        </ReactRouterNavLink>

        <ReactRouterNavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <Code size={32} />
            <span className="ml-2">API</span>
          </div>
        </ReactRouterNavLink>

        <ReactRouterNavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <MessageCircle size={32} />
            <span className="ml-2">Suporte</span>
          </div>
        </ReactRouterNavLink>

        <ReactRouterNavLink
          to="/myprofile"
          className="text-azure block w-52 p-2.5"
        >
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <UserCircle size={32} />
            <span className="ml-2">Meu perfil</span>
          </div>
        </ReactRouterNavLink>

        <ReactRouterNavLink to="/" className="text-azure block w-52 p-2.5">
          <div className="flex items-center font-medium gap-2.5 p-2.5 rounded transition-all duration-300 ease-in cursor-pointer hover:bg-gray-700 hover:text-indigo-400">
            <LogOut size={32} />
            <span className="ml-2">Quit</span>
          </div>
        </ReactRouterNavLink>
      </>
    </nav>
  );
};

export default Sidebar;
