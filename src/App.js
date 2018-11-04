import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 1,
      second: 1,
      third: 1,
      fourth: 1
    };
  }

  upLvl = (player) => {
    switch(player) {
      case 1:
        if(this.state.first < 10)
          this.setState({ first: ++this.state.first});
        break;
      case 2:
        if(this.state.second < 10)
          this.setState({ second: ++this.state.second});
        break;
      case 3:
        if(this.state.third < 10)
          this.setState({ third: ++this.state.third});
        break;
      case 4:
        if(this.state.fourth < 10)
          this.setState({ fourth: ++this.state.fourth});
        break;
      default:
        console.log("upLvl: default");
    }
  }

  downLvl = (player) => {
    switch(player) {
      case 1:
        if(this.state.first > 1)
          this.setState({ first: --this.state.first});
        break;
      case 2:
        if(this.state.second > 1)
          this.setState({ second: --this.state.second});
        break;
      case 3:
        if(this.state.third > 1)
          this.setState({ third: --this.state.third});
        break;
      case 4:
        if(this.state.fourth > 1)
          this.setState({ fourth: --this.state.fourth});
        break;
      default:
        console.log("downLvl: default");
    }
  }

  render() {
    return (
      <div className="App">
        <Table state={ this.state } upLvl={ this.upLvl } downLvl={ this.downLvl } />
        <br />
        <a id="new" href="#" onClick={ () => {
              this.setState({
                first: 1,
                second: 1,
                third: 1,
                fourth: 1
              });
            }
          }>
          New game
        </a>
      </div>
    );
  }
}

export default App;
