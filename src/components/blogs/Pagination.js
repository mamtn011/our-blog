import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination = ({ onPageChange, totalBlogs, pageSize, currentPage }) => {
  const totalPage = Math.ceil(totalBlogs / pageSize);
  const renderPaginationLink = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          key={pageNumber}
          className={pageNumber === currentPage ? "bg-orange-400 rounded" : ""}
        >
          <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
        </li>
      )
    );
  };
  return (
    <>
      {totalPage > 1 && (
        <ul className="pagination my-8 flex flex-col sm:flex-row flex-wrap justify-center items-center p-2">
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="border-none"
              disabled={currentPage === 1}
            >
              <FaArrowLeftLong />
            </button>
          </li>
          <div className="flex gap-2 flex-wrap justify-center">
            {renderPaginationLink()}
          </div>
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="border-none"
              disabled={currentPage === totalPage}
            >
              <FaArrowRightLong />
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Pagination;
