import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon  href="google.com"/>
        <TwitterIcon />
        <FacebookIcon />
        <LinkedIcon />
        <p > @ 2023 Indianfood.com.</p>
      </div>

    </div>
  );
}

export default Footer;
