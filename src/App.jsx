import React, { useState, useRef, useEffect } from "react";
import Calender from "./components/Calender";

function App() {
  const currentYear = 2023;
  const [currentMonth, setCurrentMonth] = useState(1);
  const containerRef = useRef(null);

  const startingMonth = currentMonth - 6 > 0 ? currentMonth - 6 : 1;

  const handleMonthChange = (selectedMonth) => {
    setCurrentMonth(selectedMonth);
    const container = containerRef.current;
    if (container) {
      const targetScroll = (selectedMonth - 1) * (container.scrollWidth / 12);
      container.scrollLeft = targetScroll;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const targetScroll = (currentMonth - 1) * (container.scrollWidth / 12);
      container.scrollLeft = targetScroll;
    }
  }, [currentMonth]);

  return (
    <div className="container mx-auto my-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Calendar {currentYear}</h1>
      <div className="flex items-center space-x-4 mb-4">
        <label className="text-lg bg-blue-500 m-1 p-1 text-center rounded-md text-white items-center">
          Select Month
        </label>
        <select
          className="px-4 py-2 border rounded"
          value={currentMonth}
          onChange={(e) => handleMonthChange(parseInt(e.target.value, 10))}
        >
          {[...Array(12).keys()].map((index) => (
            <option key={index} value={index + 1}>
              {new Date(2023, index, 1).toLocaleString("default", {
                month: "long",
              })}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        {[...Array(12).keys()].map((index) => (
          <Calender key={index} month={(startingMonth + index) % 12 || 12} />
        ))}
      </div>
    </div>
  );
}

export default App;
