import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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

const renderWithLayout = (Component, Layout) => <Layout isAuthenticated={localStorage.getItem("jwt")}>{Component}</Layout>;
const App = ({ history }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => renderWithLayout(<Startup isAuthenticated={localStorage.getItem("jwt")} />, MainLayout)}
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
            path="/screening"
            exact
            render={() => renderWithLayout(<Screening />, MainLayout)}
          />
          <PrivateRoute
            path="/result"
            exact
            render={() => renderWithLayout(<Result />, MainLayout)}
          />
        />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
)

const PrivateRoute = (rest) => {
  const isAuthenticated = localStorage.getItem("jwt");
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