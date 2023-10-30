"use client"
import React, { useState } from 'react';


const StudentNames = () => {

    const [studentNames, setStudentNames] = useState(['']);
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
    };

    return (
        <div className="bg-blue-200 rounded-md pd-5 mb-5">
          <p className="underline font-bold">Student Names</p>
          <ul className="list-disc ml-4">
            {releaseYears.map((item,index) => (
              <li className="last:mb-0 first:mb-0 space-y-4 p-1" key={index}>{item}</li>
            ))}
          </ul>
        </div>
    );
}

export default StudentNames;
