const Contact = () => {
  // Contact info
  //

  return (
    <div className="center-text">
      <h1 className="center-text regular-text"> Call or Email Today</h1>

      <div className="contact-card">
        <div className="contact-item">
          <div className="label">Phone</div>
          <div className="value">(760) 212-1443</div>
          <div className="note">Return call within 1 business day</div>
        </div>
        <div className="contact-item">
          <div className="label">Email</div>
          <div className="value">
            <a href="mailto:paula.thomastherapy@gmail.com">
              paula.thomastherapy@gmail.com
            </a>
          </div>
          <div className="note">Return email within 1 business day</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
