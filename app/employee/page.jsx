// pages/employees.js
import React from "react";
import EmployeeCard from "../components/EmployeeCard";
import employeesData from "../data/employees";

const EmployeesPage = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="bg-blue-600 text-white text-3xl text-center font-semibold mb-4 py-2">
        Employees
      </h1>
      <div className="flex flex-wrap md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employeesData.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeesPage;
