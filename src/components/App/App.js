import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles';
import ArtistRoute from '../../ArtistRoute'
import {useDispatch} from 'react-redux';
import {requestAccessToken, receiveAccessToken, receiveAccessTokenError} from '../actions'

const DEFAULT_ARTIST_ID = "4xRYI6VqpkE3UwrDrAZL8L";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token")
      .then((response) => response.json())
      .then((data) => dispatch(receiveAccessToken(data.access_token)))
      .catch((error) => dispatch(receiveAccessTokenError()));
  }, []);
  
  return <Router>
    <GlobalStyles/>
    <Switch>
      <Route exact path='/artists/:id'>
        <ArtistRoute/>
      </Route>
      <Redirect from='/' to={`/artists/${DEFAULT_ARTIST_ID}`}/>
    </Switch>
    </Router>;
};

export default App;
