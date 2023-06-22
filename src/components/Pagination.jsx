import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPaginationPage } from '../store/userSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.users.paginationPage);
  const totalPages = useSelector((state) => state.users.totalPages);

  const handlePageChange = (page) => {
    dispatch(setPaginationPage(page));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);

    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const renderPaginationLinks = () => {
    const links = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  
    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <button
          key={i}
          className={`px-4 py-2 rounded-md ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
  
    return links;
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md mr-2 ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
          }`}
      >
        Previous
      </button>
      {renderPaginationLinks()}
      <button
        onClick={handleNextPage}

        className={`px-4 py-2 rounded-md ml-2 `}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
