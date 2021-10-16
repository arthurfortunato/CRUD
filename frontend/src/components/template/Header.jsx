/* eslint-disable import/no-anonymous-default-export */
import { Header } from './styles';

export default header  => 
  
        <Header>
            <Header className="header">
            <h1 className="mt-3">
            <i className={`fa fa-${header.icon}`}></i> {header.title}
            </h1>
            <p className="lead text-muted">{header.subtitle}</p>
            </Header>
        </Header>
