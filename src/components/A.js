import React, {Component} from 'react';


// function A(WrappedComponent) {
//     return class A extends Component {
//         render() {
//             return (
//                 <div className="a-container">
//                     <div className="header">
//                         <div>提示</div>
//                         <div>X</div>
//                     </div>
//                     <div>
//                         这是内容部分
//                         <WrappedComponent  />
//                     </div>
//                 </div>
//             );
//         }
//     }
// }

export default (title)=>WrappedComponent => class A extends Component {
        render() {
            const {age,...other} = this.props;
            return (
                <div className="a-container">
                    <div className="header">
                        <div>{title}</div>
                        <div>X</div>
                    </div>
                    <div>
                        这是内容部分
                        <WrappedComponent sex={'男'} {...other} />
                    </div>
                </div>
            );
        }
}



//sex={'男'} {...this.props}