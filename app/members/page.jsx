"use client";

// pages/members.js
import React, { useState } from "react";
import Pagination from "../components/Pagination";
import MembersList from "../components/MembersList";
import membersData from "../data/data";

const itemsPerPage = 20;

const MembersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(membersData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMembers = membersData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className=" bg-blue-600 text-white text-3xl text-center font-semibold mb-4 py-2">
        Members
      </h1>
      <MembersList members={currentMembers} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MembersPage;
