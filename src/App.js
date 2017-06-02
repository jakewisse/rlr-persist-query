import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    devs: [
      'Jake', 'Adam', 'JJ'
    ]
  };

  render() {
    return (<div>
      <h3>Here's a list of developers</h3>
      <List items={this.state.devs} />
      <textarea 
        rows={10} 
        cols={80} 
        value={this.state.devs.join('\n')} 
        onChange={(e) => {
          const { value } = e.target;
          this.setState({ devs: value.split('\n') });
        }}
      />
    </div>);
  }
}

const Item = props => <div>Item: {props.text}</div>;

const List = props => (<div>
  {props.items.map(i => <Item text={i} key={i} />)}
</div>);

export default App;
