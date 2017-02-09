import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory/>
      </div>
    )
  }
}

export default App;
