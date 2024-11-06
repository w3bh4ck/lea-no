import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

export default function CustomPagination(
  { currentPage, totalPages, onPageChange, maxVisiblePages = 5 }: PaginationProps = {
    currentPage: 1,
    totalPages: 1,
    onPageChange: () => {},
    maxVisiblePages: 5,
  },
) {
  const getPageRange = () => {
    // if (totalPages <= maxVisiblePages) {
    //   return Array.from({ length: totalPages }, (_, i) => i + 1);
    // }

    let start = Math.max(currentPage - Math.floor((maxVisiblePages - 2) / 2), 2);
    const end = Math.min(start + maxVisiblePages - 3, totalPages - 1);

    if (end - start + 1 < maxVisiblePages - 2) {
      start = Math.max(end - maxVisiblePages + 3, 2);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageRange = getPageRange();

  const renderPageButton = (page: number, label?: string) => (
    <button
      key={page}
      onClick={() => onPageChange(page)}
      className={`px-3 py-2 rounded-md font-medium ${
        currentPage === page ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-slate-200"
      }`}
      aria-current={currentPage === page ? "page" : undefined}
    >
      {label || page}
    </button>
  );

  return (
    <nav className="flex justify-center items-center text-[10px] md:text-sm space-x-2 my-4" aria-label="Pagination">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 hidden md:block rounded-md text-sm font-medium bg-background text-foreground hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        Previous
      </button>

      <div className="flex flex-wrap justify-center items-center space-x-2">
        {renderPageButton(1)}

        {pageRange[0] > 2 && <span className="px-2">...</span>}

        {pageRange.map((page) => renderPageButton(page))}

        {pageRange[pageRange.length - 1] < totalPages - 1 && <span className="px-2">...</span>}

        {totalPages > 1 && renderPageButton(totalPages)}
      </div>

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 hidden md:block py-2 rounded-md md:text-sm text-xs md:font-medium bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}
