import React from "react";
import styles from "./style";
import { withStyles } from "@material-ui/styles";
import data from "../../Data/news.json";
import NewsCard from "../NewsCard/NewsCard";
import Badge from "../../static/Badge.png";

const Home = ({ classes }) => {
  let articles = [];
  for (let i = 0; i < data.length; i++) {
    articles.push(data[i]);
  }
  articles.reverse();
  return (
    <div className={classes.container}>
      <div>
        <h1>Welcome to the online hub for East Stirlingshire FC</h1>
        <img src={Badge} alt="club badge" />
      </div>
      <div className={classes.articles}>
        {articles.map((article) => (
          <div>
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
