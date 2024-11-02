import { useState, useEffect, memo } from "react";

function Loading() {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (!isDelayed) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <button
        type="button"
        className="text-black px-4 py-2 rounded flex items-center"
        disabled
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Đang tải...
      </button>
    </div>
  );
}

export default memo(Loading);
