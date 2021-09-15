import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateComponent1 } from './components/State/StateComponent1';
import { LoginContextProvider } from './components/Context/Login/LoginContextProvider';
import { LoginForm } from './components/Context/Login/LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Dashboard } from './components/Context/Dashboard/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StateComponent1 /> */}

    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <LoginContextProvider>
              <Dashboard />
            </LoginContextProvider>
          </Route>
          <Route path="/">
            <LoginContextProvider>
              <LoginForm />
            </LoginContextProvider>
          </Route>
        </Switch>
      </div>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
