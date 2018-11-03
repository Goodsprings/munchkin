import React, { Component } from 'react';
import './App.css';

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

  rename = (player) => {
    var name = prompt("New name", "Name");
    switch(player) {
      case 1:
        document.getElementById("first-name").innerHTML = name + ':';
        break;
      case 2:
        document.getElementById("second-name").innerHTML = name + ':';
        break;
      case 3:
        document.getElementById("third-name").innerHTML = name + ':';
        break;
      case 4:
        document.getElementById("fourth-name").innerHTML = name + ':';
        break;
      default:
        console.log("rename: default");
    }
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td rowSpan="2">
                <a href="#" onClick={ () => { this.rename(1) } } className="pencil">&#x270E;</a>
              </td>
              <td rowSpan="2" id="first-name">
                First:
              </td>
              <td rowSpan="2">{ this.state.first }</td>
              <td><a href="#" onClick={ () => { this.upLvl(1) } }>▲</a></td>
            </tr>
            <tr>
              <td><a href="#" onClick={ () => { this.downLvl(1) } }>▼</a></td>
            </tr>
            <tr>
              <td rowSpan="2">
                <a href="#" onClick={ () => { this.rename(2) } } className="pencil">&#x270E;</a>
              </td>
              <td rowSpan="2" id="second-name" style={{paddingRight:15}}>Second:</td>
              <td rowSpan="2">{ this.state.second }</td>
              <td><a href="#" onClick={ () => { this.upLvl(2) } }>▲</a></td>
            </tr>
            <tr>
              <td><a href="#" onClick={ () => { this.downLvl(2) } }>▼</a></td>
            </tr>
            <tr>
              <td rowSpan="2">
                <a href="#" onClick={ () => { this.rename(3) } } className="pencil">&#x270E;</a>
              </td>
              <td rowSpan="2" id="third-name">Third:</td>
              <td rowSpan="2">{ this.state.third }</td>
              <td><a href="#" onClick={ () => { this.upLvl(3) } }>▲</a></td>
            </tr>
            <tr>
              <td><a href="#" onClick={ () => { this.downLvl(3) } }>▼</a></td>
            </tr>
            <tr>
              <td rowSpan="2">
                <a href="#" onClick={ () => { this.rename(4) } } className="pencil">&#x270E;</a>
              </td>
              <td rowSpan="2" id="fourth-name">Fourth:</td>
              <td rowSpan="2">{ this.state.fourth }</td>
              <td><a href="#" onClick={ () => { this.upLvl(4) } }>▲</a></td>
            </tr>
            <tr>
              <td><a href="#" onClick={ () => { this.downLvl(4) } }>▼</a></td>
            </tr>
          </tbody>
        </table>
        <br />
        <a id="new" href="#" onClick={
            () => {
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
