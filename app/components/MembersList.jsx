// components/MembersList.js
import React from "react";

const MembersList = ({ members }) => {
  return (
    <div className="flex flex-wrap gap-4 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <div key={member.id} className="bg-white p-4 shadow-md rounded-lg">
          <img
            src={member.photo}
            alt={member.name}
            className="w-50 h-60 mb-2 rounded-lg"
          />
          <h2 className="text-lg font-semibold">{member.name}</h2>
          <p className="text-gray-600">{member.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default MembersList;
