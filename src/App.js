
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter

} from 'react-router-dom';
import './App.css';
import Home from './containers/Home'
import ResetPassword from './containers/ResetPassword';
import DownloadGochat from './containers/DownloadGochat';
import Installedapp from './containers/Installedapp';
import Groupchat from './containers/Groupchat'
import Term from './containers/Term';
import Termth from './containers/Termth';
import Termch from './containers/Termch'
import Webhhok from './containers/webhook'
import PolicyEN from './containers/policyEN'
import PolicyTH from './containers/policyTH'
import QrAuth from './containers/qrCode'
function App() {

  // const reload = () => window.location.reload();

  return (
    // <HashRouter>
    <Router>
      <Switch>

        <Route exact path="/contact/add" component={Home} />
        <Route exact path="/recover" component={ResetPassword} />
        <Route exact path="/welcome-goochat" component={DownloadGochat} />
        <Route exact path="/change" component={Installedapp} />
        <Route exact path="/auth_verify" component={QrAuth} />
        <Route exact path="/group_invite" component={Groupchat} />
        <Route exact path="/term/en" component={Term} />
        <Route exact path="/term/th" component={Termth} />
        <Route exact path="/term/ch" component={Termch} />
        <Route exact path="/webhook" component={Webhhok} />
        <Route exact path="/policy/en" component={PolicyEN} />
        <Route exact path="/policy/th" component={PolicyTH} />
        {/* <Route exact path="/policy/en" component={PolicyEN} />
        <Route exact path="/policy/th" component={PolicyTH} />
        <Route exact path="/policy/cn" component={PolicyCN} /> */}

        {/* <Route path="/.well-known/apple-app-site-association" onEnter={reload} /> */}
        {/* <Route path="/test"  component={Iosdeeplink}/> */}
        <Route
          exact
          path="*"
          render={() => {
            return (
              <Redirect to="/change" />

            )
          }}
        />
      </Switch>
    </Router>
    // </HashRouter>
  );
}

export default App;
