// src/pages/Services/Marketing.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import heroBackground from "../../assets/images/hero-background.jpg";

const Marketing = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/services/marketing")
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

          <div className="bg-red-700 p-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-4">2 DESIGN</h3>
            <ul className="list-disc pl-6 text-white space-y-1">
              <li> Logo & Brand Identity</li>
              <li>Art & Illustration</li>
              <li> Web Design</li>
              <li>Responsive Web Design</li>
              <li>2D/3D graphic Design</li>
              <li>Motions Design</li>
              <li> Packaging design</li>
              <li> Print Materials</li>
            </ul>
          </div>

          <div className="bg-purple-700 p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-4">3 DEVELOPMENT</h3>
            <ul className="list-disc pl-6 text-white space-y-1">
              <li>Front-end Development</li>
              <li>Back-end / API Integrations</li>
              <li>CMS Development</li>
              <li>Game Development</li>
              <li> AI / ML Development</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>

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

          <div className="bg-yellow-600 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-4">5 MARKETING</h3>
            <ul className="list-disc pl-6 text-white space-y-1">
              <li>Content Marketing</li>
              <li>Marketing Automation</li>
              <li>E-mail Marketing</li>
              <li>SMS Marketing</li>
              <li>SEO Organic Traffic</li>
              <li>Paid Search (PPC)</li>
              <li>Amazon Marketing</li>
              <li>CRM/CRO</li>
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

export default Marketing;
