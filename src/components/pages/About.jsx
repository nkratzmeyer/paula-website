import React from "react";
const About = () => {
  return (
    <>
      <div className="float-left">
        <img
          src={require("../../images/paula.png")}
          alt="Paula Thomas, LCSW"
          className="portrait"
        />
        <h1 className="center-text regular-text">Paula Thomas, LCSW</h1>
      </div>

      <div className="regular-text center-text">
        <p>
          Do you struggle with anxiety, depression, grief, chronic pain, or
          other condition that affects your day-to-day life, relationships, or
          general ability to function? Do you feel hopeless at times, unsure if
          things will get better? Now more than ever, people are feeling anxious
          and overwhelmed by the demands of our time.
        </p>
        <p>
          I believe in holding on to hope, and in our ability to work toward
          your peace and ease of mind together. As a seasoned therapist, I start
          by creating an environment of safety, non-judgment, and acceptance so
          that you can be comfortable to share about your life experiences.
          Together, we work toward your individual goals and interests.
        </p>
        <p>
          I believe strongly in the right of all to be treated with kindness and
          respect, the right to self-determination, and the right to an
          unbiased, empathetic and skillful therapy experience. My mission is to
          provide a quality therapy experience that honors these rights.
        </p>
        <p>
          My name is Paula Thomas, I am a Licensed Clinical Social Worker, and I
          have been practicing therapy for about 15 years. I specialize in
          working with adults in their 40s and beyond who are facing illness,
          chronic pain, loss, retirement, or other transitions in life. I am
          also a generalist practitioner and can readily provide therapy
          services to most adults in need of support. I provide virtual therapy
          from the comfort of your own home.
        </p>
      </div>
    </>
  );
};
export default About;
