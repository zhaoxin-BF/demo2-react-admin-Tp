import {Col, Radio, Row, Tabs} from 'antd';
import {Card as AntdCart} from 'antd'
import React, { useState } from 'react';
import Monitor from "./monitor";
import {Card} from "@ucloud-fe/react-components";

const Three_demo1 = () => {
    return (
        <Card.Content style={{margin: 15}}>
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
                            Content of Tab Pane 2
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