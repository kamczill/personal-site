"use client";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between md:pr-[100px]"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <div className="pb-5 sm:w-1/2 sm:pr-10">
        <label className="sm:text-xl" htmlFor="name">
          Name
        </label>
        <input
          placeholder="Your name"
          defaultValue=""
          {...register("name", { required: true })}
          className="w-full border-b border-b-black pr-3 py-2"
        />
        {errors.name && (
          <span className="text-red-400">This field is required</span>
        )}
      </div>
      <div className="pb-5 sm:w-1/2">
        <label className="sm:text-xl" htmlFor="email">
          Email Address
        </label>
        <input
          placeholder="Your email"
          {...register("email", { required: true })}
          className="w-full border-b border-b-black pr-3 py-2"
        />
        {errors.email && (
          <span className="text-red-400">This field is required</span>
        )}
      </div>
      <div className="pb-5 sm:w-full">
        <label className="sm:text-xl" htmlFor="messsage">
          Message
        </label>
        <textarea
          placeholder="Your message"
          {...register("message", { required: true })}
          className="w-full border-b border-b-black pr-3 py-2"
        />
        {errors.message && (
          <span className="text-red-400">This field is required</span>
        )}
      </div>

      <button
        type="submit"
        className="w-fit flex items-center gap-3 px-4 py-2 border border-black rounded-[10px] "
      >
        Submit
        <FaArrowRightLong />
      </button>
    </form>
  );
};

export default ContactForm;
