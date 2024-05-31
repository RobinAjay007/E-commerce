import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import login from '../../../public/images/login.jpg'
import logo from "/logo.png";


const Login = () => {
  const initial = {
    emailId: "",
    password: "",
  };

  const Navigate = useNavigate();

  const [check, setCheckdata] = useState(initial);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4898/check/user", check)
      .then((response) => {
        console.log(response.data);
        let token = response.data.token;
        localStorage.setItem("token", token);
        // const { response.message.data}=res.data
        if (response.data.success) {
          toast.success(response.data.success);
          Navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warn("Invalid Credentials");
      })
      .finally();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCheckdata({ ...check, [name]: value });
  };

  return (


    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src={logo}
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              autoComplete="email"
              name="emailId"
              value={check.emailId}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              value={check.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <Link to={"/register"}><p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
      </p></Link>
    </div>
  </div>
  );
};

export default Login;
