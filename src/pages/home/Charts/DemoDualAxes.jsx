import React, { useState, useEffect } from 'react';
import { DualAxes, Line } from '@ant-design/plots';

// 多折线图
const DemoDualAxesMany1 = () => {
    const uvBillData = [
        {
            time: '2019-03',
            value: 350,
            type: 'uv',
        },
        {
            time: '2019-04',
            value: 900,
            type: 'uv',
        },
        {
            time: '2019-05',
            value: 300,
            type: 'uv',
        },
        {
            time: '2019-06',
            value: 450,
            type: 'uv',
        },
        {
            time: '2019-07',
            value: 470,
            type: 'uv',
        },
        {
            time: '2019-03',
            value: 220,
            type: 'bill',
        },
        {
            time: '2019-04',
            value: 300,
            type: 'bill',
        },
        {
            time: '2019-05',
            value: 250,
            type: 'bill',
        },
        {
            time: '2019-06',
            value: 220,
            type: 'bill',
        },
        {
            time: '2019-07',
            value: 362,
            type: 'bill',
        },
    ];
    const transformData = [
        {
            time: '2019-03',
            count: 800,
            name: 'a',
        },
        {
            time: '2019-04',
            count: 600,
            name: 'a',
        },
        {
            time: '2019-05',
            count: 400,
            name: 'a',
        },
        {
            time: '2019-06',
            count: 380,
            name: 'a',
        },
        {
            time: '2019-07',
            count: 220,
            name: 'a',
        },
        {
            time: '2019-03',
            count: 750,
            name: 'b',
        },
        {
            time: '2019-04',
            count: 650,
            name: 'b',
        },
        {
            time: '2019-05',
            count: 450,
            name: 'b',
        },
        {
            time: '2019-06',
            count: 400,
            name: 'b',
        },
        {
            time: '2019-07',
            count: 320,
            name: 'b',
        },
        {
            time: '2019-03',
            count: 900,
            name: 'c',
        },
        {
            time: '2019-04',
            count: 600,
            name: 'c',
        },
        {
            time: '2019-05',
            count: 450,
            name: 'c',
        },
        {
            time: '2019-06',
            count: 300,
            name: 'c',
        },
        {
            time: '2019-07',
            count: 200,
            name: 'c',
        },
    ];
    const config = {
        data: [uvBillData, transformData],
        xField: 'time',
        yField: ['value', 'count'],
        geometryOptions: [
            {
                geometry: 'line',
                seriesField: 'type',
                lineStyle: {
                    lineWidth: 3,
                    lineDash: [5, 5],
                },
                smooth: true,
            },
            {
                geometry: 'line',
                seriesField: 'name',
                point: {},
            },
        ],
    };
    return <DualAxes {...config} />;
};

export default DemoDualAxesMany1;

// // 线图一
// const DemoLineOne = () => {
//     const [data, setData] = useState([]);
//
//     useEffect(() => {
//         asyncFetch();
//     }, []);
//
//     const asyncFetch = () => {
//         fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             .catch((error) => {
//                 console.log('fetch data failed', error);
//             });
//     };
//     const config = {
//         data,
//         xField: 'year',
//         yField: 'value',
//         seriesField: 'category',
//         xAxis: {
//             type: 'time',
//         },
//         yAxis: {
//             label: {
//                 // 数值格式化为千分位
//                 formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
//             },
//         },
//     };
//
//     return <Line {...config} />;
// };
//
// // 线图二
//
// const DemoLineTwo = () => {
//     const [data, setData] = useState([]);
//
//     useEffect(() => {
//         asyncFetch();
//     }, []);
//
//     const asyncFetch = () => {
//         fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             .catch((error) => {
//                 console.log('fetch data failed', error);
//             });
//     };
//     const config = {
//         data,
//         xField: 'year',
//         yField: 'gdp',
//         seriesField: 'name',
//         yAxis: {
//             label: {
//                 formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
//             },
//         },
//         legend: {
//             position: 'top',
//         },
//         smooth: true,
//         // @TODO 后续会换一种动画方式
//         animation: {
//             appear: {
//                 animation: 'path-in',
//                 duration: 5000,
//             },
//         },
//     };
//
//     return <Line {...config} />;
// };
//
//
// // 双折线图
// const DemoDualAxesTwo = () => {
//     const data = [
//         {
//             year: '1991',
//             value: 3,
//             count: 10,
//         },
//         {
//             year: '1992',
//             value: 4,
//             count: 4,
//         },
//         {
//             year: '1993',
//             value: 3.5,
//             count: 5,
//         },
//         {
//             year: '1994',
//             value: 5,
//             count: 5,
//         },
//         {
//             year: '1995',
//             value: 4.9,
//             count: 4.9,
//         },
//         {
//             year: '1996',
//             value: 6,
//             count: 35,
//         },
//         {
//             year: '1997',
//             value: 7,
//             count: 7,
//         },
//         {
//             year: '1998',
//             value: 9,
//             count: 1,
//         },
//         {
//             year: '1999',
//             value: 13,
//             count: 20,
//         },
//     ];
//     const config = {
//         data: [data, data],
//         xField: 'year',
//         yField: ['value', 'count'],
//         geometryOptions: [
//             {
//                 geometry: 'line',
//                 smooth: false,
//                 color: '#5B8FF9',
//                 label: {
//                     formatter: (datum) => {
//                         return `${datum.value}个`;
//                     },
//                 },
//                 lineStyle: {
//                     lineWidth: 3,
//                     lineDash: [5, 5],
//                 },
//             },
//             {
//                 geometry: 'line',
//                 smooth: true,
//                 color: '#5AD8A6',
//                 lineStyle: {
//                     lineWidth: 4,
//                     opacity: 0.5,
//                 },
//                 label: {
//                     formatter: (datum) => {
//                         return `${datum.count}个`;
//                     },
//                 },
//                 point: {
//                     shape: 'circle',
//                     size: 4,
//                     style: {
//                         opacity: 0.5,
//                         stroke: '#5AD8A6',
//                         fill: '#fff',
//                     },
//                 },
//             },
//         ],
//     };
//     return <DualAxes {...config} />;
// };
//
// // export default DemoLineOne;
// // export default DemoLineTwo;
// // export default DemoDualAxesTwo;



