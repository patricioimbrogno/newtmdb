import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { messages } from './RegisterPage'
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";



const LoginPage = () => {
const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const [passwordShown, setPasswordShown] = useState({
    pass: false,
    repeatedPass: false,
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    axios
      .post(
        `api/users/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((user) => dispatch(setUser(user)))
      .then(()=>navigate(`/`));
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown({ ...passwordShown, pass: !passwordShown.pass });
  };
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Log in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: messages.req,
                pattern: {
                  value: messages.emailPatternValue,
                  message: messages.mail,
                },
              })}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <div className="relative flex">
              <input
                type={passwordShown.pass ? "text" : "password"}
                {...register("password", {
                  required: messages.req,
                })}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <i
                className="absolute top-4 right-3 hover:text-violet-500 hover:cursor-pointer"
                onClick={togglePasswordVisiblity}
              >
                {passwordShown.pass ? (
                  <AiFillEye size={25} />
                ) : (
                  <AiFillEyeInvisible size={25} />
                )}
              </i>
            </div>
            <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <a href="/" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button  type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?
          <a href="/register" className="font-medium text-purple-600 hover:underline ml-1">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
