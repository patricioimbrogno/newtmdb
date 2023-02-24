import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const messages = {
  req: "This is required",
  mail: "Must use a valid email",
  match: "Your passwords do not match",
  lenght: "Password should be as least 8 characters",
  contain: "Password should contain at least 1 alphabet and 1 numeric value",
  patternValue: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
  emailPatternValue:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
  });

  

  const [passwordShown, setPasswordShown] = useState({
    pass: false,
    repeatedPass: false,
  });

  const togglePasswordVisiblity = () => {
    setPasswordShown({ ...passwordShown, pass: !passwordShown.pass });
  };

  const toggleRepeatedPasswordVisiblity = () => {
    setPasswordShown({
      ...passwordShown,
      repeatedPass: !passwordShown.repeatedPass,
    });
  };

  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { username, email, password } = data;
    axios
      .post(
        `api/users/`,
        { username, email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => navigate(`/login`));
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Register
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              for="user"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: messages.req })}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <p className="text-red-500">{errors.username?.message}</p>
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
                  pattern: {
                    value: messages.patternValue,
                    message: messages.contain,
                  },
                  minLength: {
                    value: 8,
                    message: messages.lenght,
                  },
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
            <p className="text-red-500">
              {errors.password &&
                errors.password.type === "hasSpecialChar" &&
                "Must have special chars"}
              {errors.password &&
                errors.password.type === "hasNumbers" &&
                "Must have numbers"}
            </p>
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Repeat your password
            </label>
            <div className="relative flex">
              <input
                type={passwordShown.repeatedPass ? "text" : "password"}
                {...register("repeatedPassword", {
                  required: messages.req,
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return messages.match;
                    }
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <i
                className="absolute top-4 right-3 hover:text-violet-500 hover:cursor-pointer"
                onClick={toggleRepeatedPasswordVisiblity}
              >
                {passwordShown.repeatedPass ? (
                  <AiFillEye size={25} />
                ) : (
                  <AiFillEyeInvisible size={25} />
                )}
              </i>
            </div>
            <p className="text-red-500">{errors.repeatedPassword?.message}</p>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Do you already have an account?
          <a
            href="/login"
            className="font-medium text-purple-600 hover:underline ml-1"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

