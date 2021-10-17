import Main from '../template/Main';

export default function userHome() {
    return (
        <Main icon="home" title="Início"
            subtitle="Segundo projeto do capítulo de React">
            <div className="display-4">Bem Vindo!</div><hr />
            <p className="mb-0">Crie, leia, atualize ou exclua as informações de um registro.</p>
        </Main>
    )
}
