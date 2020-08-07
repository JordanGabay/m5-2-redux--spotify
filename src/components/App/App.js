import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles';
import ArtistRoute from '../../ArtistRoute'

const DEFAULT_ARTIST_ID = "4xRYI6VqpkE3UwrDrAZL8L";

const App = () => {
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
