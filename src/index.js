import React , {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './Routes';
import Layout from './container/Layout/Layout'

const App = () => {
  return(
    <Layout>
      <Router>
        <Switch>
          {routes.map(({path, name ,exact, component}) => 
            <Route path={path} component={component} exact={exact} key={name}/>)}
        </Switch>
      </Router>
    </Layout>
)}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading... </div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
