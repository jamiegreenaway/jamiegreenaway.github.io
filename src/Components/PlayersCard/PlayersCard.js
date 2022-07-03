import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./style";
import { withStyles } from "@material-ui/styles";
import RossConnely from "../../static/players/RossConnely.jfif";
import IanUre from "../../static/players/IanUre.jfif";
import RuaridhMacDonald from "../../static/players/RuaridhMacDonald.png";
import ConorGreene from "../../static/players/ConorGreene.png";
import KennyBarr from "../../static/players/KennyBarr.jfif";
import AndyKay from "../../static/players/AndyKay.png";
import DeanRitchie from "../../static/players/DeanRitchie.png";
import GregorFotheringham from "../../static/players/GregorFotheringham.png";
import JackHodge from "../../static/players/JackHodge.jfif";
import DeanWatson from "../../static/players/DeanWatson.jfif";
import MarcSludden from "../../static/players/MarcSludden.png";
import KaiWilson from "../../static/players/KaiWilson.jpg";
import NoImage from "../../static/players/NoImage.png";

const NewsCard = ({ player, classes }) => {
  const getImage = (name) => {
    switch (name) {
      case "Ross Connelly":
        return RossConnely;
      case "Iain Ure":
        return IanUre;
      case "Ruaridh MacDonald":
        return RuaridhMacDonald;
      case "Conor Greene":
        return ConorGreene;
      case "Kenny Barr":
        return KennyBarr;
      case "Andy Kay":
        return AndyKay;
      case "Dean Ritchie":
        return DeanRitchie;
      case "Gregor Fotheringham":
        return GregorFotheringham;
      case "Jack Hodge":
        return JackHodge;
      case "Dean Watson":
        return DeanWatson;
      case "Marc Sludden":
        return MarcSludden;
      case "Kai Wilson":
        return KaiWilson;
      default:
        return NoImage;
    }
  };
  return (
    <div className={classes.card}>
      <Card sx={{ width: "40vh" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={getImage(player.name)}
            alt="Article image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {player.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default withStyles(styles)(NewsCard);
