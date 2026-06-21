import { Bell, Menu, Search, Sun, Moon } from "lucide-react";

import { useLocation } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import { useTheme } from "../context/ThemeContext";

const Header = ({ toggleSidebar }) => {
  const { dark, setDark } = useTheme();
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";

      case "/investments":
        return "Investments";

      case "/referrals":
        return "Referral Network";

      case "/wallet":
        return "Wallet";

      case "/profile":
        return "Profile";

      default:
        return "Dashboard";
    }
  };
  const { data: user } = useProfile();
  return (
    <header
  className="
    sticky
    top-0
    z-40

    bg-white/95
    dark:bg-slate-900/95

    border-b
    border-slate-200
    dark:border-slate-700

    backdrop-blur-xl
  "
>
      <div
        className="
          h-20
          px-4
          md:px-8

          flex
          items-center
          justify-between
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Mobile Toggle */}
          <button
            onClick={toggleSidebar}
            className="
              md:hidden

              h-10
              w-10

              rounded-md

              border
              border-[#d2cecb]

              flex
              items-center
              justify-center

              hover:bg-[#f4f2f0]

              transition-all
            "
          >
            <Menu size={20} />
          </button>

          {/* Mobile Logo */}
          <img
            src="/Logo.png"
            alt="Vaulta"
            className="
    h-40
    w-40
    object-contain
    md:hidden
  "
          />

          <div>
            <h1
              className="
                text-2xl
                md:text-[32px]

                leading-none
                font-medium
                text-slate-900
dark:text-white
              "
            >
              {getPageTitle()}
            </h1>

            <p
              className="
                mt-1
                text-sm
                text-[#999ba3]
              "
            >
              Welcome back
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* Search */}
          <div
            className="
              hidden
              lg:flex

              items-center
              gap-3

              px-4
              py-3

              w-[320px]

              rounded-md

              border
              border-[#d2cecb]

              bg-[#f4f2f0]
            "
          >
            <Search
              size={16}
              className="
                text-[#999ba3]
              "
            />

            <input
              type="text"
              placeholder="Search investments..."
              className="
                flex-1
                bg-transparent
                outline-none

                text-sm

                placeholder:text-[#999ba3]
              "
            />
          </div>
          <button
  onClick={() => setDark(!dark)}
  className="
    h-11
    w-11

    rounded-xl

    border
    border-slate-200
    dark:border-slate-700

    flex
    items-center
    justify-center

    bg-white
    dark:bg-slate-800

    transition-all
  "
>
  {dark ? (
    <Sun size={18} />
  ) : (
    <Moon size={18} />
  )}
</button>

          {/* Notification */}
          <button
            className="
              relative

              h-11
              w-11

              rounded-md

              border
              border-[#d2cecb]

              bg-white

              flex
              items-center
              justify-center

              hover:bg-[#f4f2f0]

              transition-all
            "
          >
            <Bell size={18} />

            <span
              className="
                absolute
                top-2
                right-2

                h-2
                w-2

                rounded-full

                bg-[#e4f222]
              "
            />
          </button>

          {/* User */}
          <div
            className="
              flex
              items-center
              gap-3

              px-3
              py-2

              rounded-xl

              border
              border-[#d2cecb]

              bg-[#f4f2f0]
            "
          >
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
              {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div className="hidden sm:block">
              <h3
                className="
                  text-sm
                  font-medium
                  text-[#0c0a08]
                "
              >
                {user?.fullName || "User"}
              </h3>

              <p
                className="
                  text-xs
                  text-[#999ba3]
                "
              >
                {user?.role || "USER"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
