import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const customButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "h-10 px-4 py-2 w-full rounded-md bg-nexus-primary text-nexus-accent cursor-pointer transition-colors hover:bg-nexus-primary/90",
        secondary:
          "w-full h-10 px-4 py-2 rounded-md bg-nexus-accent text-black cursor-pointer transition-colors hover:bg-nexus-accent",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface CustomButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {}

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(customButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
