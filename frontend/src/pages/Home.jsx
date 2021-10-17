import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import { Wrapper, Container, MenuLateral, Landing } from './styles';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Header from '../components/template/Header';
/* import Main from '../components/template/Main'; */
import Footer from '../components/template/Footer';

const Home = () => {

    return (
        <BrowserRouter>
            <Wrapper>
                <Container>
                    <MenuLateral>
                        <Logo />
                        <Nav />
                    </MenuLateral>
                    <Landing>
                        <Header />
                        <Routes />
                        <Footer />
                    </Landing>
                </Container>
            </Wrapper>
        </BrowserRouter>
    )
};

export default Home;