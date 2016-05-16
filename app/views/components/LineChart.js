import React ,{ Component } from 'react';
import Charts from 'react-chartist';
import Chartist from 'chartist';

export default class MainLineChart extends Component {

  constructor(props){
    super(props)
  }

  static defaultProps = {
    options: {
      high: 1000,
      low: 0,
      showArea: true,
      width: 900,
      height: 300,
      showPoint: true,
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 50,
      }),
      axisX: {
        showGrid: false
      }
    },
    type: 'Line'
  }
  componentWillMount(){
  }

  render(){
    const lineChartData = {
      labels: this.props.data.Chart.labels,
      series: [this.props.data.Chart.series]
    }
    this.props.options.high = this.findUpperBoundNumber(this.props.data.Chart.series)
    this.props.options.low = this.findLowerBoundNumber(this.props.data.Chart.series)
    var seq = 0,
    delays = 10,
    durations = 100;
    return(
      <div>
        <div>
          <h5> {this.props.data.title} </h5>
        </div>
        <Charts className='ct-series-a' data={lineChartData} options={this.props.options} type={this.props.type}
          listener={{"draw" : function(data) {
            if(data.type === 'line') {
              data.element.animate({
                d: {
                  begin: 2000 * data.index,
                  dur: 500,
                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                  to: data.path.clone().stringify(),
                  easing: Chartist.Svg.Easing.easeOutQuint
                }
              });
            } } }}
            />
        </div>
      )
    }

    findUpperBoundNumber(Arr){
      return Math.max(...Arr) * 1.1
    }

    findLowerBoundNumber(Arr){
      return Math.min(...Arr) * 0.9
    }

  }
