import React from 'react'; 

class HelloWorld extends React.Component {

  state = {
    who: "World"
  }

  handleFriendClick = () => {
    this.setState({
      who: "Friend"
    })
  }

  handleWorldClick  = () => {
    this.setState({
      who: "World"
    })
  }

  handleReactClick  = () => {
    this.setState({
      who: "React"
    })
  }

  render () {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={() => this.handleWorldClick()}>World</button>
        <button onClick={() => this.handleFriendClick()}>Friend</button>
        <button onClick={() => this.handleReactClick()}>React</button>
      </div>
    )
  }
}

export default HelloWorld;