// src/pages/Services/Uxui.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import heroBackground from "../../assets/images/hero-background.jpg";

const Uxui = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/services/uxui")
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
      {/* Styled List Content */}
      <div className="w-full mt-12 text-center">
        <h2 className="text-white mb-8 text-3xl font-bold">Our Services</h2>
        <hr className="w-full border-gray-600 border-t-2 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-700 p-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-4">4 UX/UI</h3>
            <ul className="list-disc pl-6 text-white space-y-1">
              <li>Information Architecture (IA)</li>
              <li>Interaction Design (IxD)</li>
              <li>Sketching & Wireframes</li>
              <li>Prototyping and Testing</li>
              <li>Customer Personas</li>
              <li>Customer Interviews</li>
              <li>User Journeys</li>
              <li>Conversion Analysis</li>
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

export default Uxui;
