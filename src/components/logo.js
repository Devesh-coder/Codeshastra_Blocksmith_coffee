/** @format */
import anna from '../assets/anna.png';
import React from 'react';
import ettarra from '../assets/ettarra.png';
function Logo() {
  return (
    <div className="inline-flex">
      <img
        style={{ height: '400px', marginRight: '200px' }}
        src={anna}
      />
      <div
        className="text-center "
        style={{ paddingTop: '100px', width: '400px' }}>
        <img
          src={ettarra}
          alt=""
        />
        <p className="mt-6 text-lg leading-8 text-gray-600">
          South Indian filter coffee, crafted to capture flavourful notes &
          refreshing aromatic servings with every cup.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Get started
          </a>
        </div>
      </div>
      <img
        style={{ height: '400px', marginLeft: '200px' }}
        src={anna}
      />
    </div>
  );
}

export default Logo;
