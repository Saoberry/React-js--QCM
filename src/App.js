import React from 'react';
import './scss/main.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import QcmForm from './components/QCM_form';
import Score from './components/QCM_score';
import AddQuestion from './components/QCM_add_question';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
    <div className="container">
        <div className="row">
          <div className="col-3">
            <Nav />
          </div>
          <div className="col-9 main_content">
            <Switch>
              <Route path="/add" component={AddQuestion} />
              <Route path="/score" component={Score} />
              <Route path="/" component={QcmForm} />
            </Switch>
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;