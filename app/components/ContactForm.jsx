"use client";

import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const ContactForm = ({ dictionary }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    formState,
    formState: { isSubmitSuccessful, isSubmitted },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://formspree.io/f/xeoqqoqe", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        reset(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    reset(
      {
        name: "",
        email: "",
        message: "",
      },
      {
        keepIsSubmitted: true,
      }
    );
  }, [isSubmitSuccessful]);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between md:pr-[100px]"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="pb-5 sm:w-1/2 sm:pr-10">
          <label className="sm:text-xl" htmlFor="name">
            {dictionary.forms.contactForm.name}
          </label>
          <input
            placeholder={dictionary.forms.contactForm.namePlaceholder}
            defaultValue=""
            {...register("name", { required: true, minLength: 3 })}
            className="w-full border-b border-b-black pr-3 py-2"
          />
          {errors.name && (
            <span className="text-red-400">
              {dictionary.forms.contactForm.required}
            </span>
          )}
        </div>
        <div className="pb-5 sm:w-1/2">
          <label className="sm:text-xl" htmlFor="email">
            {dictionary.forms.contactForm.email}
          </label>
          <input
            placeholder={dictionary.forms.contactForm.emailPlaceholder}
            {...register("email", { required: true })}
            className="w-full border-b border-b-black pr-3 py-2"
            type="email"
          />
          {errors.email && (
            <span className="text-red-400">
              {dictionary.forms.contactForm.required}
            </span>
          )}
        </div>
        <div className="pb-5 sm:w-full">
          <label className="sm:text-xl" htmlFor="messsage">
            {dictionary.forms.contactForm.message}
          </label>
          <textarea
            placeholder={dictionary.forms.contactForm.messagePlaceholder}
            {...register("message", { required: true })}
            className="w-full border-b border-b-black pr-3 py-2"
          />
          {errors.message && (
            <span className="text-red-400">
              {dictionary.forms.contactForm.required}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-fit flex items-center gap-3 px-4 py-2 border border-black rounded-[10px] "
        >
          {dictionary.forms.contactForm.submit}
          <FaArrowRightLong />
        </button>
      </form>
      {isSubmitted && (
        <div className="pt-12 w-full">
          <p className="text-center text-green-500">
            {dictionary.forms.contactForm.submitted}
          </p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
