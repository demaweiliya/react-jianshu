import React, { Component, Fragment } from 'react';
import Header from './common/header/index';
import store from './store/index'
import { Provider } from 'react-redux'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedDay: new Date('2017', '3', '12'),
      list:['weiwei','haha','duang'],
      filterItem:"haha"
    }
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay:day,
      filterItem:'weiwei'
      //selectedDay: selected ? undefined : day,
    });
  }

  render() {
    return (
      <Provider store={store}>
      <Fragment>
        <Header/>
        <DayPicker initialMonth={new Date(2017, 3)} selectedDays={this.state.selectedDay} onDayClick={this.handleDayClick}/>
        {
          this.state.list.map((item)=>{
            if(item != this.state.filterItem){
              return <li>{item}</li>
            }
          })
        }
        </Fragment>
      </Provider>
    );
  }
}

export default App;
