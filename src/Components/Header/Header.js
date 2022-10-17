import React from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StadiumIcon from "@mui/icons-material/Stadium";
import DescriptionIcon from "@mui/icons-material/Description";

const style = {
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
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
      case 5:
        history.push("/Policies");
        break;
      default:
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <Button onClick={(e) => navigate(0)} className={classes.button}>
          <HomeIcon />
          <h4>Home</h4>
        </Button>
        <Button onClick={(e) => navigate(1)} className={classes.button}>
          <ShoppingCartIcon />
          <h4>Club Shop</h4>
        </Button>
        <Button onClick={(e) => navigate(4)} className={classes.button}>
          <StadiumIcon />
          <h4>Season Tickets</h4>
        </Button>
        <Button onClick={(e) => navigate(3)} className={classes.button}>
          <ScheduleIcon />
          <h4>Fixtures</h4>
        </Button>
        <Button onClick={(e) => navigate(5)} className={classes.button}>
          <DescriptionIcon />
          <h4>Policies</h4>
        </Button>
      </div>
    </div>
  );
};

export default withStyles(style)(Header);
