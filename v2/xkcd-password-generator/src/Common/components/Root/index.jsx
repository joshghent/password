import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch, Redirect } from "react-router";
import { Provider } from "react-redux";

import "Common/assets/fonts.css";

import history from "config/history";
import store from "config/store";

import { ROUTES } from "Navigation/constants";
import NavigationContainer from "Navigation/components/container";
import HomeContainer from "Home/components/container";
// import AboutContainer from "About/components/container";
import AppWrapper from "./AppWrapper";

const routes = (
  <NavigationContainer>
    <Switch>
      <Route path={ROUTES.HOME} component={HomeContainer} />
      {/* <Route path={ROUTES.ABOUT} component={AboutContainer} /> */}
      <Redirect from={ROUTES.ROOT} to={ROUTES.HOME} />
    </Switch>
  </NavigationContainer>
);

const Root = () => (
  <Provider store={store}>
    <AppWrapper>
      <ConnectedRouter history={history}>
        <Switch>{routes}</Switch>
      </ConnectedRouter>
    </AppWrapper>
  </Provider>
);

export default Root;
