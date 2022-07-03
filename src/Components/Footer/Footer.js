import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Badge from "../../static/Badge.png";
import Facebook from "../../static/facebook.png";
import Twitter from "../../static/twitter.png";
import Youtube from "../../static/youtube.png";
import { useHistory } from "react-router-dom";

const style = {
  root: {
    display: "flex",
    backgroundColor: "black",
    color: "white",
    width: "100%",
  },
  badge: {
    float: "left",
    backgroundColor: "white",
  },
  buttons: {
    color: "white",
  },
  links: {
    margin: "auto",
  },
  policies: {
    color: "white",
    textDecoration: "none",
    mouse: "pointer",
    "&:hover": {
      backgroundColor: "#929492",
    },
  },
};

const Header = ({ classes }) => {
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.badge} style={{ mouse: "pointer" }}>
        <img
          src={Badge}
          alt="circular club badge"
          onClick={(e) => history.push("/")}
        />
      </div>
      <div className={classes.links}>
        <p>© 2022 East Stirlingshire FC. All rights reserved. </p>
        <Link to="/policies" className={classes.policies}>
          Important Info
        </Link>
        <div className={classes.socialMedia}>
          <a href="https://facebook.com/eaststirlingshirefc">
            <img
              src={Facebook}
              alt="Facebook"
              style={{ height: 80, width: 80, padding: 10 }}
            />
          </a>
          <a href="https://twitter.com/TheShireFC">
            <img
              src={Twitter}
              alt="Twitter"
              style={{ height: 80, width: 80, padding: 10 }}
            />
          </a>
          <a href="https://www.youtube.com/c/ShireTV">
            <img
              src={Youtube}
              alt="Youtube"
              style={{ height: 80, width: 80, padding: 10 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default withStyles(style)(Header);
