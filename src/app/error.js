"use client";
import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-32">
      <div className="max-w-7xl mx-auto py-16 px-4 flex items-end">
        <div className="w-full md:w-3/4 lg:w-2/4 bg-gray-300 rounded flex flex-col gap-2 items-center justify-center mx-auto py-4">
          <h4 className="text-xl font-semibold">Something went wrong!</h4>
          <p>Could not find requested resource!</p>
          <button
            onClick={() => reset()}
            className="flex justify-center items-center gap-2 py-1 px-2 m-2 bg-gray-500 border-2 border-white rounded hover:bg-orange-500 text-white"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
