import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-little-router';
import './App.css';

/**
 * Create a 5 character random string
 */
function randomString() {
  function* genChars(len) {
    for (let i = 0; i < len; i++) {
      yield String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
  }

  return [...genChars(5)].join('');
}

class App extends Component {
  state = {
    key: randomString(),
    value: randomString()
  };

  /**
   * Dispatch `push()` with `persistQuery` with our random query string param.
   */
  handleClick = () => {
    const { key, value } = this.state;
    this.props.push(
      {
        pathname: '/',
        query: { [key]: value }
      },
      { persistQuery: true }
    );
    this.setState({
      key: randomString(),
      value: randomString()
    });
  };

  handleOtherClick = () => {
    const input = document.getElementById('path-input');
    const { value } = input;
    this.props.push(
      {
        pathname: value
      },
      { persistQuery: true }
    );
    input.value = '';
  };

  render() {
    return (
      <div style={{ margin: '12px' }}>
        <h4>Router state:</h4>
        <pre>
          {JSON.stringify(this.props.routerState, null, 2)}
        </pre>

        <div>
          <label>
            Click to `push` a random query string parameter:&nbsp;
            <button onClick={this.handleClick}>
              {JSON.stringify(this.state, null, 2)}
            </button>
          </label>
        </div>
        <div>
          <label>
            Click to `push` to the given url:&nbsp;
            <button onClick={this.handleOtherClick}>Do it</button>
          </label>
          <input type="text" width={100} id="path-input" />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ routerState: state.router }),
  dispatch => ({ push: (...args) => dispatch(push(...args)) })
)(App);
