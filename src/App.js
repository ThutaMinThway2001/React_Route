import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
 
const users = [
  { id: 1, name: 'Alice', gender: 'f' },
  { id: 2, name: 'Bob', gender: 'm' },
  { id: 3, name: 'Tom', gender: 'm' },
  { id: 4, name: 'Mary', gender: 'f' },
];

const MaleComponent = (props) => {
  return(
    <ul>
      {users.filter((user) => user.gender === 'm').map((user) =><li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

const FemaleComponent = (props) => {
  return(
    <ul>
      {users.filter((user) => user.gender === 'f').map((user) =><li key={user.id}>{user.name}</li>)}
    </ul>
  )
}
 
const User = (props) => {
  const {name} = useParams();

  return(
    <h3>User name is {name}.</h3>
  )
}

const App = props => {
  return(
    <Router>
      <ul>
        <li><Link to="/male">Male</Link></li>
        <li><Link to="/female">Female</Link></li>
        <li><Link to="/user/thuta">Thuta</Link></li>
      </ul>
      <Switch>
        <div style={{background: 'cyan', padding: 20}}>
          <Route path="/male">
            <MaleComponent></MaleComponent>
          </Route>
          <Route path="/female">
            <FemaleComponent></FemaleComponent>
          </Route>
          <Route path="/user/:name">
            <User></User>
          </Route>
        </div>
      </Switch>
    </Router>

  )
}

export default App;