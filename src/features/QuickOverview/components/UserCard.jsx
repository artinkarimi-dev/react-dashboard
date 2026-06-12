import { useState } from "react";
import { Link } from "react-router-dom";

function UserCard({ user, index }) {
  const [liked, setLiked] = useState(false);

  const roleBadge = {
    ADMIN: "bg-red-50 text-red-600 border border-red-100",
    SUPPORT: "bg-amber-50 text-amber-600 border border-amber-100",
    USER: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  };

  return (
    <article className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 overflow-hidden">
      <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center gap-3 sm:gap-4 p-3 sm:p-4 lg:p-3 xl:p-4">
        <div className="relative flex-shrink-0">
          <img
            src={user.profile}
            alt={user.fullName}
            className="w-14 h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-xl object-cover border border-gray-100 shadow-sm"
          />
          <div className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md flex items-center justify-center text-white text-[10px] font-bold shadow">
            {index + 1}
          </div>
          <button
            onClick={() => setLiked((l) => !l)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white rounded-full shadow flex items-center justify-center text-[11px] hover:scale-110 transition-transform"
            aria-label="like"
          >
            {liked ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start lg:items-start gap-1.5 w-full">
          <header className="flex items-center justify-between w-full gap-2">
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors truncate leading-tight">
                {user.fullName}
              </h3>
              <p className="text-[11px] text-gray-400 truncate">
                @{user.userName}
              </p>
            </div>
            <span
              className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold ${roleBadge[user.role] ?? roleBadge.USER}`}
            >
              {user.role}
            </span>
          </header>

          <footer className="w-full space-y-0.5 pt-1.5 border-t border-gray-100">
            <p className="text-[11px] text-gray-500 flex items-center gap-1 truncate">
              <span className="flex-shrink-0">📧</span>
              <span className="truncate">{user.email}</span>
            </p>
            <p className="text-[11px] text-gray-500 flex items-center gap-1">
              <span className="flex-shrink-0">📱</span>
              <span>{user.phoneNumber}</span>
            </p>
          </footer>

          <Link to="/users" className="w-full mt-0.5">
            <button className="w-full px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-500 hover:to-indigo-500 hover:text-white text-blue-600 text-[11px] font-semibold transition-all duration-300 border border-blue-100 hover:border-transparent hover:shadow-md hover:shadow-blue-200">
              View Profile →
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
