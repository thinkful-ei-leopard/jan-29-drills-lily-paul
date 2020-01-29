import React from 'react';
import '../Accordion.css';

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
      <li key={index}>
        <button key={index} onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {this.state.showingContent &&
          this.state.currentSectionIndex === index && (
            <p className="contentText">{currentSection.content}</p>
          )}
      </li>
    ));
  };

  render() {
    return (
      <div>
        <ul>{this.renderSection()}</ul>
      </div>
    );
  }
}

export default Accordion;
