const SummaryCard = ({ title, value, Icon, color }) => {
  const colorMap = {
    blue: {
      glow: "from-blue-500 to-cyan-400",
      iconBox: "bg-blue-50 ring-blue-100",
      iconColor: "text-blue-600",
      line: "from-blue-500 to-cyan-400",
    },
    indigo: {
      glow: "from-indigo-600 to-purple-500",
      iconBox: "bg-indigo-50 ring-indigo-100",
      iconColor: "text-indigo-600",
      line: "from-indigo-600 to-purple-500",
    },
    amber: {
      glow: "from-orange-500 to-yellow-400",
      iconBox: "bg-orange-50 ring-orange-100",
      iconColor: "text-orange-600",
      line: "from-orange-500 to-yellow-400",
    },
    rose: {
      glow: "from-rose-600 to-pink-500",
      iconBox: "bg-rose-50 ring-rose-100",
      iconColor: "text-rose-600",
      line: "from-rose-600 to-pink-500",
    },
  };

  const theme = colorMap[color] || colorMap.blue;

  return (
    <div className="group relative bg-white p-5 sm:p-6 md:p-7 rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] md:hover:-translate-y-2 overflow-hidden">
      <div
        className={`absolute -right-10 -top-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${theme.glow}`}
      />

      <div className="relative z-10 flex flex-col h-full justify-between gap-6 sm:gap-8">
        <div className="flex justify-between items-start">
          <div className="relative">
            <div
              className={`absolute inset-0 blur-2xl opacity-20 group-hover:opacity-30 transition duration-500 bg-gradient-to-br ${theme.glow}`}
            />

            <div
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center ${theme.iconBox} ring-1 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
            >
              <Icon size={24} className={`sm:size-7 ${theme.iconColor}`} />
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[9px] sm:text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
              Status
            </span>

            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 uppercase">
                Online
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.18em]">
            {title}
          </h4>

          <div className="flex items-end justify-between gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none break-words">
              {value.toLocaleString()}
            </h2>

            <svg
              className="w-12 sm:w-14 md:w-16 h-6 sm:h-7 md:h-8 text-gray-200 group-hover:text-slate-300 transition-colors duration-500 flex-shrink-0"
              viewBox="0 0 100 40"
              fill="none"
            >
              <path
                d="M0 35C20 35 30 5 50 20C70 35 80 15 100 5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r ${theme.line} transition-all duration-700 group-hover:w-full`}
      />
    </div>
  );
};

export default SummaryCard;
