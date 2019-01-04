import React, {Component} from 'react';
import './index.css';
const tabbarArr = [
    {
        img:'icon-home',
        text:'首页'
    },{
        img:'icon-fenlei',
        text:'分类'
    },{
        img:'icon-gouwuche',
        text:'购物车'
    },{
        img:'icon-wulumuqishigongandashujuguanlipingtai-ico-',
        text:'我的'
    },
];


class Tabbar extends Component {
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
        return (
            <div className="tabbar">
                <div className="tabbar-content">
                    {
                        tabbarArr.map((item,index)=>(
                            <div key={index}
                                 className={"tabbar-item " + ((this.state.index === index) ?'active':'')}
                                 onClick={()=>this.itemChange(index)}>
                            <div className={'iconfont '+ item.img}></div>
                            <div>{item.text}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Tabbar;