import nexusLogo from "@/assets/nexus-logo.png";

const UniversityLogo = () => {
  return (
    <div className="flex items-center">
      <img
        src={nexusLogo}
        alt="Nexus University"
        className="h-20 w-20 object-contain"
      />

      <div>
        <h1 className="font-serif text-2xl font-bold tracking-wide text-slate-900">
          NEXUS
        </h1>

        <p className="font-serif text-sm font-semibold tracking-[0.2em] text-slate-800">
          UNIVERSITY
        </p>
      </div>
    </div>
  );
};

export default UniversityLogo;
