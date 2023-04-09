/** @format */

import React from 'react';
import { useState } from 'react';

export default function Profiles({ Leaderboard }) {
  return <div id="profile">{Item(Leaderboard)}</div>;
}

function Item(data) {
  const [period, setPeriod] = useState(0);
  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };
  return (
    <>
      <h1 className="leaderboard">Leaderboard</h1>

      <div
        style={{ marginBottom: '50px' }}
        className="duration">
        <button
          onClick={handleClick}
          data-id="7">
          7 Days
        </button>
        <button
          onClick={handleClick}
          data-id="30">
          30 Days
        </button>
        <button
          onClick={handleClick}
          data-id="0">
          All-Time
        </button>
      </div>
      {data.map((value, index) => (
        <div
          className="flex"
          key={index}>
          <div className="item">
            <img
              src={value.img}
              alt=""
            />

            <div className="info">
              <h3 className="name text-dark">{value.name}</h3>
              <span>{value.location}</span>
            </div>
          </div>
          <div className="item">
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}
