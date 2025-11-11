import { Outlet, NavLink } from "react-router-dom";
import {
  Home,
  NotebookPen,
  LayoutDashboard,
  Info,
  FileText,
  CircleUser,
  LogIn,
  UserPlus,
} from "lucide-react"; // modern icon library

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/*sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-16 bg-gray-900 text-white flex flex-col items-center py-6 space-y-6">
        <NavLink
          to="/"
          title="Home"
          className={({ isActive }) =>
            `p-2 rouded-xl transition-colors ${
              isActive ? "bg-yellow-400 text-hray-900" : "hover:bg-gray-700"
            }`
          }
        >
          <Home size={22} />
        </NavLink>
        <NavLink
          to="/form"
          title="Form"
          className={({ isActive }) =>
            `p-2 rouded-xl transition-colors ${
              isActive ? "bg-yellow-400 text-hray-900" : "hover:bg-gray-700"
            }`
          }
        >
          <NotebookPen size={22} />
        </NavLink>
        <NavLink
          to="/dashboard"
          title="Dasboard"
          className={({ isActive }) =>
            `p-2 rouded-xl transition-colors ${
              isActive ? "bg-yellow-400 text-hray-900" : "hover:bg-gray-700"
            }`
          }
        >
          <LayoutDashboard size={22} />
        </NavLink>
        <NavLink
          to="/audit"
          title="Dasboard"
          className={({ isActive }) =>
            `p-2 rouded-xl transition-colors ${
              isActive ? "bg-yellow-400 text-hray-900" : "hover:bg-gray-700"
            }`
          }
        >
          <Info size={22} />
        </NavLink>
        <NavLink
          to="/report"
          title="Dasboard"
          className={({ isActive }) =>
            `p-2 rouded-xl transition-colors ${
              isActive ? "bg-yellow-400 text-hray-900" : "hover:bg-gray-700"
            }`
          }
        >
          <FileText size={22} />
        </NavLink>
        <div className="flex-grow"></div>
        <NavLink
          to="/profile"
          title="Profile"
          className={({ isActive }) =>
            `p-2 rouded-xl transition-colors ${
              isActive ? "bg-yellow-400 text-hray-900" : "hover:bg-gray-700"
            }`
          }
        >
          <CircleUser size={22} />
        </NavLink>
      </aside>
      <main className="flex-1 ml-16 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
