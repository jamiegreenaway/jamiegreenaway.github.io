import React from "react";
import { withStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";
import articles from "../../Data/news.json";
import { getArticleImage } from "../../utils/getArticleImage";

const style = {
  content: {
    display: "inline-block",
    textAlign: "center",
    margin: "auto",
    padding: "10px",
  },
  paragraphs: {
    fontSize: 20,
    textAlign: "left",
  },
};

const IndividualArticle = ({ classes }, match) => {
  let { id } = useParams();

  const article = getArticle(id);
  function getArticle(id) {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id === id) {
        return articles[i];
      }
    }
  }
  return (
    <div className={classes.root}>
      <h1>{article.title}</h1>
      <img
        src={getArticleImage(article.title)}
        alt="article"
        style={{ maxHeight: "700px", maxWidth: "80%" }}
      />
      <div className={classes.content}>
        {article.content.map((p) => (
          <p className={classes.paragraphs}>{p.paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default withStyles(style)(IndividualArticle);
