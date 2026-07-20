"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ href, variant = "primary", children, className, ...props }: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
    secondary: "bg-primary-fixed text-primary hover:bg-primary-fixed/80",
    outline: "border border-outline-variant bg-transparent hover:bg-surface-container text-on-background",
  };

  const buttonClasses = cn(baseStyles, variants[variant], className);

  if (href) {
    const MotionLink = motion.create(Link);
    return (
      <MotionLink
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={buttonClasses}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
