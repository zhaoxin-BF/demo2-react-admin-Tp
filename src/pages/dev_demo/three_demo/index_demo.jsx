import {Col, Radio, Row, Tabs, Card, message} from 'antd';
import React, { useState } from 'react';
import Monitor from "./monitor";
import Notice from "./notice";

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];


const Three_demo = () => {
    return (
        <Card style={{ background: "#f5f5f5", minWidth: '1200px'}}>
            <div>
                <Tabs
                    defaultActiveKey="1"
                    size={"small"}
                    type={"card"}
                    style={{
                        // marginBottom: "42%",
                    }}
                >
                    <Tabs.TabPane tab="概览概览" key="1">
                        <Monitor/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="监控监控" key="2">
                        <Card>
                            <Notice dataSource={dataSource} columns={columns} refresh={refresh}/>
                        </Card>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="告警告警" key="3">
                        Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </Card>
    );
    function refresh() {
        console.log("回调函数刷新成功！")
        message.success("回调刷新函数成功！")
    }
};
export default Three_demo;
//
// {
//     "navTheme": "light",
//     "primaryColor": "#1890ff",
//     "layout": "mix",
//     "contentWidth": "Fluid",
//     "fixedHeader": false,
//     "fixSiderbar": true,
//     "pwa": false,
//     "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
//     "headerHeight": 48,
//     "splitMenus": false
// }