import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './HOC/Layout/Layout';
import SignIn from './Containers/Auth/SignIn/SignIn';
import SignUp from './Containers/Auth/SignUp/SignUp';
import Home from './Containers/Home/Home';

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Layout>

          <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/" exact component={Home}/>
          </Switch>
          
          
        </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
