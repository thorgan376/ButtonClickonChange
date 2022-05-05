// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div id="app">
      <ButtonChange/>
    </div>
  );
}

export default App;

class ButtonChange extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }

    updateCountByClick(){
      this.setState((prevState, props) => {
        return {count:prevState.count + 1}
      });
    }

    render() {
      return (
        <button className="ButtonCSS" onClick={() => this.updateCountByClick()}>
              Click {this.state.count} times
        </button>
      );
    }
}

// React.render(<ButtonChange/>, document.getElementById('app'));