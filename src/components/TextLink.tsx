import { Link, type LinkProps } from "react-router-dom";

import { LINK_CLASSES } from "@/lib/linkStyles";
import { cn } from "@/lib/utils";

/** In-text link to another page on this site. */
export default function TextLink({ className, ...props }: LinkProps) {
  return <Link className={cn(LINK_CLASSES, className)} {...props} />;
}