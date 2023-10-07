import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <nav className="mb-6">
      <ul className="flex justify-center gap-4">
        {prev ? (
          <li className="mt-4">
            <button className="w-20 h-8 rounded-lg text-white bg-gray-800" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="mt-4">
            <button className="w-16 h-8 rounded-lg text-white bg-gray-800" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
