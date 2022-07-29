import React, { useEffect, useState } from 'react'
import { Layout } from 'antd';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const {Sider}  = Layout;

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/navbar')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setItems(data);
        });
    }, []);

    const props = {
        beforeUpload: (file) => {
        const isEXCEL = file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    
        if (!isEXCEL) {
            message.error(`${file.name} is not a Excel file`);
        }
    
        return isEXCEL || Upload.LIST_IGNORE;
        },
        onChange: (info) => {
        console.log(info.fileList);
        },
    };

    return (
        <Sider className='nav'>
        <ul className='nav_box'>
            {items.map(item => (
                <li className='nav_item' key={item.id}>
                    <Link to ={`/contents/${item.id}`} > {item.label} </Link>
                </li>
            ))}
        </ul>
        <Upload {...props}>
            <Button className='upload_button' icon={<UploadOutlined />} size={'large'}>Upload excel only</Button>
        </Upload>
        </Sider>
    )
}
