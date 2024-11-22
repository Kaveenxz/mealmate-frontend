'use client';
import React, { useEffect, useState } from "react";
import Header2 from "../components/Header2";
import axios from "../utils/api";
import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    acceptTerms: false,
  });

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get("/protected/endpoint");
        console.log("Protected data:", response.data);
      } catch (error:any) {
        console.error("Error fetching protected data:", error.response?.data || error.message);
      }
    };
      
    fetchProtectedData();
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
  
    if (!formData.acceptTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
  
    const payload = {
      username: formData.username,
      password: formData.password,
    };
  
    try {
      const response = await axios.post("/auth/user/login", payload);
      const { token, userId } = response.data;
  
      localStorage.setItem("token", token);
  
      const userResponse = await axios.get(`/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const { role } = userResponse.data;
  
      localStorage.setItem("userRole", role);
  
      console.log("Login successful. Redirecting...");
      if (role === "USER") {
        router.push("/user-dashboard");
      } else if (role === "ADMIN") {
        router.push("/admin-dashboard");
      } else {
        alert("Unknown role. Please contact support.");
        router.push("/error-page");
      }
    } catch (error:any) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid credentials. Please try again.");
    }
  };
  


  return (
    <div className="bg-gray-100 w-full h-screen">
      <Header2 />
      <div className="mt-10">
        <section className="py-12 bg-white mx-[30%]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Sign in Here</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
              <div>
                <label className="block text-gray-600 mb-2">User Name</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border-gray-300 border rounded px-4 py-2"
                  placeholder="john.doe"
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
                  placeholder="your password"
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
                Sign in
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
