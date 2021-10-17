import { Nav } from './styles';

import { Link } from 'react-router-dom';

export default function nav() {
    return <Nav >
        <Link to="/">
            <i className="fa fa-home"></i> Início
        </Link>
        <Link to="/users">
            <i className="fa fa-users"></i> Usuários
        </Link>
    </Nav>
}


