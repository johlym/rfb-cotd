import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <Header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </Header>
    )
  }
}

export default Header;
