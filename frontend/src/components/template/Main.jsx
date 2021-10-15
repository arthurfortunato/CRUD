import React from 'react';
import Header from './Header'
import { Main } from './styles';

const main = () => {
    return (
        <React.Fragment>
        <Header />
        <Main>
            Conteúdo
        </Main>
        </React.Fragment>
    )
}

export default main;