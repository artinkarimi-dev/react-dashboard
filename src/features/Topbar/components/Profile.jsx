import { AVATAR_URL } from "../../../data/constants";

function Profile() {
  return (
    <div className="flex items-center">
      <button className="relative w-12 h-12 cursor-pointer rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-gray-100 transition-all duration-300 hover:ring-green-400 hover:scale-105">
        <img
          src={AVATAR_URL}
          alt="User profile"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}

export default Profile;
