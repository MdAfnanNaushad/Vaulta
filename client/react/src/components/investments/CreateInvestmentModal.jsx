import {
  useForm,
} from "react-hook-form";

const CreateInvestmentModal =
  ({
    onSubmit,
    closeModal,
  }) => {
    const {
      register,
      handleSubmit,
    } = useForm();

    return (
      <div
        className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
      "
      >
        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="
          bg-slate-900
          p-8
          rounded-2xl
          w-[500px]
        "
        >
          <h2 className="text-xl mb-6">
            Create Investment
          </h2>

          <input
            {...register("planName")}
            placeholder="Plan Name"
            className="w-full mb-4"
          />

          <input
            type="number"
            {...register("amount")}
            placeholder="Amount"
            className="w-full mb-4"
          />

          <input
            type="number"
            {...register(
              "dailyROIPercentage"
            )}
            placeholder="ROI %"
            className="w-full mb-4"
          />

          <input
            type="date"
            {...register(
              "startDate"
            )}
            className="w-full mb-4"
          />

          <input
            type="date"
            {...register(
              "endDate"
            )}
            className="w-full mb-4"
          />

          <button
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    );
  };

export default CreateInvestmentModal;