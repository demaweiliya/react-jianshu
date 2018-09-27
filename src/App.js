import React, { Component, Fragment } from 'react';
import Header from './common/header/index';
import store from './store/index'
import { Provider } from 'react-redux'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <Fragment>
        <Header/>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
