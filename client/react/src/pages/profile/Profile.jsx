import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../api/profile.api";

const Profile = () => {
  const { data, isLoading } =
    useQuery({
      queryKey: ["profile"],
      queryFn: getProfile,
    });

  if (isLoading) {
    return (
      <div className="text-[#999ba3]">
        Loading profile...
      </div>
    );
  }

  const fields = [
    {
      label: "Full Name",
      value: data.fullName,
    },
    {
      label: "Email",
      value: data.email,
    },
    {
      label: "Mobile",
      value: data.mobile,
    },
    {
      label: "Referral Code",
      value:
        data.referralCode,
      highlight: true,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[13px] uppercase tracking-wide text-[#999ba3]">
          Account
        </p>

        <h1 className="mt-2 text-5xl font-normal text-[#0c0a08]">
          Profile
        </h1>
      </div>

      <div
        className="
          bg-[#f4f2f0]
          border
          border-[#d2cecb]
          rounded-[12px]
          p-8
        "
      >
        <div className="grid md:grid-cols-2 gap-8">
          {fields.map(
            (field) => (
              <div
                key={
                  field.label
                }
              >
                <p
                  className="
                    text-[13px]
                    uppercase
                    tracking-wide
                    text-[#999ba3]
                  "
                >
                  {field.label}
                </p>

                <h3
                  className={`
                    mt-2
                    text-xl
                    font-medium
                    ${
                      field.highlight
                        ? "text-[#0c0a08]"
                        : "text-[#0c0a08]"
                    }
                  `}
                >
                  {field.value}
                </h3>
              </div>
            )
          )}
        </div>

        <div
          className="
            mt-10
            h-[4px]
            w-24
            rounded-full
            bg-[#e4f222]
          "
        />
      </div>
    </div>
  );
};

export default Profile;