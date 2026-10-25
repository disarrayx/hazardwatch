import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Centres content and applies consistent horizontal padding
 * (16px on mobile, 32px from the `sm` breakpoint up).
 */
export default function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-4 sm:px-8", className)}
      {...props}
    />
  );
}