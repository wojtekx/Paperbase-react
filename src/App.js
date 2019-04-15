import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import {LeftSidebar} from './components/LeftSitebar/LeftSidebar.jsx'
import {Main} from './components/Main/Main.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="left hide">
          <LeftSidebar />
        </section>
        <main>
          <header className="header">
            <Header />
          </header>
          <section className="right">
            <Main />
          </section>
        </main>
       
      </div>
    );
  }
}

export default App;
