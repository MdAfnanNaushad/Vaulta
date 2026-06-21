import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  Network,
  Wallet,
  User,
  LogOut,
} from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  const navItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Investments",
      path: "/investments",
      icon: BriefcaseBusiness,
    },
    {
      title: "Referrals",
      path: "/referrals",
      icon: Network,
    },
    {
      title: "Wallet",
      path: "/wallet",
      icon: Wallet,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            z-40
            md:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50

          h-screen
          w-[280px]

          bg-white
dark:bg-slate-900

border-slate-200
dark:border-slate-700

          flex
          flex-col

          transition-transform
          duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
          md:sticky
        `}
      >
        {/* Logo */}
        <div className="h-20 px-6 flex items-center border-b border-[#d2cecb]">
          <div className="flex items-center gap-3">
            <img
              src="/Logo.png"
              alt="Vaulta"
              className="
                h-11
                w-11
                object-contain
              "
            />

            <div>
              <h1 className="text-lg font-medium">Vaulta</h1>

              <p className="text-xs text-[#999ba3]">Investment Platform</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                      flex
                      items-center
                      gap-3
                      px-4
                      py-3
                      rounded-md

                      ${
                        isActive
                          ? `
                          bg-[#e4f222]
                          text-black
                        `
                          : `
                          hover:bg-[#f4f2f0]
                        `
                      }
                    `
                  }
                >
                  <Icon size={18} />

                  <span>{item.title}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="
              w-full
              py-3
              rounded-md
              border
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
