"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon, title, description, className }: CardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className={cn(
        "bg-white p-8 rounded-[24px] border border-[#EDF2FA] shadow-[0_8px_30px_rgba(20,60,150,0.04)] hover:shadow-[0_20px_50px_rgba(30,95,224,0.12)] hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#f0f5ff] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
      
      {icon && (
        <div className="w-14 h-14 bg-[#f4f7fc] border border-[#e7eeff] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1E5FE0] group-hover:border-[#1E5FE0] transition-colors duration-500 shadow-sm relative z-10 text-[#1E5FE0] group-hover:text-white">
          <div className="scale-110">
            {icon}
          </div>
        </div>
      )}
      <div className="relative z-10 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-bold tracking-tight text-[#0B2559] mb-3 group-hover:text-[#1E5FE0] transition-colors duration-300">{title}</h3>
        <p className="text-[15px] leading-relaxed text-[#5B6B85] flex-grow">{description}</p>
      </div>
    </motion.div>
  );
}

interface CardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

export function CardGrid({ children, columns = 3, className }: CardGridProps) {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } }
      }}
      className={cn("grid gap-8", gridClasses[columns], className)}
    >
      {children}
    </motion.div>
  );
}
