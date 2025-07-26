import React, { useEffect, useState } from "react";
import JobListing from "./jobListing";

import { CircleLoader } from "react-spinners";

const JobListings = ({ isHome = false }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  // const JobListings = isHome ? jobs.slice(0, 3)  : jobs ;

  const [jobs, SetJobs] = useState([]);

  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {

      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs' 

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        SetJobs(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        SetLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          
            {/* <!-- Job Listing 1 --> */}

            {loading ? (
              <>
                <CircleLoader
                  color="#432dd7"
                  loading={loading}
                  cssOverride={override}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />  
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => {
                  return <JobListing key={job.id} job={job} />;
                })}
              </div>
            )}
          </div>
      </section>
    </>
  );
};

export default JobListings;
