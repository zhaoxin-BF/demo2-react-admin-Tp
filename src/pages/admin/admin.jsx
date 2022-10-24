/*
管理组件
 */

//导入的包
import React,{Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom"                 //转发页面
import {Layout, Card} from 'antd';                            //页面布局
import memoryUtils from '../../utils/memoryUtils'         //内存数据
import Header from '../../components/header'
import LeftNav from '../../components/leftnav'
import './admin.css'

import Home from '../home'
import Upload from '../upload/upload'
import Check from '../check/check'
import User from '../user/user'
import {Demo1} from '../dev_demo/demo1/demo1'
import Demo2 from '../dev_demo/demo2/demo2'
import Three_demo1 from "../dev_demo/three_demo/index_demo1";
import Three_demo from "../dev_demo/three_demo/index_demo";
import Host from "../host_manage/host_manage/host";
import Disk from "../host_manage/disk_manage/disk";
import HomeChart from "../home/homeChart";


//全局变量
const { Footer, Sider, Content } = Layout;       //页面布局

export default class Admin extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const user = memoryUtils.user
        //从内存中读取，果内存中没有user 的信息
        if(!user || !user.UserId){
            // eslint-disable-next-line react/jsx-no-undef
            return <Redirect to='/login' />
        }
        return (
            <div>
                <Layout className='admin'>
                    <Sider
                        style={{overflow: 'auto',}}
                        collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
                    >
                        <LeftNav />
                    </Sider>
                    <Layout >
                        <Header />
                        <Content style={{overflow: 'auto',background: "#f5f5f5", minWidth: '1200px'}}>
                            {/*margin: 15*/}
                            {/*<div style={{ background: "#f5f5f5" }}>*/}
                                <Switch>
                                    <Route path='/home' component={HomeChart} />
                                    <Route path='/upload' component={Upload} />
                                    <Route path='/check' component={Check} />
                                    <Route path='/user' component={User} />

                                    <Route path='/monitor/monitor' component={Demo1} />
                                    <Route path='/monitor/alarm' component={Demo1} />
                                    <Route path='/monitor/user' component={Demo1} />

                                    <Route path='/setting/auth' component={Demo2} />
                                    <Route path='/setting/system' component={Demo2} />

                                    <Route path='/three/business' component={Three_demo} />
                                    <Route path='/three/userStock' component={Three_demo} />
                                    <Route path='/three/monitor' component={Three_demo1} />

                                    <Route path='/host/server' component={Host} />
                                    <Route path='/host/disk' component={Disk} />

                                    <Redirect to='/home'/>
                                </Switch>
                            {/*</div>*/}
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            UGFS ©2022 Created by UDISK SRE
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}