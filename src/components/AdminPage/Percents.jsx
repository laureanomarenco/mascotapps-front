import React from "react";

const Percents = ({ value }) => {
  return (
    <strong className="inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium w-full">
      <span className="animate-ping w-2.5 h-2.5 bg-green-600/75 rounded-full absolute -top-1 -left-1"></span>
      <span className="w-2.5 h-2.5 bg-green-600 rounded-full absolute -top-1 -left-1"></span>

      <span className="text-green-700 mx-auto py-px">{value}</span>
    </strong>
  );
};

export default Percents;
