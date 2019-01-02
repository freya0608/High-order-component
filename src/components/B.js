import React, {Component} from 'react';
import A from './A'

 class B extends Component {
    render() {
        return (
            <div>
                <img src={require('../imgs/B.png')}/>
            </div>
        );
    }
}

export default A(B);