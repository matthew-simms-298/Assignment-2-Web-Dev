'use client'
import StandardFooter from "@/components/StandardFooter";
import React, {useState} from 'react'

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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-purple-200 text-black">
      <div class="w-screen h-12 border-b-black-2 text-center flex justify-evenly">
        <div class="w-1/2 border-r-black-2 pr-5 bg-purple-800 text-white pt-3 text-4x1">
          <a href="/" className="text-center">
            Homepage
          </a>
        </div>
        <div class="w-1/2 border-r-black-2 pr-5 text-gray-700 bg-purple-200 pt-3 text-3x1">
          <p class="text-center font-bold">Students</p>
        </div>
      </div>
      <div className="bg-gray-100 p-10 m-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center p-1 mb-15">
          Add Student Information
        </h1>
        <form onSubmit={handleSubmit()}>
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="FirstName">First Name:</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              value={formData.firstName}
              placeholder="Example: Marcus"
              className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200"
              required
            />
            <label htmlFor="LastName">Last Name:</label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              value={formData.lastName}
              onChange={handleInputChange()}
              placeholder="Example: DeMaximus"
              className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200"
              required
            />
            <p>Birthdate:</p>
            <p className="text-xs italic text-grey-300">Year, Month, Day</p>
            <div className="">
              {/*
                            <div>
                                <label htmlFor="birthyear">Year: </label>
                                <label htmlFor="birthmonth">Month: </label>
                                <label htmlFor="birthday">Day: </label>
                            </div>
                            */}
              <div>
                <input
                  type="text"
                  id="birthyear"
                  name="birthyear"
                  onChange={handleInputChange()}
                  placeholder="2023"
                  value={formData.birthYear}
                  className="border border-gray-500 rounded-md p-1 m-1 w-12 hover:bg-purple-200"
                  required
                />
                <input
                  type="text"
                  id="birthday"
                  name="birthday"
                  placeholder="10"
                  onChange={handleInputChange()}
                  value={formData.brithDaye}
                  className="border border-gray-500 rounded-md p-1 m-1 w-7 hover:bg-purple-200"
                  required
                />
                <input
                  type="text"
                  id="birthmonth"
                  name="birthmonth"
                  onChange={handleInputChange()}
                  placeholder="12"
                  value={formData.brithMonth}
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
              placeholder="12"
              onChange={handleInputChange()}
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
