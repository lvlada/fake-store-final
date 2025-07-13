function ProductPagination({ totalPages, currentPage, onPageChange }) {
  const renderPageButtons = () => {
    const buttons = [];

    for (let number = 1; number <= totalPages; number++) {
      const isActive = number === currentPage;

      buttons.push(
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 rounded-md text-sm font-medium mx-1 border transition-colors duration-200
            ${
              isActive
                ? 'bg-blue-600 text-red-600 border-blue-100 dark:border-blue-400'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700'
            }`}
        >
          {number}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 mt-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-2 py-1 text-sm border rounded-md disabled:opacity-50
          bg-white text-gray-700 border-gray-300 hover:bg-gray-100
          dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        First
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 text-sm border rounded-md disabled:opacity-50
          bg-white text-gray-700 border-gray-300 hover:bg-gray-100
          dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        Prev
      </button>

      {renderPageButtons()}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-sm border rounded-md disabled:opacity-50
          bg-white text-gray-700 border-gray-300 hover:bg-gray-100
          dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        Next
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-sm border rounded-md disabled:opacity-50
          bg-white text-gray-700 border-gray-300 hover:bg-gray-100
          dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        Last
      </button>
    </div>
  );
}

export { ProductPagination };
