/**
 * MoreInfo component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/convenio-pearson-tec-estado-de-mexico-cem.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Oferta de Desarrollo TechSavvy",
    description:
      "We are pioneers in technology use that is why we provide you with tools and learning resources to boost the development of new skills.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Self-Assessment",
    description:
      "This questionnaire will guide you through nine categories oriented towards achieving the greatest benefit from this ecosystem for your technological upskilling.",
    url: "https://itesm.co1.qualtrics.com/jfe/form/SV_eIJJo0jSck0DkHk",
  },
  {
    title: "Resources",
    description:
      "Here you will find the following resources:",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {/*{
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },*/}
];

const MoreInfo = () => {
  return (
    <section className="light" id="moreInfo">
      <h2>More Info</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
