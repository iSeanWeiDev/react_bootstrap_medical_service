import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import { MainLayout } from "./layouts";
import theme from "./theme";

import Startup from "./pages/Startup";
import Home from "./pages/Home";
import About from './pages/About'
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Profile from './pages/Profile';
import Screening from './pages/Screening';
import Result from './pages/Result';

const renderWithLayout = (Component, Layout) => <Layout>{Component}</Layout>;

const App = ({ history }) => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route
          path="/"
          exact
          render={() => renderWithLayout(<Startup />, MainLayout)}
        />
        <Route
          path="/home"
          exact
          render={() => renderWithLayout(<Home />, MainLayout)}
        />
        <Route
          path="/about"
          exact
          render={() => renderWithLayout(<About />, MainLayout)}
        />
        <Route
          path="/solutions"
          exact
          render={() => renderWithLayout(<Solutions />, MainLayout)}
        />
        <Route
          path="/contact"
          exact
          render={() => renderWithLayout(<Contact />, MainLayout)}
        />
        <Route
          path="/profile"
          exact
          render={() => renderWithLayout(<Profile />, MainLayout)}
        />
        <Route
          path="/screening"
          exact
          render={() => renderWithLayout(<Screening />, MainLayout)}
        />
        <Route
          path="/result"
          exact
          render={() => renderWithLayout(<Result />, MainLayout)}
        />
      />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default App;