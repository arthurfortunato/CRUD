
import  { Wrapper, Container } from './styles';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';

const Home = () => {
    
    return (
        <Wrapper>
        <Container>
            <Logo />
            <Nav />
            <Main />
            <Footer />
        </Container>
        </Wrapper>
    )

}

export default Home;