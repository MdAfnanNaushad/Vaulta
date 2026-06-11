const UserNode = ({
  data,
}) => {
  return (
    <div
      className="
        min-w-[220px]
        bg-white
        border
        border-[#d2cecb]
        rounded-[12px]
        p-5
      "
    >
      <p
        className="
          text-[12px]
          uppercase
          tracking-wide
          text-[#999ba3]
        "
      >
        Member
      </p>

      <h3
        className="
          mt-2
          text-lg
          font-medium
          text-[#0c0a08]
        "
      >
        {data.name}
      </h3>

      <p
        className="
          mt-1
          text-sm
          text-[#4d505d]
        "
      >
        {data.role}
      </p>

      <div
        className="
          mt-4
          h-[4px]
          w-16
          bg-[#e4f222]
          rounded-full
        "
      />
    </div>
  );
};

export default UserNode;