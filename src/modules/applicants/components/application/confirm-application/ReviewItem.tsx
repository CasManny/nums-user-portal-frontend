interface ReviewItemProps {
  label: string;
  value: string;
}

const ReviewItem = ({ label, value }: ReviewItemProps) => {
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>

      <p className="mt-1 text-sm font-medium text-foreground">
        {value || "Not provided"}
      </p>
    </div>
  );
};

export default ReviewItem