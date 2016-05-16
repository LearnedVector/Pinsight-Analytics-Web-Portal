import React ,{ Component } from 'react';
import Charts from 'react-chartist';
import { StyleSheet, css } from 'aphrodite';

export default class BarChart extends Component {

  constructor(props){
    super(props)
  }

  static defaultProps = {
    options: {
      width: 300,
      height: 200,
      axisX: {
        showGrid: false
      }
    },
    type: 'Bar'
  }

  render(){
    const classColor = this.barColor(this.props.colorId);

    const barChartData = {
      labels: this.props.data.Chart.labels,
      series: [this.props.data.Chart.series]
    }
    const options = {
      ...this.props.options,
      ...this.props.chartOption,
      high: this.findUpperBoundNumber(this.props.data.Chart.series),
      low: this.findLowerBoundNumber(this.props.data.Chart.series)
    }
    return(
      <div className={css(styles.barChartContainer)}>
        <div className={css(styles.title)}>
          <h5 className={css(styles.noMargin)}> {this.props.data.title} </h5>
          <h6 className={css(styles.noMargin)}> {this.props.data.total}</h6>
        </div>
        <Charts className={classColor} data={barChartData} options={options} type={this.props.type} />
      </div>
    )
  }

  barColor(colorId){
    let color = "";
    switch(colorId){
      case 1:
      color = "ct-series-a";
      break;
      case 2:
      color = "ct-series-b";
      break;
      case 3:
      color = "ct-series-c";
      break;
      default:
      color = "ct-series-a";
      break;
    }
    return color;
  }

  findUpperBoundNumber(Arr){
    return Math.max(...Arr) * 1.1
  }

  findLowerBoundNumber(Arr){
    return Math.min(...Arr) * 0.9
  }
}

const styles = StyleSheet.create({
  barChartContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  title:{
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  noMargin: {
    margin:0
  }
})
