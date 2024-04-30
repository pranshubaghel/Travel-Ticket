
import React, { useState } from 'react';

function Calendar() {
  // Get current date
  const currentDate = new Date().toISOString().split('T')[0];

  // State to manage selected dates
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Function to handle start date change
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  // Function to handle end date change
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <div>
        <i className="fa-solid fa-calendar-days"></i>
        <h1 className='text-black'>From-To</h1>
        <div className='flex '>
          {/* Input for start date */}
          <input 
            type="date" 
            value={startDate} 
            onChange={handleStartDateChange} 
            min={currentDate} 
          />
          {/* Input for end date */}
          <input 
            type="date" 
            value={endDate} 
            onChange={handleEndDateChange} 
            min={startDate || currentDate} 
          />
        </div>
      </div>
    </>
  );
}

export default Calendar;





