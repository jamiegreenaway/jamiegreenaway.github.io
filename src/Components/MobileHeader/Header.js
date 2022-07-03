import React from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StadiumIcon from "@mui/icons-material/Stadium";

const style = {
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
  },
  badge: {
    float: "left",
  },
  buttons: {
    color: "white",
  },
  button: {
    color: "white !important",
  },
};

const Header = ({ classes }) => {
  const history = useHistory();

  function navigate(nav) {
    switch (nav) {
      case 0:
        history.push("/");
        break;
      case 1:
        window.location.replace("https://the-shire-shop.myshopify.com/");
        break;
      case 2:
        history.push("/Players");
        break;
      case 3:
        history.push("/Fixtures");
        break;
      case 4:
        window.location.replace("https://app.fanbaseclub.com/Fan/Clubs/Choose");
        break;
      default:
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <Button onClick={(e) => navigate(0)} className={classes.button}>
          <HomeIcon />
        </Button>
        <Button onClick={(e) => navigate(1)} className={classes.button}>
          <ShoppingCartIcon />
        </Button>
        <Button onClick={(e) => navigate(4)} className={classes.button}>
          <StadiumIcon />
        </Button>
        <Button onClick={(e) => navigate(2)} className={classes.button}>
          <SportsSoccerIcon />
        </Button>
        <Button onClick={(e) => navigate(3)} className={classes.button}>
          <ScheduleIcon />
        </Button>
      </div>
    </div>
  );
};

export default withStyles(style)(Header);
