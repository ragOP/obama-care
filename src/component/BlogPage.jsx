// BlogPage.jsx
import React from "react";

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
        varius lectus.
      </h1>
      <img
        className="blog-image"
        src="https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg"
        alt="lo"
      />
      <p className="blog-content">
        <b>Exploring the Nuances: Medicare vs. Medicaid</b>
        <br />
        Medicare and Medicaid are both government-sponsored healthcare programs
        in the United States, but they serve different populations and have
        distinct eligibility criteria, benefits, and coverage options. Let's
        delve into the details to understand the differences between these two
        vital programs:
        <br />
        <b>Medicare:</b>
        <br />
        <b>Coverage Population: </b>Medicare primarily serves individuals aged
        65 and older, as well as younger individuals with certain disabilities
        or medical conditions. It consists of four parts: Part A (hospital
        insurance), Part B (medical insurance), Part C (Medicare Advantage), and
        Part D (prescription drug coverage). <br />
        <b>Eligibility: </b>Individuals generally become eligible for Medicare
        at age 65 if they or their spouse have worked and paid Medicare taxes
        for at least 10 years. Younger individuals with certain disabilities,
        end-stage renal disease (ESRD), or amyotrophic lateral sclerosis (ALS)
        may also qualify for Medicare.
        <br />
        <b>Benefits:</b>
        Medicare Part A covers inpatient hospital stays, skilled nursing
        facility care, hospice care, and some home health services. Medicare
        Part B covers medically necessary services such as doctor visits,
        outpatient care, preventive services, and durable medical equipment.
        Medicare Part D provides prescription drug coverage through private
        insurance plans.Medicare Advantage (Part C) offers an alternative way to
        receive Medicare benefits through private health plans approved by
        Medicare.
        <br />
        <b>Cost:</b>
        Medicare beneficiaries may pay premiums, deductibles, coinsurance, and
        copayments for various services, depending on the parts of Medicare they
        enroll in and their income level.
        <b>Medicaid:</b>
        <br />
        <b>Coverage Population:</b> Medicaid is a joint federal and state
        program that provides health coverage to low-income individuals and
        families, including children, pregnant women, parents, seniors, and
        individuals with disabilities. It covers a broad range of healthcare
        services, including hospital stays, doctor visits, prescription drugs,
        and long-term care. <br />
        <b>Eligibility: </b> Eligibility for Medicaid varies by state and is
        based on income, household size, and other factors. The Affordable Care
        Act (ACA) expanded Medicaid eligibility to include adults with incomes
        up to 138% of the federal poverty level in states that chose to expand
        the program.
        <br />
        <b>Benefits:</b>
        Medicaid provides comprehensive coverage for essential health services,
        including preventive care, primary care, hospitalizations, mental health
        services, and long-term care. Some Medicaid programs also offer
        additional services such as transportation to medical appointments,
        dental care, and vision care.
        <br />
        <b>Cost:</b>
        Medicaid is generally free or low-cost for eligible individuals, with no
        or minimal out-of-pocket costs for covered services. However,
        cost-sharing requirements may vary by state.
        <br />
        <b>Key Differences:</b> Medicare is primarily for seniors aged 65 and
        older, while Medicaid serves low-income individuals and families,
        including people of all ages. Medicare is a federal program administered
        by the Centers for Medicare & Medicaid Services (CMS), while Medicaid is
        administered jointly by the federal government and individual states.
        Medicare eligibility is based on age, disability, or certain medical
        conditions, whereas Medicaid eligibility is based on income and other
        factors, with criteria varying by state. Medicare offers different parts
        for hospital and medical coverage, while Medicaid provides comprehensive
        coverage for a wide range of healthcare services. Medicare beneficiaries
        may have cost-sharing requirements based on the services they receive
        and their income level, whereas Medicaid coverage is generally free or
        low-cost for eligible individuals. Understanding the differences between
        Medicare and Medicaid is essential for individuals and families
        navigating healthcare options and determining eligibility for coverage
        and benefits. Each program serves distinct populations and plays a
        critical role in ensuring access to healthcare for millions of Americans
        across the country.
      </p>
      <div className="blog-metadata">
        <span className="blog-author">Author: John Doe</span>
        <span className="blog-date">Published: April 6, 2024</span>
      </div>
    </div>
  );
};

export default BlogPage;
