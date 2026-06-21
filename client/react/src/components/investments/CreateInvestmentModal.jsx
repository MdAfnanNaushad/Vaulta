import { useForm } from "react-hook-form";
import { X } from "lucide-react";

const CreateInvestmentModal = ({ onSubmit, closeModal }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/50
        backdrop-blur-sm

        animate-in
        fade-in
        duration-300
      "
    >
      <div
        className="
          absolute
          inset-0
        "
        onClick={closeModal}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          relative

          w-full
          max-w-lg

          bg-white

          rounded-3xl

          border
          border-[#d2cecb]

          shadow-2xl

          p-8

          animate-in
          zoom-in-95
          slide-in-from-bottom-4
          duration-300
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="
                text-2xl
                font-semibold
                text-[#0c0a08]
              "
            >
              Create Investment
            </h2>

            <p className="text-sm text-[#999ba3] mt-1">
              Add a new investment plan
            </p>
          </div>

          <button
            type="button"
            onClick={closeModal}
            className="
              h-10
              w-10

              rounded-full

              hover:bg-[#f4f2f0]

              flex
              items-center
              justify-center
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Fields */}
        <div className="space-y-4">
          <input
            {...register("planName")}
            placeholder="Plan Name"
            className="
              w-full
              px-4
              py-3

              rounded-xl

              border
              border-[#d2cecb]

              outline-none

              focus:ring-2
              focus:ring-[#e4f222]
            "
          />

          <input
            type="number"
            {...register("amount")}
            placeholder="Investment Amount"
            className="
              w-full
              px-4
              py-3

              rounded-xl

              border
              border-[#d2cecb]

              outline-none

              focus:ring-2
              focus:ring-[#e4f222]
            "
          />

          <input
            type="number"
            {...register("dailyROIPercentage")}
            placeholder="Daily ROI %"
            className="
              w-full
              px-4
              py-3

              rounded-xl

              border
              border-[#d2cecb]

              outline-none

              focus:ring-2
              focus:ring-[#e4f222]
            "
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              {...register("startDate")}
              className="
                w-full
                px-4
                py-3

                rounded-xl

                border
                border-[#d2cecb]
              "
            />

            <input
              type="date"
              {...register("endDate")}
              className="
                w-full
                px-4
                py-3

                rounded-xl

                border
                border-[#d2cecb]
              "
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <button
            type="button"
            onClick={closeModal}
            className="
              flex-1

              py-3

              rounded-xl

              border
              border-[#d2cecb]

              hover:bg-[#f4f2f0]
            "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
              flex-1

              py-3

              rounded-xl

              bg-[#e4f222]

              font-semibold

              text-[#0c0a08]

              hover:scale-[1.02]

              transition-all
            "
          >
            Create Investment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateInvestmentModal;
