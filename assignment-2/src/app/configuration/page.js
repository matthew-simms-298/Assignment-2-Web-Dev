"use client";
import StandardFooter from "@/components/StandardFooter";
import React, { useState, useEffect } from "react";

export default function Configuration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthYear: "",
    brithMonth: "",
    brithDay: "",
    grade: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("http://localhost:5000/students");
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://Localhost:5000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        setMessage("Student registered successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          birthYear: "",
          brithMonth: "",
          brithDay: "",
          grade: "",
        });}
    } catch (error) {
      setMessage("ERROR");
    }
  };

  // Rest of the code...
  // Matt: I dont think we'll need it but for now we need to figure out how to get the db connected
  {
    /*
export default function Configuration() {
  async function loadData() {
    const response = await fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((data) => setStudent(data));
  }

  const setFormData = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      birthYear: "",
      brithMonth: "",
      brithDay: "",
      grade: "",
    });
  };

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://Localhost:5000/students", {
        method: "POST",
        hearders: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage("Student registered successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          birthYear: "",
          brithMonth: "",
          brithDay: "",
          grade: "",
        });
      } else {
        setMessage("INVALID INPUT");
      }
    } catch (error) {
      setMessage("ERROR");
    }
  };
*/
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-purple-200 text-black">
      <div className="w-screen h-12 border-b-black-2 text-center flex justify-evenly">
        <div className="w-1/2 border-r-black-2 pr-5 bg-purple-800 text-white pt-3 text-4x1">
          <a href="/" className="text-center hover:underline">
            Homepage
          </a>
        </div>
        <div className="w-1/2 border-r-black-2 pr-5 text-gray-700 bg-purple-200 pt-3 text-3x1">
          <p className="text-center font-bold">Students</p>
        </div>
      </div>
      <div className="bg-gray-100 p-10 m-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center p-1 mb-15">
          Add Student Information
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="FirstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Example: Maxine"
              className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200"
              required
            />
            <label htmlFor="LastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Example: DeMaximus"
              className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200"
              required
            />
            <p>Birthdate:</p>
            <p className="text-xs italic text-grey-300">Year, Month, Day</p>

            <div className="">
              <div>
                <input
                  type="text"
                  id="birthYear"
                  name="birthYear"
                  onChange={handleInputChange}
                  placeholder="2023"
                  value={formData.birthYear}
                  className="border border-gray-500 rounded-md p-1 m-1 w-12 hover:bg-purple-200"
                  required
                />
                <input
                  type="text"
                  id="birthMonth"
                  name="birthMonth"
                  onChange={handleInputChange}
                  placeholder="5"
                  value={formData.birthMonth}
                  className="border border-gray-500 rounded-md p-1 m-1 w-7 hover:bg-purple-200"
                  required
                />
                <input
                  type="text"
                  id="birthDay"
                  name="birthDay"
                  onChange={handleInputChange}
                  placeholder="12"
                  value={formData.birthDay}
                  className="border border-gray-500 rounded-md p-1 m-1 w-7 hover:bg-purple-200"
                  required
                />
              </div>
            </div>

            <label htmlFor="grade">Grade: </label>
            <input
              type="text"
              id="grade"
              name="grade"
              placeholder="5"
              onChange={handleInputChange}
              value={formData.grade}
              className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200"
              required
            />
            <button
              type="submit"
              className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <StandardFooter />
    </main>
  );
}
