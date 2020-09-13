import React from 'react';
import './scss/main.scss';
import {
  BrowserRouter as Router,
  Route,
  //Link,
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
              <Route path="/" component={QcmForm} />
              <Route path="/score" component={Score} />
              <Route path="/add-question" component={AddQuestion} />
            </Switch>
          </div>
        </div>
    </div>
    </Router>
  );
  // return (
  //   <Router>
  //     <div>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/about">About</Link>
  //           </li>
  //           <li>
  //             <Link to="/users">Users</Link>
  //           </li>
  //         </ul>
  //       </nav>

  //       {/* A <Switch> looks through its children <Route>s and
  //           renders the first one that matches the current URL. */}
  //       <Switch>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/users">
  //           <Users />
  //         </Route>
  //         <Route path="/">
  //           <Home />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;