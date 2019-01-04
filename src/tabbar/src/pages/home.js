import React, {Component} from 'react';
import Tabbar from '../components/Tabbar'

class Home extends Component {
    render() {
        return (
            <div>

                <img className="bg" src={require('../static/imgs/home.png')} alt=""/>
            </div>
        );
    }
}

export default Tabbar(Home);