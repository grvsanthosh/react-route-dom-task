import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DataScience from "./Components/DataScience";
import NavBar from "./Components/NavBar";
import AllCourse from "./Components/AllCourse";
import NetworkSecurity from "./Components/NetworkSecurity";
import WebDevelopment from "./Components/WebDevelopment";
import Home from "./Components/Home";

function App() {
  let data_DataScience = [
    {
      id: 1,
      course: "Data Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Machine Learning 101",
      hour: 3,
      language: "English",
      endrolled: 89871,
      price: 2499,
    },
    {
      id: 2,
      course: "Data Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Data Analytics using Pandas",
      hour: 9,
      language: "English",
      endrolled: 21327,
      price: 1799,
    },
    {
      id: 3,
      course: "Data Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Keras for Beginners",
      hour: 15,
      language: "Hindi",
      endrolled: 2371,
      price: 1799,
    },
    {
      id: 4,
      course: "Data Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Introduction to Data Engineering and Bigdata",
      hour: 11,
      language: "English",
      endrolled: 20543,
      price: 1899,
    },
    {
      id: 5,
      course: "Data Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Data Visualization in Python",
      hour: 17,
      language: "English",
      endrolled: 20578,
      price: 1699,
    },
    {
      id: 6,
      course: "Data Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Introduction to DataScience with R",
      hour: 10,
      language: "English",
      endrolled: 5584,
      price: 1799,
    },
    {
      id: 7,
      course: "Data Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "R programming",
      hour: 6,
      language: "English",
      endrolled: 19969,
      price: 1499,
    },

    {
      id: 8,
      course: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Angular JS",
      hour: 1,
      language: "English",
      endrolled: 2007,
      price: 1499,
    },
    {
      id: 9,
      course: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Angular",
      hour: 6,
      language: "Tamil",
      endrolled: 4506,
      price: 1299,
    },
    {
      id: 10,
      course: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Angular",
      hour: 6,
      language: "English",
      endrolled: 38358,
      price: 1299,
    },
    {
      id: 11,
      course: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "CSS Grid and Flexbox",
      hour: 3,
      language: "English",
      endrolled: 2003,
      price: 1299,
    },
    {
      id: 12,
      course: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "CSS",
      hour: 6,
      language: "English",
      endrolled: 2004,
      price: 1299,
    },
    {
      id: 13,
      course: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "CSS Animation English",
      hour: 3,
      language: "English",
      endrolled: 2006,
      price: 1299,
    },
    {
      id: 14,
      course: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "CSS",
      hour: 6,
      language: "Tamil",
      endrolled: 2004,
      price: 1299,
    },
    {
      id: 15,
      course: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "JavaScript",
      hour: 10,
      language: "English",
      endrolled: 86371,
      price: 1499,
    },
    {
      id: 16,
      course: "Web Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "JavaScript AJAX",
      hour: 6,
      language: "English",
      endrolled: 2004,
      price: 1499,
    },
    {
      id: 17,
      course: "Network and Security",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Blockchain",
      hour: 6,
      language: "English",
      endrolled: 4814,
      price: 1999,
    },
    {
      id: 18,
      course: "Network and Security",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Cyber Security and Ethical Hacking for Beginners",
      hour: 6,
      language: "English",
      endrolled: 32639,
      price: 1799,
    },
    {
      id: 19,
      course: "Network and Security",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax2piiAY0hIMC-KIM0CzsKguH56egLQy_cw&s",
      title: "Cyber Security and Ethical Hacking - Advanced",
      hour: 7,
      language: "English",
      endrolled: 12395,
      price: 1999,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/guvi-home" element={<Home />} />
          <Route
            path="/guvi-all"
            element={<AllCourse data={data_DataScience} />}
          />
          <Route
            path="/guvi-ds"
            element={<DataScience data={data_DataScience} />}
          />
          <Route
            path="/guvi-ns"
            element={<NetworkSecurity data={data_DataScience} />}
          />
          <Route
            path="/guvi-wd"
            element={<WebDevelopment data={data_DataScience} />}
          />

          <Route path="*" element={<Navigate to="/guvi-home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
