import { Header } from './styles';

export default function header() {
    return (
        <Header>
            <Header className="header">
                <h1 className="mt-3">
                    <i className={`fa fa-home`}>Início</i>
                </h1>
                <p className="lead text-muted">Sistema CRUD</p>
            </Header>
        </Header>
    );
};

