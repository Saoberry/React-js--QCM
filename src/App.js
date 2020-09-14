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
import { BlocLeft, BlocRight, Container } from './styled/styled';

function App() {
  return (
    <Router>
    <Container>
        <div className="row">
          
          <BlocLeft>
            <Nav />
          </BlocLeft>
          <BlocRight>
            <Switch>
              <Route path="/add" component={AddQuestion} />
              <Route path="/score" component={Score} />
              <Route path="/" component={QcmForm} />
            </Switch>
          </BlocRight>
        </div>
    </Container>
    </Router>
  );
}

export default App;