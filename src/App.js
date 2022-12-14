import './style-reset.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BodyContainer, Container} from './rules';


import Header from './components/header/header';
import Sbanner from './components/SunBanner/Sbanner';
import CharPage from './pages/chars';
import CharDetails from './pages/charDetails';

function App() {
    return (
        <Router>
            <BodyContainer>
                <Sbanner/>
                <Container>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <CharPage />
                        </Route>
                        <Route exact path='/:id'>
                            <CharDetails/>
                        </Route>
                    </Switch>
                </Container>
            </BodyContainer>
        </Router>
    );
}
export default App;