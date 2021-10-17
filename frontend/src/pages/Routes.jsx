import { Switch, Route, Redirect } from 'react-router';
import UserHome from '../components/user/UserHome';
import UserCrud from '../components/user/UserCrud';

export default function props() {
    return (
        <Switch>
        <Route exact path='/' component={UserHome} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
        </Switch>
    )

}