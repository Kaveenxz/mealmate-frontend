'use client';
import React, { useState } from "react";
import axios from "../utils/api";
import Header2 from "../components/Header2";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    acceptTerms: false,
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: "ADMIN",
    };

    try {
      const response = await axios.post("/auth/admin/register", payload); 
      console.log("User created successfully:", response.data);
      router.push("/admin-dashboard");

      alert("Registration successful!");
    } catch (error:any) {
      if (error.response?.status === 400) {
        alert("The username or email is already taken. Please try a different one.");
      } else {
        console.error("Error creating user:", error.response?.data || error.message);
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="bg-gray-100 w-full h-screen">
      <div>
        <Header2 />
      </div>

      <div className="">
        <div className="mt-10">
          <section className="py-12 bg-white mx-[30%]">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-6">Register New Admin</h2>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
                <div>
                  <label className="block text-gray-600 mb-2">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded px-4 py-2"
                    placeholder="Your username"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded px-4 py-2"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded px-4 py-2"
                    placeholder="Your password"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />
                  <label className="mt-1 block text-gray-600 mb-2">Accept T&C</label>
                </div>

                <button className="w-full bg-gray-800 text-white px-6 py-2 rounded">
                  Register
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Page;
