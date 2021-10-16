import { Nav } from './styles';

export default function nav() {
    return <Nav >
        <a href="#/">
            <i className="fa fa-home"></i> Início
        </a>
        <a href="#/users">
            <i className="fa fa-users"></i> Usuários
        </a>
    </Nav>
}


