import React from "react";
import styles from "./style";
import { withStyles } from "@material-ui/styles";
import fixtures from "../../Data/fixtures.json";
import BerwickRangersBadge from "../../static/badges/Berwick_Rangers.png";
import BonessBadge from "../../static/badges/Boness_United.png";
import BroomhillBadge from "../../static/badges/Broomhill.png";
import BravesBadge from "../../static/badges/Caledonian_Braves.png";
import CelticBadge from "../../static/badges/Celtic.png";
import CivilBadge from "../../static/badges/Civil_Service_Strollers.png";
import CowdenbeathBadge from "../../static/badges/Cowdenbeath.png";
import ColtsBadge from "../../static/badges/Cumbernauld_Colts.png";
import StarBadge from "../../static/badges/Dalbeattie.png";
import EKBadge from "../../static/badges/East_Kilbride.png";
import ShireBadge from "../../static/badges/East_Stirlingshire.png";
import EdinburghUniBadge from "../../static/badges/Edinburgh_University.png";
import GalaBadge from "../../static/badges/Gala.png";
import GretnaBadge from "../../static/badges/Gretna.png";
import HeartsBadge from "../../static/badges/Hearts.png";
import KirkcaldyBadge from "../../static/badges/Kircaldy.jpg";
import RangersBadge from "../../static/badges/Rangers.png";
import SpartansBadge from "../../static/badges/Spartans.png";
import TranentBadge from "../../static/badges/Tranent_Juniors.png";
import StirlingUniBadge from "../../static/badges/University_of_Stirling.png";

const Fixtures = ({ classes }) => {
  const getBadge = (team) => {
    switch (team) {
      case "Berwick Rangers":
        return BerwickRangersBadge;
      case "Boness United":
        return BonessBadge;
      case "Open Goal Broomhill":
        return BroomhillBadge;
      case "Caledonian Braves":
        return BravesBadge;
      case "Celtic B":
        return CelticBadge;
      case "Civil Service Strollers":
        return CivilBadge;
      case "Cowdenbeath":
        return CowdenbeathBadge;
      case "Cumbernauld Colts":
        return ColtsBadge;
      case "Dalbeattie Star":
        return StarBadge;
      case "East Kilbride":
        return EKBadge;
      case "East Stirlingshire":
        return ShireBadge;
      case "Edinburgh University":
        return EdinburghUniBadge;
      case "Gala Fairydean Rovers":
        return GalaBadge;
      case "Gretna 2008":
        return GretnaBadge;
      case "Hearts of Midlothian B":
        return HeartsBadge;
      case "Kirkcaldy & Dysart":
        return KirkcaldyBadge;
      case "Rangers B":
        return RangersBadge;
      case "The Spartans":
        return SpartansBadge;
      case "Tranent Juniors":
        return TranentBadge;
      case "University of Stirling":
        return StirlingUniBadge;
      default:
        break;
    }
  };
  return (
    <div>
      <h1>Fixtures</h1>
      <div className={classes.fixtures}>
        <table
          style={{
            width: "50vw",
            margin: "auto",
            border: "1px solid grey",
            borderCollapse: "collapse",
          }}
        >
          {fixtures.map((fixture) => (
            <>
              <tr
                className={classes.table}
                style={{ borderBottom: "1px solid grey" }}
              >
                <td>{fixture.venue}</td>
                <td>{fixture.HomeTeam}</td>
                <td>
                  <img
                    src={getBadge(fixture.HomeTeam)}
                    alt="home team badge"
                    className={classes.badge}
                  />
                </td>
                <td>V </td>
                <td>
                  <img
                    src={getBadge(fixture.AwayTeam)}
                    alt="home team badge"
                    className={classes.badge}
                  />
                </td>
                <td>{fixture.AwayTeam}</td>
                <td>{fixture.Competition}</td>
                <td>{fixture.date}</td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default withStyles(styles)(Fixtures);
