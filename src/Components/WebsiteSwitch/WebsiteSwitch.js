import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import News from "../News/News";
import Players from "../Players/Players";
import Fixtures from "../Fixtures/Fixtures";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/Header";
import Footer from "../Footer/Footer";
import IndividualArticle from "../IndividualArticle/IndividualArticle";
import ImportantInfo from "../ImportantInfo/ImportantInfo";

const WebsiteSwitch = (o) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function changeWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", changeWidth);
  }, []);

  if (width > 621) {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/Players">
            <Players />
          </Route>
          <Route exact path="/Fixtures">
            <Fixtures />
          </Route>
          <Route exact path="/policies">
            <ImportantInfo />
          </Route>
          <Route exact path="/Article/:id">
            <IndividualArticle />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <MobileHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/Players">
            <Players />
          </Route>
          <Route exact path="/Fixtures">
            <Fixtures />
          </Route>
          <Route exact path="/policies">
            <ImportantInfo />
          </Route>
          <Route exact path="/Article/:id">
            <IndividualArticle />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
};

export default withRouter(WebsiteSwitch);
