import React, { Component } from 'react';
import logo from './logo.svg';
import Tabbar from './components/tabbar/index';
import './static/iconfont.css'
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Tabbar/>
                {/*<div className="iconfont icon-home"></div>*/}

            </div>
        );
    }
}

export default App;
