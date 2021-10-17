import { Logo } from './styles.js';
import logoCrud from '../../assets/imgs/logo.png';

import { Link } from 'react-router-dom';

export default function logo() {
  return (
    <aside className="logo">
      <Link to="/">
        <Logo src={logoCrud} alt="Logo do Projeto" />
      </Link>
    </aside>
  );
};


