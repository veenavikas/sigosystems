"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl border border-outline-variant shadow-sm">
      {isSuccess && (
        <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-md">
          Thank you. Your message has been received. We will be in touch shortly.
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-on-background">Name</label>
        <input
          {...register("name")}
          id="name"
          className="w-full px-4 py-2 border border-outline-variant rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-on-background"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-on-background">Email</label>
        <input
          {...register("email")}
          id="email"
          type="email"
          className="w-full px-4 py-2 border border-outline-variant rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-on-background"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-on-background">Company</label>
        <input
          {...register("company")}
          id="company"
          className="w-full px-4 py-2 border border-outline-variant rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-on-background"
        />
        {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="vertical" className="text-sm font-medium text-on-background">Vertical of Interest</label>
        <select
          {...register("vertical")}
          id="vertical"
          className="w-full px-4 py-2 border border-outline-variant rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-on-background"
        >
          <option value="General">General Inquiry</option>
          <option value="AIQU">AIQU - AI & Quantum</option>
          <option value="GIS">GIS - Geospatial Intelligence</option>
          <option value="ACADEMY">ACADEMY - Workforce Training</option>
          <option value="LABS">LABS - R&D and Prototyping</option>
        </select>
        {errors.vertical && <p className="text-sm text-red-500">{errors.vertical.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-on-background">Message</label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-outline-variant rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-on-background resize-none"
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 flex justify-center items-center"
      >
        {isSubmitting ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
