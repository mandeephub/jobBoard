import React, { useState } from "react";

import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  let description = job.description;

 

  let [ShowFullDescription, SetShowFullDescription] = useState(false);


   if(!ShowFullDescription){
    description = description.substring(0, 90) + "...";
  }

  function toggleshowlessmore(){

       SetShowFullDescription((prevState) => !prevState)
  }



  return (
    <>
      <div key={job.id} className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-4"> { description } </div>

          <button onClick={toggleshowlessmore} className="mb-3 text-blue-500 rounded-md hover:text-blue-700 transition duration-200"> {ShowFullDescription ? 'Less' : 'More'} </button>


          <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <FaLocationPin className="inline text-lg mr-1"/>
              {job.location}
            </div>
            <Link
              to={`/job/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
