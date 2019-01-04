import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.css';
const tabbarArr = [
    {
        img:'icon-home',
        text:'首页',
        link:'/home'
    },{
        img:'icon-fenlei',
        text:'分类',
        link: '/ctgr'
    },{
        img:'icon-gouwuche',
        text:'购物车',
        link:'/car'
    },{
        img:'icon-wulumuqishigongandashujuguanlipingtai-ico-',
        text:'我的',
        link:'/user'
    },
];



const Tabbar = (WrappedComponent)=> class Tabbar extends Component {
        constructor(props){
            super(props);
            this.state={
                index:0
            }
        }
        itemChange = (index)=>{
            this.setState({
                index:index,
            })
        };

        render() {
            const url = window.location.href;
            return (
                <div className="tabbar-container">
                    <div className="tabbar-chilren">
                        <WrappedComponent />
                    </div>
                    <div className="tabbar">
                        <div className="tabbar-content">
                            {
                                tabbarArr.map((item,index)=>(
                                    <Link to={item.link} key={index}
                                          className={"tabbar-item " + (url.indexOf(item.link) >-1?'active':'')}
                                        // onClick={()=>this.itemChange(index)}
                                    >
                                        <div className={'iconfont '+ item.img}></div>
                                        <div>{item.text}</div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            );
        }
}



export default Tabbar;