import React from 'react';
import { Main } from './styles';

export default function main() {
    return <Main className="container-fluid">
        <div className="p-3 mt-3">
            <p className="display-4">Bem Vindo!</p>
            <hr />
            <p className="mb-0">Crie, leia, atualize ou exclua as informações de um registro. </p>
        </div>
    </Main>
}

