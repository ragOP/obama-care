import React from "react";
import family from "../assests/Family-Care-Clinic.jpg";
import agent from "../assests/agent.jpg";
import google from "../assests/google.png";
import yelp from "../assests/yelp.png";
import trust from "../assests/trustpilot-logo.png";
import trustL from "../assests/trustpilot.png";

const Hero = () => {
  return (
    <>
      <div class="hero">
        <div class="container">
          <div class="row">
            <div class="hero-text-holder">
              <h1>New 2023 Special Discounts for American Residents Only</h1>
              {/* <!--<h2>Find affordable health insurance now with plans starting as low as $0 month</h2>--> */}
              <p>
                Find affordable health insurance now with plans starting as low
                as $0 month!
              </p>
              <h2>Call Now For Your 100% Free Quote</h2>
              <a href="tel:(888) 907-0053">
                <i class="icon icon-phone">�&nbsp;�</i> (888) 907-0053
              </a>
              <div class="rating">
                <img src={trustL} alt="" srcset="" />
              </div>
              <div class="stars">
                <i class="icon icon-star"></i>
                <i class="icon icon-star"></i>
                <i class="icon icon-star"></i>
                <i class="icon icon-star"></i>
                <i class="icon icon-star-half-alt"></i>
              </div>
              <div class="divider-holder">
                <div class="star-holder">
                  <div class="left-divider divider">
                    <hr />
                  </div>
                  <div class="h3">
                    <h3>You could be eligible for:</h3>
                  </div>
                  <div class="right-divider divider">
                    <hr />
                  </div>
                </div>
              </div>
              <div class="feature-holder">
                <ul class="first">
                  <li>
                    <div class="feature">
                      <div class="feature-icon">
                        <i class="icon icon-ok-circled">�&nbsp;�</i>
                      </div>
                      <div class="feature-tag">
                        <strong>$0</strong> Unlimited
                        <br />
                        primary care
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="feature">
                      <div class="feature-icon">
                        <i class="icon icon-ok-circled">�&nbsp;�</i>
                      </div>
                      <div class="feature-tag">
                        <strong>$0</strong> Unlimited virtual
                        <br />
                        urgent care
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="second">
                  <li>
                    <div class="feature">
                      <div class="feature-icon">
                        <i class="icon icon-ok-circled">�&nbsp;�</i>
                      </div>
                      <div class="feature-tag">
                        <strong>$3</strong> Prescriptions
                        <br />
                        at Walgreens
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="feature">
                      <div class="feature-icon">
                        <i class="icon icon-ok-circled">�&nbsp;�</i>
                      </div>
                      <div class="feature-tag">
                        <strong>$100</strong> Earn rewards
                        <br />
                        for health
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="bg"></div>
      </div>
      <div class="text-section">
        <div class="container">
          <div class="row">
            <div class="left">
              <div class="contact-box">
                <img src={agent} alt="" />
                <h3>Available Now</h3>
                <p>Call us now For Your 100% Free Quote.</p>
                <a href="tel:(888) 907-0053">
                  <i class="icon icon-phone">&nbsp;</i> (888) 907-0053
                </a>
              </div>
            </div>
            <div class="right">
              <div class="body-text">
                <div class="section section-1">
                  <h2>Top Health Insurance Plans!</h2>
                  <p>
                    Our process is very simple, get health insurance coverage in
                    3 easy steps (#2) 1,2,3 it can be numbered and or add icons
                    next to each number
                  </p>
                  <div class="check-list">
                    <div class="checkbox">
                      <div class="checkbox-img">
                        <i class="process"></i>
                      </div>
                      <div class="checkbox-content">
                        <h3>Step 1</h3>
                        <p>Call to speak with a licensed agent.</p>
                      </div>
                    </div>
                    <div class="checkbox">
                      <div class="checkbox-img">
                        <i class="process"></i>
                      </div>
                      <div class="checkbox-content">
                        <h3>Step 2</h3>
                        <p>
                          Answer a few easy questions and receive FREE financial
                          help.
                        </p>
                      </div>
                    </div>
                    <div class="checkbox">
                      <div class="checkbox-img">
                        <i class="process"></i>
                      </div>
                      <div class="checkbox-content">
                        <h3>Step 3</h3>
                        <p>Get covered as soon as tomorrow.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div class="section section-2">
                  <p>
                    Want to talk to an expert? Our team is here for you and will
                    answer all your questions. Give us a call today on
                    <a href="tel:(888) 907-0053"> (888) 907-0053</a>
                  </p>
                  <img src={family} alt="" />
                  <h2>What you could be eligible for?</h2>
                  <p>
                    Our licensed insurance agents are standing by waiting for
                    your call. Our certified agents will get you qualified for
                    maximum financial help, most people are paying $0 a month
                    and enjoying benefits such as:
                  </p>
                  <ul class="eligible">
                    <li>
                      <i class="icon icon-ok-circled">&nbsp;</i>
                      <strong>$0 </strong>Deductible
                    </li>
                    <li>
                      <i class="icon icon-ok-circled">�&nbsp;�</i>
                      <strong>$0 </strong>Copays
                    </li>
                    <li>
                      <i class="icon icon-ok-circled">�&nbsp;�</i>
                      <strong>$0 </strong>Preventive Care Visits
                    </li>
                    <li>
                      <i class="icon icon-ok-circled">�&nbsp;�</i>
                      <strong>$0 </strong>Doctor Visits
                    </li>
                  </ul>
                </div>
                <div class="section section-3">
                  <h2>Join Our Family Of Satisfied Customers</h2>
                  <div class="rating-companies">
                    <img src={google} alt="" />
                    <img src={yelp} alt="" />
                    <img src={trust} alt="" />
                  </div>
                  <div class="testimonial-holder">
                    <div class="owl-carousel">
                      <div class="testimonial">
                        <p>
                          Jeff Morningstar, did a very good job explaining all
                          of my different options. Compared different plans,
                          taking into account the different doctor's I visit and
                          all the different options I use to let me decide what
                          plan that I wanted.
                        </p>
                        <div class="testimonial-bottom">
                          <div class="name-holder">Christie Morgan</div>
                          <div class="stars">
                            <i class="icon icon-star">&nbsp;</i>
                            <i class="icon icon-star">&nbsp;</i>
                            <i class="icon icon-star">&nbsp;</i>
                            <i class="icon icon-star">&nbsp;</i>
                            <i class="icon icon-star">&nbsp;</i>
                          </div>
                        </div>
                      </div>
                      <div class="testimonial">
                        <p>
                          Jeff Morningstar, did a very good job explaining all
                          of my different options. Compared different plans,
                          taking into account the different doctor's I visit and
                          all the different options I use to let me decide what
                          plan that I wanted.
                        </p>
                        <div class="testimonial-bottom">
                          <div class="name-holder">Christie Morgan</div>
                          <div class="stars">
                            <i class="icon icon-star">�&nbsp;�</i>
                            <i class="icon icon-star">�&nbsp;�</i>
                            <i class="icon icon-star">�&nbsp;�</i>
                            <i class="icon icon-star">�&nbsp;�</i>
                            <i class="icon icon-star">�&nbsp;�</i>
                          </div>
                        </div>
                      </div>
                      <div class="testimonial">
                        <p>
                          Jeff Morningstar, did a very good job explaining all
                          of my different options. Compared different plans,
                          taking into account the different doctor's I visit and
                          all the different options I use to let me decide what
                          plan that I wanted.
                        </p>
                        <div class="testimonial-bottom">
                          <div class="name-holder">Christie Morgan</div>
                          <div class="stars">
                            <i class="icon icon-star">�&nbsp;�</i>
                            <i class="icon icon-star">�&nbsp;�</i>
                            <i class="icon icon-star">�&nbsp;�</i>
                            <i class="icon icon-star">�&nbsp;�</i>
                            <i class="icon icon-star">�&nbsp;�</i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
