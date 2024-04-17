"use client";
import React from "react";
import { Chrono } from "react-chrono";

const Home = () => {
  const items = [
    {
      title: "10/2017–06/2019",
      cardTitle: "Sakht Sanat Kaveh Consulting Engineers Company Computer",
      cardSubtitle:
        "assembling Pcs and support Linux systems for servers and normal users - building simple-websites with css , html , jQuery with friendly user interface - Learning C++ to Kids and adults and building simple games. ",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    },
    {
      title: "07/2019–07/2021",
      cardTitle: "TuV INTERNATIONALWebDeveloper",
      cardSubtitle:
        "Designed and developed E-Commers Web Pages for Companies with one year support - support services for websites, specializing in thorough debugging to enhance their performance.Building Databases with sql and nosql - With expertise in SQL for structured data and NoSQL for flexible and scalable data storage . development of APIs for large-scale projects in Json format.",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    },
    {
      title: "2020-7",
      cardTitle: "Bachelor of science",
      cardSubtitle:
        "Computer Science and Engineering, Azad University - Tehran",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    },
    {
      title: "12-2023",
      cardTitle: "German language certification",
      cardSubtitle: "Technical University Berlin, C1 (DSH 2)",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        disableNavOnKey
        scrollable
        slideShow={true}
        enableOutline
      />
    </div>
  );
};
export default Home;
