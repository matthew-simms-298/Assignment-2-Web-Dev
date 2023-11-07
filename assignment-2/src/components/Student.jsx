"use client";
import React, { useEffect, useState } from "react";

const Student = () => {

    // dummy code, we could not get the database connected
    const people =
    [
      {firstName: "Mark", lastName: "Smith", birthYear: 1999, birthMonth: 2, birthDay: 15, grade: 10}, 
      {firstName: "Matthew", lastName: "Simms", birthYear: 2004, birthMonth: 5, birthDay: 21, grade: 12}
    ]
    
      const [selectedStudent, setSelectedStudent] = useState(null);
    

    const  handleSelectChange = (event) => {
      const selectedStudent = people.find(person => 
        `${person.firstName} ${person.lastName}` === event.target.value
        );
        setSelectedStudent(selectedStudent)
    }
  
  return (
    <div className="flex flex-col items-center justify-center">
      <select
      onChange={handleSelectChange}
      className="flex flex-row items-center justify-center rounded-md">
        <option>-- Select Student --</option>
      {people.map((person, index) => (
          <option 
          key={index} 
          id="${index + 1}"
          value={`${person.firstName} ${person.lastName}`}>
            {person.firstName}
          </option>
        ))}
  
      </select>
      <div className="mt-4 bg-white p-2 rounded">
        {selectedStudent ? (
            <div>
            <p>Full Name: {selectedStudent.firstName} {selectedStudent.lastName}</p>
            <p>Date of Birth : {selectedStudent.birthYear}/{selectedStudent.birthMonth}/{selectedStudent.birthDay}</p>
            <p>Grade: {selectedStudent.grade}</p>
          </div>
        ) : (
          <p className="text-yellow-600"> No student was selected </p>
        )}
      </div>
    </div>
  );
};

export default Student;
