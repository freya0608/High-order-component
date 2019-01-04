import React, { Component } from 'react';
import Tabbar from './components/Tabbar';
import RouterMap from './router'
import './static/iconfont.css'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <RouterMap/>
                {/*<div className="iconfont icon-home"></div>*/}

            </div>
        );
    }
}

export default App;
