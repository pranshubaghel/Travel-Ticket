import React, { useState } from 'react';

function Guests() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const incrementAdults = () => {
    setAdults(adults + 1);
  };

  const decrementAdults = () => {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  };

  const incrementChildren = () => {
    setChildren(children + 1);
  };

  const decrementChildren = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (showDropdown && !event.target.closest('.dropdown')) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="mt-3"onClick={handleClickOutside}>
      <h1>
        <i className="fa-regular fa-user"></i> &nbsp;Guests
      </h1>
      <h2>
        Adults: {adults} - Children: {children}{' '}
        <i
          className="fa-solid fa-caret-down"
          onClick={toggleDropdown}
          style={{ cursor: 'pointer' }}
        ></i>
      </h2>
      {showDropdown && (
        <div className="dropdown">
          <button onClick={incrementAdults}>+</button>
          <button onClick={decrementAdults}>-</button>
          <button onClick={incrementChildren}>+</button>
          <button onClick={decrementChildren}>-</button>
        </div>
      )}
    </div>
  );
}

export default Guests;
