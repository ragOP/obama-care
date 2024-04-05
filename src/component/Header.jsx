import React from "react";
import logo from "../assests/logo.png";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="row">
          <div class="logo-holder">
            <img src={logo} alt="" class="logo-img" />
            <div class="logo">Qualifyaca.com</div>
            <div class="location"></div>
          </div>
          <div class="call-now">
            {/* <span>Need Help?</span> */}
            <a href="tel:(888) 907-0053">
              <i class="icon icon-phone">&nbsp;</i> (888) 907-0053
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
