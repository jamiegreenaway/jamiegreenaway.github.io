import React from "react";
import styles from "./style";
import { withStyles } from "@material-ui/styles";
import players from "../../Data/players.json";
import PlayersCard from "../PlayersCard/PlayersCard";

const Players = ({ classes }) => {
  const goalkeepers = players[0];
  const defenders = players[1];
  const midfielders = players[2];
  const forwards = players[3];

  return (
    <div>
      <h1>Goalkeepers</h1>
      <div className={classes.players}>
        {goalkeepers.map((player) => (
          <div>
            <PlayersCard player={player} />
          </div>
        ))}
      </div>
      <h1>Defenders</h1>
      <div className={classes.players}>
        {defenders.map((player) => (
          <div>
            <PlayersCard player={player} />
          </div>
        ))}
      </div>
      <h1>Midfielders</h1>
      <div className={classes.players}>
        {midfielders.map((player) => (
          <div>
            <PlayersCard player={player} />
          </div>
        ))}
      </div>
      <h1>Forwards</h1>
      <div className={classes.players}>
        {forwards.map((player) => (
          <div>
            <PlayersCard player={player} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(Players);
