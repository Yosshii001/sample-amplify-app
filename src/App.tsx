import React from 'react';
import logo from './logo.svg';
import './App.css';

import '@aws-amplify/ui-react/styles.css';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

function App() {

  const signOut = async () => {
    try {
      // console.log("foooo");
      await Auth.signOut();
      console.log("bar");
    } catch (e) {
      console.log(e);
    }
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>
          <a className="App-link" href="."
            onClick={ async () => { signOut(); } }>
            Sign Out
          </a>
        </h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
