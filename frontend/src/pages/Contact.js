import React, { useState } from "react";
import axios from "axios";
import heroBackground from "../assets/images/hero-background.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/contact", formData)
      .then((response) => {
        setMessage("Your message has been sent successfully!");
        setFormData({
          full_name: "",
          company: "",
          email: "",
          phone: "",
          subject: "",
          budget: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
        setMessage("An error occurred. Please try again.");
      });
  };

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h1 className="text-white text-4xl font-extrabold mb-8 text-center">
          Let's get in touch
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-white" htmlFor="full_name">
            Full Name:
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
            required
          />
          <label className="text-white" htmlFor="company">
            Company:
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <label className="text-white" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
            required
          />
          <label className="text-white" htmlFor="phone">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <label className="text-white" htmlFor="subject">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <label className="text-white" htmlFor="budget">
            Choose a Budget:
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
          >
            <option value="">Select a budget</option>
            <option value="500-1000">Less than $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000+">Over $10,000</option>
            <option value="advice">Please advise</option>
          </select>
          <label className="text-white" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
          ></textarea>
          <button
            type="submit"
            className="bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition duration-300 font-semibold mt-4"
          >
            Send Message
          </button>
        </form>
        {message && (
          <p className="mt-4 text-white text-lg text-center">{message}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
