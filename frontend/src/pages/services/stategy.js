// src/pages/Services/Strategy.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import heroBackground from "../../assets/images/hero-background.jpg";

const Strategy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/services/strategy")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="w-full mt-12 text-center">
        <h2 className="text-white mb-8 text-3xl font-bold">Our Services</h2>
        <hr className="w-full border-gray-600 border-t-2 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-green-700 p-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-4">1 STRATEGY</h3>
            <ul className="list-disc pl-6 text-white space-y-1">
              <li>Market Research</li>
              <li>Brand Strategy</li>
              <li>SWOT Analysis</li>
              <li>DATA Analysis</li>
              <li>Customer Journey Mapping</li>
              <li>Technology Assessments</li>
              <li>Stakeholders Workshops</li>
              <li>Innovation Consulting</li>
            </ul>
          </div>
        </div>
      </div>
      {data && (
        <p className="mt-12 text-white text-lg text-center">{data.message}</p>
      )}
    </section>
  );
};

export default Strategy;
