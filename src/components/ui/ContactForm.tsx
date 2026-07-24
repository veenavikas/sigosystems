"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Company name is required."),
  vertical: z.enum(["AIQU", "GIS", "ACADEMY", "LABS", "General"]),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vertical: "General",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setIsSuccess(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            company: data.company,
            vertical: data.vertical,
            message: data.message,
            to_name: "SIGO Systems Team",
          },
          publicKey
        );
      } else {
        // Fallback simulation mode when keys are not set yet
        console.warn("EmailJS credentials missing in environment variables. Simulating email dispatch...");
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setIsSuccess(true);
      reset();
      
      // Auto dismiss success message after 6 seconds
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (error: any) {
      console.error("EmailJS submission error:", error);
      setErrorMessage(
        error?.text || error?.message || "Failed to send email. Please check your SMTP / EmailJS credentials or try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {isSuccess && (
        <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl shadow-sm flex items-center gap-3">
          <span className="material-symbols-outlined text-green-600">check_circle</span>
          <span>Thank you! Your message has been sent successfully. Our team will get back to you shortly.</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl shadow-sm flex items-center gap-3">
          <span className="material-symbols-outlined text-red-600">error</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-[#0B2559]">Name</label>
          <input
            {...register("name")}
            id="name"
            placeholder="John Doe"
            className="w-full px-5 py-3.5 bg-[#f4f7fc] border border-[#e7eeff] rounded-xl focus:outline-none focus:bg-white focus:border-[#1E5FE0] focus:ring-4 focus:ring-[#1E5FE0]/10 text-slate-800 transition-all placeholder:text-slate-400"
          />
          {errors.name && <p className="text-sm text-red-500 font-medium">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-[#0B2559]">Email</label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="john@example.com"
            className="w-full px-5 py-3.5 bg-[#f4f7fc] border border-[#e7eeff] rounded-xl focus:outline-none focus:bg-white focus:border-[#1E5FE0] focus:ring-4 focus:ring-[#1E5FE0]/10 text-slate-800 transition-all placeholder:text-slate-400"
          />
          {errors.email && <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-bold text-[#0B2559]">Company</label>
          <input
            {...register("company")}
            id="company"
            placeholder="Organization Name"
            className="w-full px-5 py-3.5 bg-[#f4f7fc] border border-[#e7eeff] rounded-xl focus:outline-none focus:bg-white focus:border-[#1E5FE0] focus:ring-4 focus:ring-[#1E5FE0]/10 text-slate-800 transition-all placeholder:text-slate-400"
          />
          {errors.company && <p className="text-sm text-red-500 font-medium">{errors.company.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="vertical" className="text-sm font-bold text-[#0B2559]">Vertical of Interest</label>
          <select
            {...register("vertical")}
            id="vertical"
            className="w-full px-5 py-3.5 bg-[#f4f7fc] border border-[#e7eeff] rounded-xl focus:outline-none focus:bg-white focus:border-[#1E5FE0] focus:ring-4 focus:ring-[#1E5FE0]/10 text-slate-800 transition-all appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M7%2010L12%2015L17%2010%22%20stroke%3D%22%230B2559%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:24px_24px] bg-[position:right_12px_center] bg-no-repeat"
          >
            <option value="General">General Inquiry</option>
            <option value="AIQU">AIQU - AI & Quantum</option>
            <option value="GIS">GIS - Geospatial Intelligence</option>
            <option value="ACADEMY">ACADEMY - Workforce Training</option>
            <option value="LABS">LABS - R&D and Prototyping</option>
          </select>
          {errors.vertical && <p className="text-sm text-red-500 font-medium">{errors.vertical.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-[#0B2559]">Message</label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          placeholder="How can we help you?"
          className="w-full px-5 py-3.5 bg-[#f4f7fc] border border-[#e7eeff] rounded-xl focus:outline-none focus:bg-white focus:border-[#1E5FE0] focus:ring-4 focus:ring-[#1E5FE0]/10 text-slate-800 transition-all placeholder:text-slate-400 resize-none"
        />
        {errors.message && <p className="text-sm text-red-500 font-medium">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1E5FE0] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-[0_8px_25px_rgba(30,95,224,0.3)] hover:shadow-[0_12px_35px_rgba(30,95,224,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none flex justify-center items-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Sending...
          </>
        ) : (
          <>
            Submit Request
            <span className="material-symbols-outlined text-[18px]">send</span>
          </>
        )}
      </button>
    </form>
  );
}
