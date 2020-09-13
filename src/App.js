import React from 'react';
import './scss/main.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import { QcmForm } from './components/QCM_form';
import { Score } from './components/QCM_score';
import { AddQuestion } from './components/QCM_add_question';

function App() {
  return (
    <Router>
    <div className="container">
        <div className="row">
          <div className="col-3">
              <ul className="block--nav">
                <li><Link to="/">QCM</Link></li>
                <li><Link to="/add-question">Ajouter une question</Link></li>
              </ul>
          </div>
          <div className="col-9 mainContent">
            <Switch>
              <Route exact path="/" component={QcmForm} />
              <Route exact path="/home" component={QcmForm} />
              <Route exact path="/add-question" component={AddQuestion} />
              <Route exact path="/score" component={Score} />
            </Switch>
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;