import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group

        rounded-[12px]

        border
        border-[#d2cecb]

        bg-[#f4f2f0]

        p-6

        hover:border-[#0c0a08]

        transition-all
        duration-200
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className="
              text-[13px]
              font-medium

              uppercase
              tracking-wide

              text-[#999ba3]
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-4

              text-4xl
              md:text-5xl

              leading-none

              font-medium

              text-[#0c0a08]
            "
          >
            {value}
          </h2>
        </div>

        <div
          className="
            h-11
            w-11

            rounded-[4px]

            bg-[#e4f222]

            flex
            items-center
            justify-center

            text-[#0c0a08]

            shrink-0
          "
        >
          {icon}
        </div>
      </div>

      <div
        className="
          mt-6

          h-[1px]

          bg-[#d2cecb]
        "
      />

      <div
        className="
          mt-4

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-sm
            text-[#999ba3]
          "
        >
          Updated recently
        </span>

        <span
          className="
            text-sm

            text-[#0c0a08]

            group-hover:translate-x-1

            transition-transform
          "
        >
          →
        </span>
      </div>
    </motion.div>
  );
};

export default StatCard;