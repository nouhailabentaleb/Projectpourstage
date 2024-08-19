import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
import img1 from "../assets/images/imag3d.jpeg";
import img2 from "../assets/images/imagLoremPac.jpeg";
import img3 from "../assets/images/imagdevMobApp.jpeg";
import img4 from "../assets/images/imagCreditCard.jpeg";
import img5 from "../assets/images/imagDigitalHub.jpeg";
import heroBackground from "../assets/images/hero-background.jpg";
import imBr1 from "../assets/images/abugarcia.jpeg";
import imBr2 from "../assets/images/acrevis.jpeg";
import imBr3 from "../assets/images/ancasta.jpeg";
import imBr4 from "../assets/images/burflex.jpeg";
import imBr5 from "../assets/images/Evolved.jpeg";
import imBr6 from "../assets/images/sauter.jpeg";
import imBr7 from "../assets/images/smatrics.jpeg";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/home")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const imageBrand = [imBr1, imBr2, imBr3, imBr4, imBr5, imBr6, imBr7];
  const images = [img1, img2, img3, img4, img5];
  const captions = [
    "Lorem ipsum 3D/2D",
    "Lorem ipsum Packaging",
    "Lorem ipsum Development, Mobile App",
    "Lorem Technology Setup",
    "Lorem Team Discussion",
  ];

  const captions2 = [
    "abuGarcia",
    "acrevis",
    "ancasta",
    "borflex",
    "Evolved",
    "sauter",
    "smatrics",
  ];

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="bg-gray-800 bg-opacity-80 p-12 rounded-2xl shadow-2xl w-full lg:w-3/4 max-w-4xl flex flex-col gap-12">
        {/* Text Content */}
        <div className="w-full">
          <h1 className="text-white mb-8 text-5xl font-extrabold leading-tight">
            WE'RE A FULL SERVICE DIGITAL AGENCY
          </h1>
          <hr className="border-gray-600 mb-8" />
          <p className="text-slate-300 text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
            We build brands, launch their next products, and create experiences.
          </p>
          <p className="text-white text-base md:text-lg mb-6 leading-relaxed">
            RocketMe Up is a data-driven, Full-Service Digital Agency that helps
            businesses and brands re-imagine their customer experiences through
            next-generation technologies and world-class design.
          </p>
          <p className="text-white text-base md:text-lg mb-6 leading-relaxed">
            With more than 50 led strategists, creative designers, tech nerds,
            and growth hackers, we work across our global network of experts to
            create digital experiences with the power to transform businesses.
            Located in Marrakesh, Morocco.
          </p>
          <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
            We love being part of the movement of dreamers and thinkers that
            continue to change the world.
          </p>
          <div className="text-center md:text-left">
            <a
              href="/services"
              className="bg-sky-600 text-white px-8 py-4 rounded-full hover:bg-sky-700 transition duration-300 text-lg font-semibold shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={captions[index]}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <p className="text-white text-lg text-center p-4">
                    {captions[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Styled List Content */}
        <div className="w-full mt-12 text-center">
          <h2 className="text-white mb-8 text-3xl font-bold">Our Services</h2>
          <hr className="w-full  border-gray-600 border-t-2 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-700 p-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
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
            <Link
              to="/services/design"
              className="bg-red-700 p-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
            >
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
            </Link>
            <div className="bg-purple-700 p-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-4">
                3 DEVELOPMENT
              </h3>
              <ul className="list-disc pl-6 text-white space-y-1">
                <li>Front-end Development</li>
                <li>Back-end / API Integrations</li>
                <li>CMS Development</li>
                <li>Game Development</li>
                <li> AI / ML Development</li>
                <li>Cloud Solutions</li>
              </ul>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
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
            <div className="bg-yellow-600 p-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
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

        {/* Partners Section */}
        <div className="w-full mt-12 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-white mb-8 text-3xl font-bold">OUR PARTNERS</p>
            <hr className="w-full max-w-3xl border-gray-600 border-t-2 mb-8" />
          </div>
          <p className="text-2xl text-slate-300 mb-8">
            We partner with some of the world's leading brands to create
            meaningful experiences.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {imageBrand.map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={img}
                  alt={captions2[index]}
                  className="w-32 h-32 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <p className="text-white text-lg text-center p-4">
                    {captions2[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {data && (
          <p className="mt-12 text-white text-lg text-center">{data.message}</p>
        )}
      </div>
    </section>
  );
};

export default Home;
