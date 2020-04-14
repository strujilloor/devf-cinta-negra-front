import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Create from './views/Create';
import Update from './views/Update';
import Post from './views/Post';
import View404 from './views/View404';

function Logout(){
    sessionStorage.removeItem('blogToken');
    console.log('Entre al logout');
    return <Redirect to="/"/>
}

const Routes = () => {
    return(
        <>
        <Switch>
            <Route exact path="/"         component={ Home }/>
            <Route exact path="/signup"   component={ Signup }/>
            <Route exact path="/login"    component={ Login }/>
            <Route exact path="/post/:id" component={ Post } />
            <Route exact path="/create"   component={ Create }/>
            <Route exact path="/logout"   component={ Logout }/>
            <Route       path="/about" >
                <Redirect to="/" />
            </Route>
            <Route       path="*"         component={ View404 } />
        </Switch>
        </>
    );
}

export default Routes;