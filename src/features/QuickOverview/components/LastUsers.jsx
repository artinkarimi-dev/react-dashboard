import { useState } from "react";
import OpenInPage from "./OpenInPage";
import UserCard from "./UserCard";
import usersData from "../../../data/users";

function LastUsers() {
  const [users] = useState([...usersData]);
  const recentUsers = users.slice(-6);

  return (
    <div
      className="
        w-full
        bg-gradient-to-br from-gray-50 via-white to-gray-50
        rounded-2xl sm:rounded-3xl
        shadow-lg sm:shadow-xl
        border border-gray-200/50
        overflow-hidden
        transition-all duration-300
      "
    >
      <div className="p-4 sm:p-5 xl:p-6">
        <OpenInPage
          itemsLength={users.length}
          navigateTo="/users"
          title="Latest Users"
          description="Recently joined users"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 xl:gap-4">
          {recentUsers.map((user, index) => (
            <UserCard key={user.id} user={user} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LastUsers;