import React, {Component} from 'react';
import Tabbar from "../components/Tabbar";

class Ctgr extends Component {
    render() {
        return (
            <div>
                <img className="bg" src={require('../static/imgs/ctgr.png')} alt=""/>
                {/*<Tabbar/>*/}

            </div>
        );
    }
}

export default Tabbar(Ctgr);