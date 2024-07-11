import React from "react";

const Pagination = ({ onPageChange, totalBlogs, pageSize, currentPage }) => {
  const totalPage = Math.ceil(totalBlogs / pageSize);
  const renderPaginationLink = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li className={pageNumber === currentPage ? "bg-orange-400" : ""}>
          <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
        </li>
      )
    );
  };
  return (
    <ul className="pagination my-8 flex flex-col sm:flex-row gap-4 flex-wrap justify-center items-center p-2">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div className="flex gap-2 flex-wrap justify-center">
        {renderPaginationLink()}
      </div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
