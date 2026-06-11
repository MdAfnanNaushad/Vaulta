import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../api/auth.api";

const Login = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const navigate =
    useNavigate();

  const onSubmit = async (
    formData
  ) => {
    try {
      const result =
        await loginUser(
          formData
        );

      localStorage.setItem(
        "accessToken",
        result.accessToken
      );

      localStorage.setItem(
        "refreshToken",
        result.refreshToken
      );

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data
          ?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md rounded-[12px] border border-[#d2cecb] bg-[#f4f2f0] p-8">
        <h1 className="text-4xl font-medium text-[#0c0a08]">
          NexaChain
        </h1>

        <p className="mt-2 text-[#999ba3]">
          Sign in to continue
        </p>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="mt-8 space-y-4"
        >
          <input
            {...register(
              "email"
            )}
            placeholder="Email"
            className="w-full rounded-[4px] border border-[#d2cecb] bg-white px-4 py-3 outline-none"
          />

          <input
            type="password"
            {...register(
              "password"
            )}
            placeholder="Password"
            className="w-full rounded-[4px] border border-[#d2cecb] bg-white px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-[4px] bg-[#e4f222] py-3 font-medium text-[#0c0a08]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;