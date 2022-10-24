import React from "react";
import {Button, Card, Table, Tabs} from "antd";
import Monitor from "../../dev_demo/three_demo/monitor";
import Notice from "../../dev_demo/three_demo/notice";


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

const Disk = () => {
    return(
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
                    <Tabs.TabPane tab="硬盘列表" key="1">
                        <Monitor/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="硬盘监控" key="2">
                        <Card>
                            监控
                        </Card>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </Card>
    );
}

export default Disk;