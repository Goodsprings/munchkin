import React, { Component } from 'react';

class Table extends Component {
  rename = (player) => {
    var name = prompt("Set new name:") || "Player" + player;
    if(name.length <= 7) {
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
    } else {
      alert("Max name length is 7, sorry");
    }
  }

  render() {
    return(
      <table>
          <tbody>
            <tr>
              <td rowSpan="2">
                <a href="#" onClick={ () => { this.rename(1) } } className="pencil">&#x270E;</a>
              </td>
              <td rowSpan="2" id="first-name">
                First:
              </td>
              <td rowSpan="2">{ this.props.state.first }</td>
              <td><a href="#" onClick={ () => { this.props.upLvl(1) } }>▲</a></td>
            </tr>
            <tr>
              <td><a href="#" onClick={ () => { this.props.downLvl(1) } }>▼</a></td>
            </tr>
            <tr>
              <td rowSpan="2">
                <a href="#" onClick={ () => { this.rename(2) } } className="pencil">&#x270E;</a>
              </td>
              <td rowSpan="2" id="second-name">Second:</td>
              <td rowSpan="2">{ this.props.state.second }</td>
              <td><a href="#" onClick={ () => { this.props.upLvl(2) } }>▲</a></td>
            </tr>
            <tr>
              <td><a href="#" onClick={ () => { this.props.downLvl(2) } }>▼</a></td>
            </tr>
            <tr>
              <td rowSpan="2">
                <a href="#" onClick={ () => { this.rename(3) } } className="pencil">&#x270E;</a>
              </td>
              <td rowSpan="2" id="third-name">Third:</td>
              <td rowSpan="2">{ this.props.state.third }</td>
              <td><a href="#" onClick={ () => { this.props.upLvl(3) } }>▲</a></td>
            </tr>
            <tr>
              <td><a href="#" onClick={ () => { this.props.downLvl(3) } }>▼</a></td>
            </tr>
            <tr>
              <td rowSpan="2">
                <a href="#" onClick={ () => { this.rename(4) } } className="pencil">&#x270E;</a>
              </td>
              <td rowSpan="2" id="fourth-name">Fourth:</td>
              <td rowSpan="2">{ this.props.state.fourth }</td>
              <td><a href="#" onClick={ () => { this.props.upLvl(4) } }>▲</a></td>
            </tr>
            <tr>
              <td><a href="#" onClick={ () => { this.props.downLvl(4) } }>▼</a></td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default Table;
