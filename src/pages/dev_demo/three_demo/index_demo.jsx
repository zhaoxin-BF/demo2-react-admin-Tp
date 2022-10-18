import {Col, Radio, Row, Tabs, Card} from 'antd';
import React, { useState } from 'react';
import Monitor from "./monitor";

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
                        <Monitor></Monitor>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="监控监控" key="2">
                        <Card>
                            Content of Tab Pane 2
                        </Card>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="告警告警" key="3">
                        Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </Card>
    );
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