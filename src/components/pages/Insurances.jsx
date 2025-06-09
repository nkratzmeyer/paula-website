const Insurances = () => {
  return (
    <>
      <div className="insurance-card">
        <h2>Accepted Insurances</h2>
        <ul className="insurance-list">
          <li>Blue Shield of California</li>
          <li>TriWest/Tricare</li>
          <li>Aetna</li>
          <li>Optum</li>
          <li>Magellan</li>
          <li>MediCal</li>
          <li>Medicare</li>
          <li>Carelon</li>
        </ul>

        <h3>Credentialing In Progress</h3>
        <ul className="credentialing-list">
          <li>IEHP</li>
          <li>CHG</li>
        </ul>
      </div>
    </>
  );
};

export default Insurances;
