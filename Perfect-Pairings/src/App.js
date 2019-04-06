import React, { Component } from 'react';
import { Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import history from './history';
import Home from './Pages/Home';
import Pairings from './Pages/Pairings';
import './App.css';

class App extends Component {
  state = {
    items: [],
    currentItem: {},
    isLoaded: false,
    error: null,
  }

  async componentDidMount(){
    const { data } = await axios.get("https://api.otreeba.com/v1/strains")
    console.log(data)
    this.setState({ items: data.data })
  }

  getCurrentItem = (itemIndex, newPath) => {
    this.setState({
      currentItem: this.state.items[itemIndex] },
      () => { history.push(`/pairings/${itemIndex}`)
    })
  }

  changeCurrentItem = index => {
    let i = index
    if (i >= this.state.items.length) i = 1
    this.setState({ currentItem: this.state.items[i] })
    history.push(`/pairings/${i}`)
  }

  render() {
    console.log(history)
    const { items, isLoaded, error, currentItem } = this.state
      return (
        <Router history={history}>

          <div className = "navigation">
          <div id = "home">
              <Link to="/">
                <img src="https://cdn3.iconfinder.com/data/icons/nature-emoji/50/Marijuana-512.png" width="80"/>
              </Link>
              </div>
              <div id = "pairings">
              <Link to="/pairings">Pairing</Link>
              </div>


            <div id = "pairing">
              <Route exact path="/" render={() => <Home history={history} getCurrentItem={this.getCurrentItem} items={items} isLoaded={isLoaded} error={error} />} />
              <Route path="/pairings/:id" render={ props => <Pairings {...props} key={currentItem.name} currentItem={currentItem} changeCurrentItem={this.changeCurrentItem} />} />
            </div>
          </div>
        </Router>

      );
    }
  }

export default App;
