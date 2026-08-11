import { Edit3 } from "lucide-react";

interface ReviewSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onEdit?: () => void;
}

const ReviewSection = ({
  title,
  description,
  icon,
  children,
  onEdit,
}: ReviewSectionProps) => {
  return (
    <section className="overflow-hidden rounded-lg border bg-background">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
            {icon}
          </div>

          <div>
            <h2 className="text-sm font-semibold">{title}</h2>

            <p className="mt-0.5 text-xs text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-primary transition hover:bg-primary/10"
        >
          <Edit3 className="h-3.5 w-3.5" />
          Edit
        </button>
      </div>

      {/* Section Content */}
      <div className="p-5">{children}</div>
    </section>
  );
};

export default ReviewSection;