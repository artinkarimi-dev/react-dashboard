function BackgroundOverlay() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.10),transparent_45%)]" />

      <div className="absolute -top-44 -left-44 w-[600px] h-[600px] bg-emerald-400/20 blur-[200px] rounded-full" />

      <div className="absolute -bottom-44 -right-44 w-[600px] h-[600px] bg-teal-300/20 blur-[220px] rounded-full" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </div>
  );
}

export default BackgroundOverlay;
