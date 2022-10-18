/*demo组件*/

import React from 'react';
import { Line } from '@ant-design/charts';
import { Liquid } from '@ant-design/plots';
import {Col, Row} from 'antd';
import {Card} from "@ucloud-fe/react-components";

// 一、组件类的写法
export default class Monitor extends React.Component {
    state = {
        count: 0,
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [{
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
    }

    render() {
        const data = [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 },
        ];
        const config = {
            data,
            height: 400,
            xField: 'year',
            yField: 'value',
            point: {
                size: 5,
                shape: 'diamond',
            },
        };
        const configLiquid = {
            percent: 0.99,
            shape: 'rect',
            outline: {
                border: 2,
                distance: 4,
            },
            wave: {
                length: 128,
            },
        };
        return (
                <div style={{ minWidth: '1200px' }}>
                {/*<p>功能研发中，敬请期待～ {this.state.count} times</p>*/}
                {/*<button onClick={() => this.setState({ count: this.state.count + 1 })}>*/}
                {/*    Click me*/}
                {/*</button>*/}
                {/*ant-design/charts图表～*/}
                <Row gutter={[16,16]}>
                    <Col className="gutter-row" span={6}>
                        <Card style={{ bordered:true }}>
                            <Liquid {...configLiquid} />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card>
                            <Liquid {...configLiquid} />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card>
                            <Liquid {...configLiquid} />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card>
                            <Liquid {...configLiquid} />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        <Card>
                            <Line {...config}></Line>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card>
                            <Liquid {...configLiquid} />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card>
                            <Liquid {...configLiquid} />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        <Card>
                            <Line {...config}></Line>
                        </Card>
                    </Col>
                </Row>
                {/*<Line {...config}></Line>*/}
                {/*<Liquid {...configLiquid} />*/}
            </div>
        );
    }
}
