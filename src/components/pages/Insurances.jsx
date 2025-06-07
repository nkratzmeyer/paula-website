import React from "react";

const Insurances = () => {
  return (
    <>
      <h1 className="jumbo center-text">Insurances Accepted</h1>;
      <div className="regular-text">
        <h3>I accept the following insurances:</h3>
        <ul className="bold">
          <li>Blue Shield of California</li>
          <li>TriWest/Tricare</li>
          <li>Aetna</li>
          <li>Optum</li>
          <li>Magellan</li>
          <li>MediCal</li>
          <li>Medicare</li>
          <li>Carelon</li>
        </ul>
        <h3>Working on credentialing with</h3>
        <ul className="bold">
          <li>IEHP</li>
          <li>CHG</li>
        </ul>
      </div>
    </>
  );
};

export default Insurances;
