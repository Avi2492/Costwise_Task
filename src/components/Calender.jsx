import React, { useState } from "react";

function Calendar({ month }) {
  const currentYear = 2023;
  const currentMonth = new Date().getMonth() + 1;

  const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
  const getFirstDayOfWeek = (year, month) =>
    new Date(year, month - 1, 1).getDay();
  const daysInMonth = getDaysInMonth(currentYear, month);
  const firstDayOfWeek = getFirstDayOfWeek(currentYear, month);

  const monthDays = [...Array(daysInMonth + firstDayOfWeek).keys()].map(
    (day) => day - firstDayOfWeek + 1
  );

  const [events, setEvents] = useState({});

  const handleDateClick = (day) => {
    const eventName = prompt(
      `Enter event for ${currentYear}-${currentMonth}-${day}:`
    );
    if (eventName) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [`${currentYear}-${currentMonth}-${day}`]: eventName,
      }));
    }
  };

  const handleDeleteEvent = (day) => {
    const eventKey = `${currentYear}-${currentMonth}-${day}`;
    if (events[eventKey]) {
      const confirmDelete = window.confirm(
        `Delete event "${events[eventKey]}"?`
      );
      if (confirmDelete) {
        const updatedEvents = { ...events };
        updatedEvents[eventKey] = null;
        setEvents(updatedEvents);
      }
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">
        {new Date(currentYear, month - 1, 1).toLocaleString("default", {
          month: "long",
        })}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {monthDays.map((day, index) => (
          <div
            key={index}
            className={`text-center relative ${
              currentMonth === month && day > 0 && day <= daysInMonth
                ? "cursor-pointer"
                : "bg-gray-200"
            } ${
              currentMonth === month && day === new Date().getDate()
                ? "bg-blue-500 text-white"
                : ""
            }`}
            onClick={() =>
              day > 0 && day <= daysInMonth && handleDateClick(day)
            }
          >
            {day > 0 && day <= daysInMonth && (
              <>
                {day}
                {events[`${currentYear}-${currentMonth}-${day}`] && (
                  <button
                    className="absolute bottom-0 right-0 m-1 bg-yellow-500 text-white text-xs rounded-md p-1"
                    onClick={() => handleDeleteEvent(day)}
                  >
                    Delete Event
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
