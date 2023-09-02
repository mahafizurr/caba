// components/EmployeeCard.js
import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg ">
      <img
        src={employee.photo}
        alt={employee.name}
        className="w-50 h-60 mb-2 rounded-lg"
      />
      <h2 className="text-4xl font-bangla font-bold">{employee.name}</h2>
      <p className="text-gray-600 text-2xl font-bangla">{employee.bio}</p>
      <p className="text-gray-600 text-2xl font-bangla">{employee.contact}</p>
    </div>
  );
};

export default EmployeeCard;
