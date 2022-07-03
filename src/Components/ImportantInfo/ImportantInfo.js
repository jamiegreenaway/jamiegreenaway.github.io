import React from "react";
import { withStyles } from "@material-ui/styles";
import PoliciesImage from "../../static/PoliciesImage.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

const styles = {
  policyContainer: {
    display: "inline-block",
  },
  policy: {
    padding: 10,
  },
};

const Home = ({ classes }) => {
  function navigate(value) {
    switch (value) {
      case 0:
        window.location.replace(
          "https://docs.google.com/spreadsheets/d/1SDup5tnpLlV__AHTgk5-Yb35inZ_0qKJ/edit#gid=1843428633"
        );
        break;
      case 1:
        window.location.replace(
          "https://docs.google.com/document/d/1IlV1j3CIUMUA0Ys6i7kTFNtbuen9xsy4/edit"
        );
        break;
      case 2:
        window.location.replace(
          "https://docs.google.com/document/d/1NXy74D4CcIXrjyK3GohwRWZX_v-36OBc/edit"
        );
        break;
      case 3:
        window.location.replace(
          "https://docs.google.com/document/d/1rF6aVdk_6IwzDy2g6dfj8kdFI9-F_PGz/edit"
        );
        break;
      case 4:
        window.location.replace(
          "https://docs.google.com/document/d/1-NJL62Qr0fqYMdfjy-rweoc_PTv57X54/edit"
        );
        break;
      case 5:
        window.location.replace(
          "https://docs.google.com/document/d/1baRPTijsOEeDOzP1ngOi01kTq6DEDu_k/edit"
        );
        break;
      case 6:
        window.location.replace(
          "https://docs.google.com/document/d/1CeiSznjwSEi2Ppcz_vfRpBerOXBuxOsw/edit"
        );
        break;
      default:
    }
  }

  return (
    <div className={classes.container}>
      <h1>Our Policies</h1>
      <img src={PoliciesImage} alt="dean watson" style={{ width: "100vw" }} />
      <div className={classes.policyContainer}>
        <div className={classes.policy}>
          <Card sx={{ minWidth: 200 }} className={classes.card}>
            <CardActionArea onClick={(e) => navigate(0)}>
              <CardContent>
                <h3>Child Well-Being Recruitment Training</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.policy}>
          <Card sx={{ minWidth: 200 }}>
            <CardActionArea onClick={(e) => navigate(1)}>
              <CardContent>
                <h3>Disabled Supporter's Policy</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.policy}>
          <Card sx={{ minWidth: 200 }}>
            <CardActionArea onClick={(e) => navigate(2)}>
              <CardContent>
                <h3>Ejection and Detention Policy</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.policy}>
          <Card sx={{ minWidth: 200 }}>
            <CardActionArea onClick={(e) => navigate(3)}>
              <CardContent>
                <h3>Hate Crime Policy</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.policy}>
          <Card sx={{ minWidth: 200 }}>
            <CardActionArea onClick={(e) => navigate(4)}>
              <CardContent>
                <h3>Health and Safety Policy Statement</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.policy}>
          <Card sx={{ minWidth: 200 }}>
            <CardActionArea onClick={(e) => navigate(5)}>
              <CardContent>
                <h3>Unacceptable Conduct Policy</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.policy}>
          <Card sx={{ minWidth: 200 }}>
            <CardActionArea onClick={(e) => navigate(6)}>
              <CardContent>
                <h3>Equality, Diversity and Inclusion Statement</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <h3>Club Child Protection Officer</h3>
      <div>
        <p>Grant Mcdowell</p>
        <p>07825 049277</p>
        <p>Eaststirlingshire@slfl.co.uk</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
