import React, { useEffect, useState } from 'react'
import Navbar from './navbar';
import { Layout } from 'antd';
import { useParams } from 'react-router';

export default function Contents() {

    const {Sider, Content} = Layout;

    const { board_id } = useParams();
    const [ board, setBoard] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/contents?board_id=${board_id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBoard(data);
        });
    }, [board_id]);

    return (
        <>
        <Sider className='nav'>
            <Navbar />
        </Sider>
        <Content className='main'>
            <table className='main_table'>
                <tbody>
                <tr className='subject'>
                    <td>TITLE</td>
                    <td>DESCRIPTION</td>
                    <td>DATE</td>
                </tr>
                {board.map(data => (
                <tr key={data.id}>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>{data.date}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </Content>
        </>
    )
}
