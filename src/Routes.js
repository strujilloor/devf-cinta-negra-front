import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import View404 from './views/View404';

const Routes = () => {
    return(
        <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/about">
                <Redirect to="/" />
            </Route>
            <Route path="*" component={View404} />
        </Switch>
        </>
    );
}

export default Routes;