"use client";

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-8 gap-2">
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className="btn btn-sm">
        Prev
      </button>

      <span className="px-4 py-2 border rounded">
        Page {page} of {totalPages}
      </span>

      <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages} className="btn btn-sm">
        Next
      </button>
    </div>
  );
};

export default Pagination;
