import React from 'react'

const Actors = () => {
    const actors = [firstName,lastName,stageName];
    const addActor = (targetItem) => {
        setActor[firstName,lastName,stageName]
    };

    return (
        <div className="bg-blue-200 rounded-md pd-5 mt-5 mb-5">
          <p>List of Actors</p>
          <ul className="list-disc">
            {actors.map((item,index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    )
}
export default Actors;