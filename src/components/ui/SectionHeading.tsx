import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-5", {
      "items-start text-left": align === "left",
      "items-center text-center": align === "center",
      "items-end text-right": align === "right",
    }, className)}>
      <div className={cn("h-1 w-12 bg-gradient-to-r from-[#1E5FE0] to-[#0B2559] rounded-full", {
        "ml-auto mr-auto": align === "center",
        "ml-auto": align === "right"
      })}></div>
      <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-[#0B2559]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[#5B6B85] max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
