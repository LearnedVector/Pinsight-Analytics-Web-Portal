import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Charts from 'react-chartist';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
//this is for dev purposes only. In production we would call graphQL query to load the data
import { eventsTestData } from '../../../server/testdata/usableTestData';

export default class EventsView extends Component {

  constructor(props){
    super(props)
    this.state={
      ...eventsTestData[this.props.params.id]
    }
  }

  componentWillMount(){
  }

  render(){
    console.log(this.state)
    return(
      <div className={css(styles.container)}>
        <div className={css(styles.eventNameContainer)}><span className={css(styles.eventName)}>{this.state.eventName} </span></div>
        <div className={css(styles.TopChartContainer)}>
          <LineChart data={this.state.eventsPerDay}/>
        </div>
        <div className={css(styles.line)}></div>
        <div className={css(styles.BottomChartContainer)}>
          <BarChart chartOption={this.props.chartOption} colorId={2} chartOption={{width: 900}} data={this.state.eventsPerSession}/>
        </div>
      </div>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // border: '2px solid red'
  },
  TopChartContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    minHeight:400
  },
  BottomChartContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop:50,
    border: '1 solid',
    minHeight: 300
  },
  line: {
    height: 1,
    backgroundColor: '#D8D8D8',
    minWidth: 900
  },
  eventNameContainer: {
    width: '100%'
  },
  eventName: {
    fontWeight: 600,
    fontSize: 20,
    float: 'right',
    marginRight: 40,
    marginTop: 10
  }
})
