import {Col, Radio, Row, Tabs} from 'antd';
import {Card as AntdCart} from 'antd'
import React, { useState } from 'react';
import Monitor from "./monitor";
import Notice from "./notice";
import {Card} from "@ucloud-fe/react-components";

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


const Three_demo1 = () => {
    return (
        <Card.Content >
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
                        <Monitor></Monitor>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="监控监控" key="2">
                        <AntdCart>
                            <Notice dataSource={dataSource} columns={columns}></Notice>
                        </AntdCart>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="告警告警" key="3">
                        Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </Card.Content>
    );
};
export default Three_demo1;