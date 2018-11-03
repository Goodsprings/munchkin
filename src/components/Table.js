import React from 'react';

class Table extends React.Component {
  render() {
    return(
      <table>
          <tbody>
            <tr>
              <td rowSpan="2">
                <a href="#" onClick={ () => { this.props.rename(1) } } className="pencil">&#x270E;</a>
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
                <a href="#" onClick={ () => { this.props.rename(2) } } className="pencil">&#x270E;</a>
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
                <a href="#" onClick={ () => { this.props.rename(3) } } className="pencil">&#x270E;</a>
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
                <a href="#" onClick={ () => { this.props.rename(4) } } className="pencil">&#x270E;</a>
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
