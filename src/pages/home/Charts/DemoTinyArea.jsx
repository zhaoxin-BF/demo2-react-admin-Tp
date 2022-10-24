import React, { useState, useEffect } from 'react';
import { TinyArea } from '@ant-design/plots';

// 带缩略功能的堆叠面积图
const DemoTinyArea = () => {
    const data = [
        264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
    ];
    const config = {
        height: 60,
        width: 25,
        autoFit: true,
        data,
        smooth: true,
        areaStyle: {
            fill: '#d6e3fd',
        },
    };
    return <TinyArea {...config} />;
};

export default DemoTinyArea;



