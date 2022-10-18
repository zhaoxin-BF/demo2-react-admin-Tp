// 左侧导航栏组件

import React, {Component} from "react";
import {Link, withRouter} from 'react-router-dom'
import {Button, Input, Menu, message, Modal, Spin} from "antd"
import {GithubFilled, HomeOutlined, UserOutlined} from '@ant-design/icons';
import './index.css'

import menuList from "../../config/menuConfig"
import memoryUtils from "../../utils/memoryUtils"
import storageUtils from "../../utils/storageUtils"


//变量
const {Search} = Input



class Header extends Component {
    //退出登陆
    logout = () =>{
        //显示确认框
        Modal.confirm({
            title:'确认退出吗？',
            onOk: () => {
                //删除保存的user数据
                storageUtils.removeUser()
                memoryUtils.user = {}
                //跳转Login
                this.props.history.replace('/login')
            }
        })
    }

    //获取标题
    getTitle = () =>{
        //得到当前请求
        const path = this.props.location.pathname
        let title
        menuList.forEach(item =>{
            if (item.key === path){ //如果当前的key与path一样，返回该key 的title
                title = item.title
            }else if (item.children){
                //在所有子item中查找匹配的
                const cItem = item.children.find(cItem => cItem.key === path)
                //如果有值
                if (cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    }

    render() {
        const username = memoryUtils.user.UserName
        const title = this.getTitle()
        return (
            <Menu theme="dark">
                <div className="header">
                    <div className="header-top">
                        <a onClick={this.logout}>
                            <GithubFilled style={{ fontSize: '20px'}}/>
                            <span>{username}  </span>
                            {/*<a href="javascript:" onClick={this.logout}>退出</a>*/}
                        </a>
                    </div>

                    <div className="header-bottom">
                        <div className="header-bottom-left" >
                            <HomeOutlined style={{ fontSize: '20px', }}/>
                            <span>
                            {title}
                        </span>
                        </div>
                        <div className="header-bottom-right">

                            <Search style={{ width: '40vh' }} bordered={true} placeholder="input search text" enterButton="Search" size="middle" loading={false}/>
                            {/*<Button> 资源查询 </Button>*/}
                        </div>
                    </div>
                </div>
            </Menu>
        )
    }
}

//高级函数，返回组件，为了获取/history/location/match
export default withRouter(Header)