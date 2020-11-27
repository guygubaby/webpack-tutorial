import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return <div>this is react in webpack</div>;
};

ReactDom.render(<App />, document.getElementById('app'));
