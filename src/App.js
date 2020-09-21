import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Something from './views/Something';


export default class App extends Component {
  constructor() {
    // console.log("Constructed")
    super();

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    // console.log("Mounted")
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          employees: data
         })
      })
  }

  render() {
    // console.log("Rendered")
    return (
      <div>
        <Header />

        <main>
          <div className="container">
            <Switch>
              <Route exact path="/" render={() => <Main employees={this.state.employees} />} />
              <Route exact path="/something" render={() => <Something />} />
            </Switch>
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}