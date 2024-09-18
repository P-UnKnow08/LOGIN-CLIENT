import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singin, isAuthenticated, errors: singinErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    singin(data);
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {singinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center m-2" key={i}>
            {error}
          </div>
        ))}
         <h1 className="text-3xl font-bold my-2">Login</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true})}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email es requerido</p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
            autoComplete="new-password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">Password es requerido</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-400 text-white px-4 py-2 rounded-md my-2"
          >
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between ">
          Do not have an account?{" "}
          <Link to="/register" className="text-sky-500">
            Sing up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
