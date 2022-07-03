import React from "react";
import styles from "./style";
import { withStyles } from "@material-ui/styles";
import articles from "../../Data/news.json";

const News = () => {
  return (
    <div>
      <h1>News</h1>
      {articles.map((article) => (
        <div>
          <h1>{article.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(News);
