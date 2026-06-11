import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

import {
  useLocation,
} from "react-router-dom";

const Header = ({
  toggleSidebar,
}) => {
  const location =
    useLocation();

  const getPageTitle = () => {
    switch (
      location.pathname
    ) {
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

  return (
    <header
      className="
        sticky
        top-0
        z-40

        bg-white/95
        backdrop-blur-xl

        border-b
        border-[#d2cecb]
      "
    >
      <div
        className="
          h-20
          px-6
          md:px-8

          flex
          items-center
          justify-between
        "
      >
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={
              toggleSidebar
            }
            className="
              md:hidden

              h-10
              w-10

              rounded-[4px]

              border
              border-[#d2cecb]

              flex
              items-center
              justify-center

              text-[#0c0a08]
            "
          >
            <Menu size={18} />
          </button>

          <div>
            <h1
              className="
                text-[32px]
                leading-none
                font-medium
                text-[#0c0a08]
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

        {/* Right */}
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

              rounded-[4px]

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
                text-[#0c0a08]

                placeholder:text-[#999ba3]
              "
            />
          </div>

          {/* Notification */}
          <button
            className="
              relative

              h-11
              w-11

              rounded-[4px]

              border
              border-[#d2cecb]

              bg-white

              flex
              items-center
              justify-center

              text-[#0c0a08]

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

              rounded-[12px]

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
              A
            </div>

            <div className="hidden sm:block">
              <h3
                className="
                  text-sm
                  font-medium
                  text-[#0c0a08]
                "
              >
                Afnan
              </h3>

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
    </header>
  );
};

export default Header;