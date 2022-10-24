import React from 'react'
import {Table, Button} from 'antd'
// import {Button} from "@ucloud-fe/react-components";

const Notice = (props) => {
    return (
        <div>
            <Button  onClick={()=>refresh()}>
                Button
            </Button>
            <Table
                dataSource={props.dataSource}
                columns={props.columns}
            />
        </div>
    );
    function refresh(){
        console.log("hello a")
        props.refresh()
    }
}

export default Notice