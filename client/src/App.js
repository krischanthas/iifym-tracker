import React from 'react';
import './App.css';

// react router
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

// components
import NavBar from './components/layouts/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

import Goals from './pages/Goals';
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
  const location = useLocation();
  return (
    <div className="App">
      <Provider store={store}>
        {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" ? <NavBar /> : ''}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/nix" component={SearchNutritionix} />
          <Route path="/exercise" component={Exercise} />
          <Route path="/history" component={MealHistory} />
          <Route path="/goals" component={Goals} />
        </Switch>

      </Provider>
    </div>
  );
}

export default App;
