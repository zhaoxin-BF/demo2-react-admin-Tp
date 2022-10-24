/*demo组件*/

import React from 'react';
import { Line } from '@ant-design/charts';
import { Liquid } from '@ant-design/plots';
import {Col, Row, Card} from 'antd';
import ChartArea from './Charts/ChartArea'
import DemoTinyArea from "./Charts/DemoTinyArea";
import DemoDualAxesMany1 from "./Charts/DemoDualAxes"

// 二、函数组件写法
const HomeChart = () => {
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

    return(
        <Card style={{ background: "#f5f5f5", minWidth: '1200px'}}>
            <div style={{ minWidth: '1200px' }}>
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
                    <Col className="gutter-row" span={12}>
                        <Row gutter={[16,16]}>
                            <Col className="gutter-row" span={24}>
                                <Card>
                                    <DemoTinyArea/>
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={24}>
                                <Card>
                                    <DemoTinyArea/>
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={24}>
                                <Card>
                                    <DemoTinyArea/>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Card>
                            <ChartArea/>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Card>
                            <DemoDualAxesMany1/>
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
                </Row>
                {/*<ChartArea/>*/}
            </div>

        </Card>
    )
}
export default HomeChart;
