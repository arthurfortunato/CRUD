/* eslint-disable import/no-anonymous-default-export */
import { Header } from './styles';
import Logo from './Logo';

export default header  => 
  
        <Header>
            <Logo/>
            <Header className="header">
            <h1 className="mt-3">
            <i className={`fa fa-${header.icon}`}></i> {header.title}
            </h1>
            <p className="lead text-muted">{header.subtitle}</p>
            </Header>
        </Header>
