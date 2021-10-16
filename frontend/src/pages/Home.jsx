import { Wrapper, Container } from './styles';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/template/Header';
import Nav from '../components/template/Nav';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';

const Home = () => {
    
    return (
        <Wrapper>
            <Container>
                <Header icon="home" title="Início" subtitle="adsfsfsdfafwfqdsfsfjasif"/>
                <Nav />
                <Main />
                <Footer />
            </Container>
        </Wrapper>
    )

}

export default Home;