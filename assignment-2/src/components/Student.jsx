"use client"
import React, { useEffect, useState } from 'react';


const Student = () => {
    const [students, setStudent] = React.useState([])

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

    useEffect(() => {
      fetch("http://localhost:5000/students")
      .then(response => response.json())
      .then(data => setStudent(data))
    })

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
          {/*This prints a drop down of all the students*/}
          <select className='flex flex-row items-center justify-center rounded-md'>
            <option value="name">student.first + student.last</option>
          
          </select>
          <div className="flex flex-col items-center justify-center m-2">
              <p className='border-y border-slate-300 px-2'>ID FName LName Birthday Grade</p>
              <p className='border-y border-slate-300 px-2'>ID FName LName Birthday Grade</p>
          </div>
      </div>
    );
}

export default Student;
