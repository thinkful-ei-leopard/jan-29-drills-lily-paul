import React from 'react';

class RouletteGun extends React.Component {
  // constructor(props) {
  //   super(props)
  static defaultProps = {bulletInChamber: 8};
  
  
  state = {
    chamber: null,
    spinningTheChamber: false
  }

  handleButtonClick = () => {
    this.setState({
      spinningTheChamber: true
    })
    let timeout = setTimeout(() => {
      Math.ceil(Math.random() * 8)
    }, 4000);
    this.setState({
      chamber: timeout,
      spinningTheChamber: false
    })
  }

  render () {
    return (
    <div>
      <p>{}</p>
      <button onClick={() => this.handleButtonClick()}>Pull the trigger!</button>
    </div>
    )}
}

export default RouletteGun;