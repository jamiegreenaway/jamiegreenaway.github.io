import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./style";
import { withStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { getArticleImage } from "../../utils/getArticleImage";

const NewsCard = ({ article, classes }) => {
  const history = useHistory();

  return (
    <div
      className={classes.card}
      onClick={(e) => history.push("/Article/" + article.id)}
    >
      <Card sx={{ width: "50vh" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={getArticleImage(article.title)}
            alt="Article image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.preview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default withStyles(styles)(NewsCard);
