import React from 'react';
import { Layout } from 'antd';
import Navbar from './navbar';
import Contents from './contents';
import Header from './header';

export default function Home(){

    const { Sider, Content } = Layout;

    return (
        <>
            <Layout className='app'>
                <Header />
                <Layout>
                    <Sider className='nav'>
                        <Navbar />
                    </Sider>
                    <Content>
                        <Contents />
                    </Content>
                </Layout>            
            </Layout>

        </>
    );
};