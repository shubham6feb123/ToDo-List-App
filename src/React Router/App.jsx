import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar';
import Service from './Service';
import User from './User';
import Search from './Search';


const App = ()=>{
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/user/:name/:lname' component={User}/>
            <Route path='/search' component={Search}/>
            <Route path='/service' component={Service}/>
            <Route  component={Error}/>
        </Switch>
        </>
    )
}

export default App;