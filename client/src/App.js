import React from 'react';
import './App.css';

// react router
import {
  Switch,
  Route,
} from "react-router-dom";

// components
import NavBar from './components/layouts/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

import Statistics from './pages/Statistics';
import Exercise from './pages/Exercise';
import MealHistory from './pages/MealHistory';
import PrivateRoute from './components/util/PrivateRoute';
import SearchNutritionix from './pages/SearchNutritionix';

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { getCurrentUserProfile } from './redux/actions/userActions';

store.dispatch(getCurrentUserProfile());

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <PrivateRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route path="/nix" component={SearchNutritionix} />
          <Route path="/exercise" component={Exercise} />
          <Route path="/history" component={MealHistory} />
          <Route path="/statistics" component={Statistics} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
