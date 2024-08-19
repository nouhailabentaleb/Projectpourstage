import React, { useEffect, useState } from "react";
import axios from "axios";
import heroBackground from "../assets/images/hero-background.jpg";

const Services = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/services")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const renderContent = () => {
    if (!data) {
      return (
        <p className="text-white text-lg text-center py-6 px-4 bg-opacity-80 bg-gray-800 rounded-lg shadow-lg">
          Loading services...
        </p>
      );
    }

    if (!data.message) {
      return (
        <p className="text-white text-lg text-center py-6 px-4 bg-opacity-80 bg-gray-800 rounded-lg shadow-lg">
          No service information available.
        </p>
      );
    }

    return (
      <p className="text-white text-lg text-center py-6 px-4 bg-opacity-80 bg-gray-800 rounded-lg shadow-lg">
        {data.message}
      </p>
    );
  };

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="w-full max-w-3xl mt-12 text-center">
        <h2 className="text-white mb-8 text-4xl font-extrabold">
          Our Services
        </h2>
        <hr className="w-full border-gray-600 border-t-2 mb-8" />
        <div className="flex justify-center">{renderContent()}</div>
      </div>
    </section>
  );
};

export default Services;
