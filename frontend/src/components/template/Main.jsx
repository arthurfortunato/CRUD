import { Main } from './styles';

export default function main(props) {
    return (
        <Main className="container-fluid">
            <div className="main p-3 mt-3">
                {props.children}
            </div>
        </Main>
    );
};



