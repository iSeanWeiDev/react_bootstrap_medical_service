import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import {history} from './reducers'
import { ThemeProvider } from "@material-ui/styles";
import { store } from './reducers';
import { Provider } from 'react-redux';
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
import Login from './pages/Login';
import Signup from './pages/Signup';
import Continue from './pages/Continue';

const renderWithLayout = (Component, Layout) => <Layout isAuthenticated={localStorage.getItem("access_token")}>{Component}</Layout>;

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => renderWithLayout(<Startup isAuthenticated={localStorage.getItem("access_token")} />, MainLayout)}
          />
          <Route
            path="/login"
            exact
            render={() => renderWithLayout(<Login />, MainLayout)}
          />
          <Route
            path="/signup"
            exact
            render={() => renderWithLayout(<Signup />, MainLayout)}
          />
          <PrivateRoute
            path="/home"
            exact
            render={() => renderWithLayout(<Home />, MainLayout)}
          />
          <PrivateRoute
            path="/about"
            exact
            render={() => renderWithLayout(<About />, MainLayout)}
          />
          <PrivateRoute
            path="/solutions"
            exact
            render={() => renderWithLayout(<Solutions />, MainLayout)}
          />
          <PrivateRoute
            path="/contact"
            exact
            render={() => renderWithLayout(<Contact />, MainLayout)}
          />
          <PrivateRoute
            path="/profile"
            exact
            render={() => renderWithLayout(<Profile />, MainLayout)}
          />
          <PrivateRoute
            path="/screening/:type"
            exact
            render={() => renderWithLayout(<Screening />, MainLayout)}
          />
          <PrivateRoute
            path="/result"
            exact
            render={props => renderWithLayout(<Result {...props} />, MainLayout)}
          />

          <PrivateRoute
            path="/continue"
            exact
            render={() => renderWithLayout(<Continue />, MainLayout)}
          />
        />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
)

const PrivateRoute = (rest) => {
  const isAuthenticated = localStorage.getItem("access_token");
    if(isAuthenticated) {
      return (<Route {...rest} />) 
    } else {
      return (<Redirect to={{
        pathname: '/',
        state: { from: rest.location }
      }} />)
    }
}

export default App;