const NextOfKin = () => {
  return (
    <div className="rounded-lg border bg-background p-4">
      <h2 className="mb-4 text-xs font-semibold">Next of Kin</h2>

      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
        <InformationRow label="Full Name" value="John Sabastine" />

        <InformationRow label="Relationship" value="Father" />

        <InformationRow label="Phone Number" value="+234 801 234 5678" />

        <InformationRow label="Email Address" value="john@example.com" />

        <InformationRow label="Address" value="12 University Road, Nsukka" />
      </div>
    </div>
  );
};

const InformationRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="grid min-h-[35px] grid-cols-[120px_1fr] items-center border-b">
      <span className="text-[9px] text-muted-foreground">{label}</span>

      <span className="text-[9px] font-medium">{value}</span>
    </div>
  );
};

export default NextOfKin;
