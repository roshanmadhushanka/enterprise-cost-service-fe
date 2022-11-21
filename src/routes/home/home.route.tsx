import { Outlet } from 'react-router-dom';

import {Layout} from "antd";

import {Site}  from '../../store/site/site.type';
import Search from '../../components/search/search.component';

const {Sider, Header, Content, Footer} = Layout;

const Home = () => {
    const a: Site = {
        'id': 1,
        'code': '001',
        'name': 'Default'
    }

    const arr = [a];

    return (
        <>
            <Layout>
                <Sider width={400} style={{ background: '#fff',minHeight: '100vh', color: 'white' }}>
                    <Search sites={arr}/>
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