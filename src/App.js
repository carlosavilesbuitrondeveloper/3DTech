//router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//styles
import {ThemeProvider} from 'styled-components';
import Theme from './styles/theme';

//components
import Layout from './containers/Layout.js';

//views
import Home from './views/Home';
import Game from './views/Game';

function App() {
  return (
    <>
     <ThemeProvider theme={Theme}>
       <Layout>
          <Router>
            <Switch>
              <Route path="/" exact><Home /></Route>
              <Route path="/setup">Setup</Route>
              <Route path="/game"><Game /></Route>
              <Route path="/learn">Learn More</Route>
            </Switch>
          </Router>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
