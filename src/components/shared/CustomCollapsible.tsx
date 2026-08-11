import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

interface CustomCollapsibleProps {
  title: string;
  icon: ReactNode;
  open: boolean;
  setOpenChange: (open: boolean) => void;
  children: ReactNode;
  disabled?: boolean;
}

const CustomCollapsible = ({
  title,
  icon,
  open,
  setOpenChange,
  children,
  disabled = false,
}: CustomCollapsibleProps) => {
  return (
    <div className="overflow-hidden rounded-lg border bg-background">
      {/* Header */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpenChange(!open)}
        className={`flex w-full items-center justify-between px-4 py-3 text-left transition-colors ${
          disabled ? "cursor-not-allowed opacity-50" : "hover:bg-muted/30"
        }`}
        aria-expanded={open}
        aria-disabled={disabled}
      >
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-nexus-primary text-nexus-accent">
            {icon}
          </div>

          {/* Title */}
          <span className="text-sm font-semibold">{title}</span>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t px-4 py-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomCollapsible;
