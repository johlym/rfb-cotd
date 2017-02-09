import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/app';
import StorePicker from './components/StorePicker';
import NotFound from './components/notfound';


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
