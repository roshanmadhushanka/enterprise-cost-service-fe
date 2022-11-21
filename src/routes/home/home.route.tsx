import { Outlet } from 'react-router-dom';

import {Layout} from "antd";

import Search from '../../components/search/search.component';

const {Sider, Header, Content, Footer} = Layout;

const Home = () => {

    return (
        <>
            <Layout>
                <Sider width={400} style={{ background: '#fff',minHeight: '100vh', color: 'white' }}>
                    <Search/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <Outlet/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Footer</Footer>
                </Layout>
            </Layout>
        </>
    );
};

export default Home;