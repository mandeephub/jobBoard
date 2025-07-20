import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListings";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  return (
    <>
      <Navbar />

      <Hero
        heading="Become a React Dev"
        subheading="Find the React job that fits your skills and needs"
      />

      <HomeCards />

      <JobListings />

      <ViewAllJobs />
    </>
  );
}

export default App;
