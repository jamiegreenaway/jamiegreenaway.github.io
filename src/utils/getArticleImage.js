import WilsonSignsUp from "../static/news/WilsonSignsUp.jpg";
import SluddenChecksIn from "../static/news/SluddenChecksIn.png";
import SeasonTickets from "../static/news/SeasonTickets.jfif";
import SquadUpdate from "../static/news/SquadUpdate.jfif";
import NoImage from "../static/news/NoImage.png";
import Brownlee from "../static/news/brownlee.png";
import Del from "../static/news/del.jpeg";
import Del2 from "../static/news/DelBeanie.png";
import StirlingUni from "../static/news/Stirling_uni.jpg";
import EdinUni from "../static/news/Edin_uni.jpg";
import GeorgePatterson from "../static/news/GeorgePatterson.jpg";
export function getArticleImage(title) {
  switch (title) {
    case "Wilson Signs Up":
      return WilsonSignsUp;
    case "Sludden Checks In":
      return SluddenChecksIn;
    case "Season Tickets Available Now!":
      return SeasonTickets;
    case "Squad Update":
      return SquadUpdate;
    case "Crossgates Primrose 2-2 East Stirlingshire":
      return Brownlee;
    case "Dunbar United 2-1 East Stirlingshire":
      return Del;
    case "Lothian Thistle Hutchison Vale 2-3 East Stirlingshire":
      return Del2;
    case "University of Stirling 1-1 East Stirlingshire":
      return StirlingUni;
    case "Edinburgh University 1-1 East Stirlingshire":
      return EdinUni;
    case "Ultimate Soccer boss becomes Clark's right-hand man":
      return GeorgePatterson;
    default:
      return NoImage;
  }
}
