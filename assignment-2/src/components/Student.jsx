"use client";
import React, { useEffect, useState } from "react";

const Student = () => {
  const [students, setStudent] = React.useState([]);

  const [selectedOption, setSelectedOptions] = useState('default')
  const [textareaValue, seTextareaValue] = useState('')

  const handleSelect = (event) => {
    const selectedValue = event.target.value
    setSelectedOptions(selectedValue)

    if (selectedValue === getElementByID("1")) {
      var placeholderText = `First Name: ${people[0].firstName}
      Last Name: ${people[0].lastName}
      Birth Date: ${people[0].birthYear}/${people[0].birthMonth}/${people[0].birthDay}
      Grade: ${people[0].grade}`
    }

    setTextareaValue(placeholderText)
  }

  /*const [studentNames, setStudentNames] = useState(['']);
    const [studentBirthdates, setStudentBirthdates] = useState(['']);
    const [studentGrades, setStudentGrades] = useState(['']);

    const addName = (targetItem) => {
        setStudentNames[studentNames,targetItem];
    };

    const addBirthdate = (targetItem) => {
        setStudentBirthdates[studentNames,targetItem];
    };

    const addGrades = (targetItem) => {
        setStudentGrades[studentNames,targetItem];
    }; */


    // db isnt working currently so i want to just test my printing theory using dummy code
    const people =
    [
      {firstName: "Mark", lastName: "Smith", birthYear: 2004, birthMonth: 5, birthDay: 21, grade: 12}, 
      {firstName: "Matthew", lastName: "Simms", birthYear: 2004, birthMonth: 5, birthDay: 21, grade: 12}
    ]


    for (const name of people) {
      console.log(name.firstName)
    }

  return (
    /*<div className="bg-blue-200 rounded-md pd-5 mb-5">
          <p className="underline font-bold">Student Names</p>
          <ul className="list-disc ml-4">
            {releaseYears.map((item,index) => (
              <li className="last:mb-0 first:mb-0 space-y-4 p-1" key={index}>{item}</li>
            ))}
          </ul>
        </div> */

    <div className="flex flex-col items-center justify-center">
      {/*
      =================================================================
        ***READ CAREFULLY***

        this will create a drop down of the students
        when the desired student is clicked it will
        display there information below it as such
        currently i am not able to figure out the database.
        please show this comment to Mo after the midterm.

        Problem: cannot fetch the database "TypeError: Failed to fetch"
        Location: Line 19 on configuration/page.js
      ================================================================= 
      */}
      <select
       
      className="flex flex-row items-center justify-center rounded-md">
        <option>-- Select Student --</option>
      {people.map((person, index) => (
          <option 
          key={index} 
          id="${index + 1}"
          value={`${person.firstName} ${person.lastName}`}>
            {person.firstName} {person.lastName}
          </option>
        ))}
  
      </select>
      <textarea className="resize-none mt-5"
        rows={5}
        placeholder={`First Name: ${people[0].firstName}
Last Name: ${people[0].lastName}
Birth Date: ${people[0].birthYear}/${people[0].birthMonth}/${people[0].birthDay}
Grade: ${people[0].grade}
        `}
        readOnly
      />
    </div>
  );
};

export default Student;
