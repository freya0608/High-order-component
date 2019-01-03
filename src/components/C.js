import React, {Component} from 'react';
import A from './A'
 class C extends Component {

    getName(){
        return '我是C组件'
    }
    render() {
        return (
            <div>
                <img src={require('../imgs/c.png')}/>
            </div>
        );
    }
}

export default A(C);