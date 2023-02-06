/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/rectoria-tec-de-monterrey-regreso-consciente.jpg";

const imageAltText = "rectoria tec de monterrey";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Is a development offer created to boost your personal and professional growth throughout this digital transformation. It provides you with learning experiences and a growth mindset.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */ 
/*
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];*/

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
/*const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";*/

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>What is TechSavvy?</h2>
        <p className="large">{description}</p>
        <hr />
        {/*<ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
          </ul>*/}
        <iframe id="kaltura_player_1648167443" src="https://cdnapisec.kaltura.com/p/4194723/sp/419472300/embedIframeJs/uiconf_id/48332583/partner_id/4194723?iframeembed=true&amp;playerId=kaltura_player_1648167443&amp;entry_id=1_x3v4ckb0" width="100%" height="300px" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" allow="fullscreen *; encrypted-media *" frameborder="0"></iframe>
        <hr />
        {/*<p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>*/}
        {/*aqui va lo de Meet the TechSavvy Library */}
      </div>
    </section>
  );
};

export default About;
