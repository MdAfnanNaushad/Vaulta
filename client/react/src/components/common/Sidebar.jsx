import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  Network,
  Wallet,
  User,
  LogOut,
  TrendingUp,
} from "lucide-react";

const Sidebar = ({ open }) => {
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
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    window.location.href = "/login";
  };

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
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
          md:sticky
          top-0
          left-0
          z-50

          h-screen
          w-[280px]

          transition-all
          duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }

          bg-[#ffffff]
          border-r
          border-[#d2cecb]
          flex
          flex-col
        `}
      >
        {/* Logo */}
        <div
          className="
            h-20
            px-6
            flex
            items-center
            border-b
            border-[#d2cecb]
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-[4px]
                bg-[#e4f222]
                flex
                items-center
                justify-center
              "
            >
              <TrendingUp
                size={18}
                className="text-[#0c0a08]"
              />
            </div>

            <div>
              <h1
                className="
                  text-[#0c0a08]
                  text-lg
                  font-medium
                "
              >
                NexaChain
              </h1>

              <p
                className="
                  text-xs
                  text-[#999ba3]
                "
              >
                Investment Platform
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <div
            className="
              mb-4
              px-3
              text-[11px]
              uppercase
              tracking-wider
              text-[#999ba3]
            "
          >
            Navigation
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3

                    rounded-[4px]

                    transition-all
                    duration-200

                    ${
                      isActive
                        ? `
                          bg-[#e4f222]
                          text-[#0c0a08]
                          font-medium
                        `
                        : `
                          text-[#4d505d]
                          hover:bg-[#f4f2f0]
                          hover:text-[#0c0a08]
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

        {/* User Card */}
        <div className="px-4 pb-4">
          <div
            className="
              bg-[#f4f2f0]
              rounded-[12px]
              p-4
              border
              border-[#d2cecb]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  h-10
                  w-10
                  rounded-full
                  bg-[#0c0a08]
                  flex
                  items-center
                  justify-center
                  text-white
                  text-sm
                  font-medium
                "
              >
                A
              </div>

              <div>
                <h4
                  className="
                    text-sm
                    font-medium
                    text-[#0c0a08]
                  "
                >
                  Afnan
                </h4>

                <p
                  className="
                    text-xs
                    text-[#999ba3]
                  "
                >
                  Investor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div
          className="
            border-t
            border-[#d2cecb]
            p-4
          "
        >
          <button
            onClick={handleLogout}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2

              py-3

              rounded-[4px]

              border
              border-[#d2cecb]

              text-[#0c0a08]

              hover:bg-[#f4f2f0]

              transition-all
            "
          >
            <LogOut size={18} />

            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;