import React from "react";
import logo from "../../assests/log7.jpeg";

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">
        Understanding How the US Government Supports Citizens Through Subsidies
        like the Affordable Care Act (ACA)
      </h1>
      <img className="blog-image" src={logo} alt="lo" />
      <p className="blog-content">
        The Affordable Care Act (ACA) has expanded access to healthcare coverage
        for millions of Americans. <br />
        <b>
          To be eligible for coverage under the ACA program, individuals must
          meet certain criteria:
        </b>
        <br /> <b>Citizenship or Legal Residency:</b> <br />
        To qualify for coverage under the ACA, individuals must be U.S.
        citizens, nationals, or lawfully present immigrants. This requirement
        ensures that the program is accessible to those who have a legal right
        to reside in the United States. <br /> <b>Income Level:</b> <br />{" "}
        Income is a crucial factor in determining eligibility for coverage under
        the ACA. Generally, individuals and families with household incomes
        between 100% and 400% of the federal poverty level may qualify for
        premium tax credits to help lower the cost of health insurance premiums.
        Additionally, individuals with incomes below 138% of the federal poverty
        level may be eligible for Medicaid coverage in states that have expanded
        the program under the ACA. <br /> <b>Uninsured Status: </b> <br />
        The ACA aims to provide coverage for individuals who are currently
        uninsured or underinsured. Those who already have access to affordable
        employer-sponsored health insurance or certain other types of coverage
        may not be eligible for subsidies through the ACA marketplace. <br />{" "}
        <b>Not Incarcerated:</b> <br /> Individuals who are incarcerated are
        generally not eligible for coverage under the ACA. However, individuals
        who are detained pending disposition of charges may still be eligible.{" "}
        <br /> <b>Not Eligible for Other Government Programs: </b> <br />
        Some individuals may be ineligible for coverage under the ACA if they
        are already enrolled in certain other government programs that provide
        comprehensive healthcare coverage, such as Medicare or TRICARE for
        military members and veterans. <br />{" "}
        <b>Residency in a Participating State:</b> <br />
        Eligibility for Medicaid coverage under the ACA may vary depending on
        whether the individual resides in a state that has chosen to expand
        Medicaid eligibility under the ACA. Residents of non-expansion states
        may face more stringent eligibility requirements for Medicaid coverage.
        It's important for individuals to carefully review the eligibility
        criteria and application requirements for coverage under the Affordable
        Care Act to determine their eligibility and explore their options for
        obtaining affordable healthcare coverage. Additionally, assistance is
        available through the Health Insurance Marketplace and certified
        enrollment assisters to help individuals navigate the application
        process and determine their eligibility for coverage under the ACA
        program.
      </p>
      <div className="blog-metadata">
        <span className="blog-author">Author: John Doe</span>
        <span className="blog-date">Published: April 6, 2024</span>
      </div>
    </div>
  );
};

export default BlogPage;
