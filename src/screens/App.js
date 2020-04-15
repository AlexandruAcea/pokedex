import React from 'react';

import { Provider } from 'react-redux'
import { store } from '../redux/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PokemonsPage from './PokemonsPage'
import ViewPokemon from './ViewPokemon'

import history from '../utils/history'

import '../styles/css/app.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>

            <Route path="/view">
              <ViewPokemon />
            </Route>

            <Route path="/">
              <PokemonsPage />
            </Route>

          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
