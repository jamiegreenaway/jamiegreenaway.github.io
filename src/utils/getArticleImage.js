import WilsonSignsUp from "../static/news/WilsonSignsUp.jpg";
import SluddenChecksIn from "../static/news/SluddenChecksIn.png";
import SeasonTickets from "../static/news/SeasonTickets.jfif";
import SquadUpdate from "../static/news/SquadUpdate.jfif";
import NoImage from "../static/news/NoImage.png";

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
    default:
      return NoImage;
  }
}
