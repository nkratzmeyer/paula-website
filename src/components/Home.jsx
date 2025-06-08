const Home = () => {
  return (
    <>
      <div className="jumbo center-text">
        Paula Thomas, LCSW
        <br />
        Therapist in Southern California
        <br />A Place of Comfort and Safety
      </div>

      <div className="image-container">
        <img
          src={require("../images/sunset.webp")}
          alt="sunset"
          className="sunset"
        />

        <div className="shadow-container"></div>

        <div className="jumbo center-text">
          Schedule a Free Consultation Today!
        </div>
      </div>
    </>
  );
};

export default Home;
