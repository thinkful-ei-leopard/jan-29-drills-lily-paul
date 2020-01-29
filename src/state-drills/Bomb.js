import React from 'react';

class Bomb extends React.Component {

  state = {
    count: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
    <div>
     {this.state.count % 2 === 0 && <p>tick</p>}
     {this.state.count % 2 !== 0 && <p>tock</p>}
     {this.state.count >= 8 && <p>BOOM!!!</p>}
     {this.state.count > 8 && this.componentWillUnmount()}
    </div>
    )
  }
}



export default Bomb;