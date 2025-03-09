import React, { useState } from "react";
interface CalendarDay {
  day: number;
  currentMonth: boolean;
  selected?: boolean;
}

// Event interface
interface Event {
  id: number;
  title: string;
  location: string;
  time: string;
  date: string;
}

const Schedules = () => {
  const [currentMonth, setCurrentMonth] = useState("Feb");
  const [currentYear, setCurrentYear] = useState(2022);
  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: "Development planning",
      location: "iTest Factory",
      time: "9:20 AM",
      date: "09",
    },
    {
      id: 2,
      title: "Development planning",
      location: "iTest Factory",
      time: "9:20 AM",
      date: "09",
    },
  ];
  // Generate calendar days
  const generateCalendarDays = (): CalendarDay[][] => {
    const days: CalendarDay[][] = [[], [], [], [], []];
    const lastDayPrevMonth = 31; // January
    const daysInMonth = 28; // February

    // Previous month days
    days[0].push({ day: 30, currentMonth: false });
    days[0].push({ day: 31, currentMonth: false });

    // Current month days
    let week = 0;
    let dayInWeek = 2; // Starting from Wednesday position (after 30, 31)

    for (let i = 1; i <= daysInMonth; i++) {
      days[week].push({ day: i, currentMonth: true, selected: i === 8 });
      dayInWeek++;

      if (dayInWeek === 7) {
        dayInWeek = 0;
        week++;
      }
    }

    // Next month days
    for (let i = 1; i <= 12; i++) {
      if (days[week].length < 7) {
        days[week].push({ day: i, currentMonth: false });
      } else {
        if (week < 4) {
          week++;
          days[week].push({ day: i, currentMonth: false });
        }
      }
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      {/* Left panel - Calendar */}
      <div className="bg-white rounded-lg w-[400px] p-[13px]">
        <h2 className="text-lg font-semibold mb-4">Schedules</h2>

        <div className="flex justify-between mb-4">
          <div className="relative">
            <select
              className="block appearance-none bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={currentMonth}
              onChange={(e) => setCurrentMonth(e.target.value)}
            >
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              className="block appearance-none bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={currentYear}
              onChange={(e) => setCurrentYear(parseInt(e.target.value))}
            >
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="mb-4">
          <div className="grid grid-cols-7 gap-1 mb-1">
            {weekDays.map((day, i) => (
              <div key={i} className="text-center text-sm py-1">
                {day}
              </div>
            ))}
          </div>

          {calendarDays.map((week, i) => (
            <div key={i} className="grid grid-cols-7 gap-1 mb-1">
              {week.map((day, j) => (
                <div
                  key={j}
                  className={`
                  h-8 w-full flex items-center justify-center text-sm rounded
                  ${!day.currentMonth ? "text-gray-400" : "text-gray-700"}
                  ${
                    day.selected
                      ? "bg-emerald-500 text-white"
                      : "hover:bg-gray-100"
                  }
                `}
                >
                  {day.day}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="border border-slate-100 rounded-lg p-[16px]">
          <h3 className="text-sm text-gray-500 mb-2">EVENTS:</h3>
          <div className=" w-[341px] px-[17px]">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex mb-2 p-[8px] border border-slate-100 rounded-lg"
              >
                <div className="flex-shrink-0 h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-500 mr-3">
                  <div className="text-sm font-medium">{event.date}</div>
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-sm">{event.title}</div>
                  <div className="text-sm text-gray-500">{event.location}</div>
                </div>
                <div className="text-sm text-gray-500 self-center">
                  {event.time}
                </div>
              </div>
            ))}

            <div className="text-center mt-4">
              <button className="text-sm text-blue-500 hover:underline">
                View all Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedules;
