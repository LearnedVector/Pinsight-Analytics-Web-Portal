import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Charts from 'react-chartist';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';

export default class SessionView extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={css(styles.container)}>
        <div className={css(styles.TopChartContainer)}>
          <LineChart data={this.props.data.TotalSession}/>
        </div>
        <div className={css(styles.line)}></div>
        <div className={css(styles.BottomChartContainer)}>
          <BarChart chartOption={this.props.chartOption} colorId={2} data={this.props.data.SessionLength}/>
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
  }
})
