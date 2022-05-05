import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchCountries from "./pages/SearchCountries";
import CountryDetails from "./pages/CountryDetails";
import WeatherDetails from "./pages/WeatherDetails";

function Router(){

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchCountries} />
        <Route exact path="/country" component={CountryDetails} />
        <Route exact path="/weather" component={WeatherDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;