import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axiosconf from '../axios';

import Template from '../components/Template';
import Login from '../containers/Login';
import Movie from '../containers/Movie';
import FavoritesMovies from '../containers/FavoritesMovies';

import MovieDetail from '../containers/MovieDetail';

import useToken from '../hooks/useToken';

const App = () => {
  axiosconf();
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Login setToken={setToken} />} />
        </Switch>
      </BrowserRouter>
    );
  }

  if (token) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/movies" />} />
          <Template>
            <Route exact path="/movies" component={Movie} />
            <Route exact path="/movies-favorites" component={FavoritesMovies} />
            <Route exact path="/movies/:id" component={MovieDetail} />
            <Route exact path="/movies/:id/:type" component={MovieDetail} />
          </Template>
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
