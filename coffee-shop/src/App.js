import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Teas from './pages/Teas';
import Nav from './Nav';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
// import './css/index.css';
function App() {
  const timeout = { enter: 800, exit: 600 };
  return (
    <>
      <Router>
        <Nav />
        <Route render={({ location }) => (

          <TransitionGroup component="div">
            <CSSTransition
              key={location.key}
              timeout={timeout}
              classNames='fade'
              mountOnEnter={false}
              mountOnExit={true}
            >
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/about us" component={About} />
                <Route path="/teas" component={Teas} />
                <Route path="/contact" component={Contact} />
                <Route render={() => <div>Not found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        <Footer />
      </Router>

    </>
  );
}

export default App;
