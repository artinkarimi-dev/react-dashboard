function Divider() {
  return (
    <div className="relative mx-4 h-15 w-px">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
      <div className="absolute inset-0 blur-[1px] opacity-100 bg-gradient-to-b from-transparent via-emerald-300 to-transparent"></div>
    </div>
  );
}

export default Divider;
