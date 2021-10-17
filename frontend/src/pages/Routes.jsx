import { Switch, Route, Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from '../components/template/Main';
import UserCrud from '../components/user/UserCrud';

export default function props() {
    return (
        <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
        </Switch>
    )

}