import React, {Component} from 'react';
 import A from './A'
// import d from './D'

//  class B extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={require('../imgs/B.png')}/>
//             </div>
//         );
//     }
// }
//
// export default d(B);


// @d
//  class B extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={require('../imgs/B.png')}/>
//             </div>
//         );
//     }
// }
//
// export default B;



class B extends Component {
    render() {
        return (
            <div>
                我的名字叫：{this.props.name}
                <br/>
                我的年龄是：{this.props.age}
                <br/>
                我的性别是：{this.props.sex}
                <br/>
                <img src={require('./imgs/B.png')} alt=""/>

            </div>
        );
    }
}

export default A('提示')(B);