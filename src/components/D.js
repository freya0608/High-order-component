// import React, {Component} from 'react';
//
// function d(WrappedComponent) {
//     return class D extends Component {
//         render() {
//             return (
//                 <div>
//                     <WrappedComponent />
//
//                 </div>
//             );
//         }
//     }
// }
// export default d;



const modifyPropsHOC = (WrappedComponent) => class NewComponent extends WrappedComponent {


    displayName = `NewComponent(${getDisplayName(WrappedComponent)})`;


    componentWillMount(){
        console.log('我是修改后的生命周期')
    }


    //优先考虑组合，然后考虑继承
    //代理方式优于继承方式
    render(){
        const element = super.render();
        const newStyle = {
            color:element.type === 'div' ?'red':'green'
        };
        const newProps = {...this.props,style:newStyle};
        return React.cloneElement(element,newProps,element.props.children)
    }
};

function  getDisplayName(WrappedComponent){
    WrappedComponent.displayName || WrappedComponent.name || 'component'


}

export  default modifyPropsHOC