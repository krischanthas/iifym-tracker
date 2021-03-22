import React from 'react';
import './App.css';

// react router
import {
  Switch,
  Route,
} from "react-router-dom";

// components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import PrivateRoute from './components/util/PrivateRoute';

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { getCurrentUserProfile } from './redux/actions/userActions';

store.dispatch(getCurrentUserProfile());

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <PrivateRoute exact path="/login" component={Login} /> */}
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
