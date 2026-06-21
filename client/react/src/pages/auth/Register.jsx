import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../../api/auth.api";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      await registerUser(formData);

      alert("Account created successfully");

      navigate("/login");
    } catch (error) {
      alert(error?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md rounded-[12px] border border-[#d2cecb] bg-[#f4f2f0] p-8">
        <h1 className="text-4xl font-medium text-[#0c0a08]">Vaulta</h1>

        <p className="mt-2 text-[#999ba3]">Create your account</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          <input
            {...register("fullName")}
            placeholder="Full Name"
            className="w-full rounded-[4px] border border-[#d2cecb] bg-white px-4 py-3 outline-none"
          />

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full rounded-[4px] border border-[#d2cecb] bg-white px-4 py-3 outline-none"
          />

          <input
            {...register("mobile")}
            placeholder="Mobile Number"
            className="w-full rounded-[4px] border border-[#d2cecb] bg-white px-4 py-3 outline-none"
          />

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full rounded-[4px] border border-[#d2cecb] bg-white px-4 py-3 outline-none"
          />

          <input
            {...register("referralCode")}
            placeholder="Referral Code (Optional)"
            className="w-full rounded-[4px] border border-[#d2cecb] bg-white px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-[4px] bg-[#e4f222] py-3 font-medium text-[#0c0a08]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-[#999ba3]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0c0a08] font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
