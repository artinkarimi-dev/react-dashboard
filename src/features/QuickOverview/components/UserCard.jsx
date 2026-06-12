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
    <article
      className="
        group
        bg-white
        rounded-xl sm:rounded-2xl
        border border-gray-200
        hover:border-blue-200
        hover:shadow-lg hover:shadow-blue-50
        transition-all duration-300
        overflow-hidden
      "
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
        <div className="relative w-fit mx-auto sm:mx-0">
          <img
            src={user.profile}
            alt={user.fullName}
            className="
              w-14 h-14 sm:w-12 sm:h-12 lg:w-14 lg:h-14
              rounded-xl object-cover
              border border-gray-100 shadow-sm
            "
          />

          <div className="absolute -top-2 -left-2 w-5 h-5 bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center rounded-md shadow">
            {index + 1}
          </div>

          <button
            onClick={() => setLiked((l) => !l)}
            className="
              absolute -top-2 -right-2
              w-5 h-5
              bg-white
              rounded-full
              shadow
              flex items-center justify-center
              text-[11px]
              hover:scale-110 transition
            "
          >
            {liked ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors truncate">
                {user.fullName}
              </h3>

              <p className="text-[11px] text-gray-400 truncate">
                @{user.userName}
              </p>
            </div>

            <span
              className={`
                shrink-0
                px-2 py-0.5
                rounded-full
                text-[10px] font-semibold
                ${roleBadge[user.role] ?? roleBadge.USER}
              `}
            >
              {user.role}
            </span>
          </div>

          <div className="space-y-1 pt-1 border-t border-gray-100">
            <p className="text-[11px] text-gray-500 flex items-center gap-1 truncate">
              📧 <span className="truncate">{user.email}</span>
            </p>

            <p className="text-[11px] text-gray-500 flex items-center gap-1">
              📱 <span>{user.phoneNumber}</span>
            </p>
          </div>
          <Link to="/users" className="w-full pt-1">
            <button
              className="
              cursor-pointer
                w-full
                px-3 py-2
                rounded-lg
                bg-gradient-to-r from-blue-50 to-indigo-50
                text-blue-600
                text-[11px] font-semibold
                border border-blue-100
                hover:from-blue-500 hover:to-indigo-500
                hover:text-white
                hover:border-transparent
                hover:shadow-md hover:shadow-blue-200
                transition-all duration-300
              "
            >
              View Profile →
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
