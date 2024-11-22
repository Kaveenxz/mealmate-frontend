'use client';
import React, { useState, useEffect } from "react";
import axios from "../utils/api";
import Header2 from "../components/Header2";

export default function FoodDonationForm() {
  const [formData, setFormData] = useState({
    foodName: "",
    donationCenter: "",
    donationAmount: "",
    acceptedTerms: false,
  });

  const [donationCenters, setDonationCenters] = useState([]);

  useEffect(() => {
    const fakeCenters:any = [
      { id: 1, name: "Save Food Malabe" },
      { id: 2, name: "Helping Hands Colombo" },
      { id: 3, name: "Food Bank Sri Lanka" },
      { id: 4, name: "Community Kitchen Kandy" },
    ];
    setDonationCenters(fakeCenters);
  }, []);

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }

    const externalServiceData = {
      serviceName: formData.foodName,
      serviceType: "Food Donation",
      serviceContact: formData.donationAmount,
      serviceLocation: formData.donationCenter,
     userID:1
    };

    try {
      const response = await axios.post(
        "/api/external-services",
        externalServiceData
      );

      alert("Food donation successfully submitted!");
      console.log("Response from backend:", response.data);
      setFormData({
        foodName: "",
        donationCenter: "",
        donationAmount: "",
        acceptedTerms: false,
      });
    } catch (error) {
      console.error("Error submitting the donation:", error);
      alert("Failed to submit the food donation. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <Header2 />
      </div>
      <div className="flex items-center justify-center px-4 mt-10">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Food Donation Centers
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-600 mb-2">Food Name</label>
              <input
                type="text"
                name="foodName"
                value={formData.foodName}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded px-4 py-2"
                placeholder="BBQ Chicken"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Donation Center</label>
              <select
                name="donationCenter"
                value={formData.donationCenter}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded px-4 py-2"
                required
              >
                <option value="">Select a donation center</option>
                {donationCenters.map((center:any) => (
                  <option key={center.id} value={center.name}>
                    {center.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">
                Food Donation Amount
              </label>
              <input
                type="text"
                name="donationAmount"
                value={formData.donationAmount}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded px-4 py-2"
                placeholder="Value"
                required
              />
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-gray-800"
                />
                <span className="text-gray-600">I accept the terms</span>
              </label>
              <a href="#" className="text-blue-500 text-sm">
                Read our T&Cs
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white px-6 py-2 rounded"
            >
              Donate Food
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
