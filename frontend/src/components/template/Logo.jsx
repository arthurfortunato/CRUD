import { Logo } from './styles.js';
import logoCrud from '../../assets/imgs/logo.svg';

const logo = () => {
    return (
        <Logo src={logoCrud} alt="Logo do projeto" />
    )
}

export default logo;