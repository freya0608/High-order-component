import React  from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/home';
import Ctgr from './pages/ctgr';
import Car from './pages/car';
import User from './pages/user';


export default ()=>(


    <BrowserRouter>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/ctgr' component={Ctgr}></Route>
            <Route path='/car' component={Car}></Route>
            <Route path='/user' component={User}></Route>
        </Switch>

    </BrowserRouter>
)