import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GridComponent from '../src/components/grid';
import UserListPage from '../src/pages//user-list';

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/saved-list">My List</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={GridComponent} />
                <Route path="/saved-list" component={UserListPage} />
            </Switch>
        </Router>
    );
};

export default App;
