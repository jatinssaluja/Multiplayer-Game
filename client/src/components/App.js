import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

// Redux
import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact={true} path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
