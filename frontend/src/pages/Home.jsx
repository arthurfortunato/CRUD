import { Wrapper, Container, MenuLateral, Landing } from './styles';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav';
import Header from '../components/template/Header';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';

const Home = () => {
    
    return (
        <Wrapper>
            <Container>
                <MenuLateral>
                    <Logo />
                    <Nav />
                </MenuLateral>
                <Landing>
                    <Header icon="home"
                            title="Início"
                            subtitle="adsfsfsdfafwfqdsfsfjasif"/>
                    <Main />
                    <Footer />
                </Landing>
            </Container>
        </Wrapper>
    )

}

export default Home;