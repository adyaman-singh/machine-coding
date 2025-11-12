import React from "react";

const ProfileIcon = ({ name, bio, profilePic }) => {
  return (
    <div className="p-4 mx-auto min-w-sm ">
      <div className="flex flex-col items-center p-4 overflow-hidden transition-all duration-300 bg-white border-4 border-gray-200 rounded-full shadow-md shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105">
        <img
          src={profilePic}
          // alt={`${name}'s profile`}
          className="object-cover mb-6 shadow-md w-fit"
        />
        <h2 className="mb-2 text-2xl font-bold text-gray-800">{name}</h2>
        <p className="leading-relaxed text-center text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileIcon;
