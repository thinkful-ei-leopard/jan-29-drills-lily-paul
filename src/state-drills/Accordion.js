import React from 'react';

class Accordion extends React.Component {
  static defaultProps = { sections: [{ title: '', content: '' }] };

  state = {
    currentSectionIndex: null,
    showingContent: false
  };

  handleButtonClick = index => {
    this.setState({
      currentSectionIndex: index,
      showingContent: !this.state.showingContent
    });
  };

  renderSection = () => {
    const currentSection = this.props.sections[this.state.currentSectionIndex];
    return this.props.sections.map((section, index) => (
      <ul>
        <li>
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {section.title}
          </button>
          {this.state.showingContent && this.state.currentSectionIndex === index && <p>{currentSection.content}</p>}
        </li>
      </ul>
    ));
  };

  render() {
    return <div>{this.renderSection()}</div>;
  }
}

export default Accordion;
