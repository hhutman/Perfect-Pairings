import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import './Titlepage'


class Home extends Component {
  handleChange(e){
    const { getCurrentItem, history } = this.props;
    getCurrentItem(JSON.parse(e.target.value), "/pairings" )
  }

  render() {
    const { error, isLoaded, items } = this.props;

      return (
        <div className = "homepage">
          <div className = "title">
            <p>Perfect Pairings.</p>
            <p> Feed Your Senses.</p>
          </div>
          <div id = "dropdown">
            <select defaultValue={JSON.stringify(items[0])} onChange={e => this.handleChange(e)}>
              {
                items.map((item, index) =>(
                  <option name={JSON.stringify(item)} key={item.name} value={index}>
                  {item.name}
                  </option>
                ))
              }
            </select>
          </div>
        </div>

      );
    // }

  }
}

export default Home;
