import React ,{ Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
//this is for dev purposes only. In production we would call graphQL query to load the data
import { eventsTestData } from '../../../server/testdata/usableTestData';
import EventsTableRow from '../components/EventsTableRow';

export default class EventsTableView extends Component {
  constructor(props){
    super(props)
    this.renderTable = this.renderTable.bind(this)
  }

  render(){
    return(
      <div>
        {this.props.children || this.renderTable()}
      </div>
    )
  }

  renderTable(){
    let key = 0;
    return(
      <div className={`container ${css(styles.marginTop)}`}>
        <table className="u-full-width">
          <thead >
            <tr>
              <th className={css(styles.TableRowPadding)}>Event Name</th>
              <th className={css(styles.AlignCenter)}>Total Occurence</th>
              <th className={css(styles.AlignCenter)}>Avg Event / Day</th>
              <th className={css(styles.AlignCenter)}>Avg Event / Session</th>
            </tr>
          </thead>
          <tbody>
            {eventsTestData.map((data) => <EventsTableRow data={data} id={key} key={key++}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  TableRowPadding: {
    padding: 10,
  },
  AlignCenter: {
    textAlign: 'center'
  },
  marginTop: {
    marginTop: 50,
  }
})
