import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import OverviewUser from '../components/OverviewUser';
import OverviewSessions from '../components/OverviewSessions';
import OverViewEvents  from '../components/OverViewEvents';
import { OverviewData } from '../../../server/testdata/usableTestData';

export default class Overview extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
  }

  render(){
    // console.log('overview', this.props.overview.data.data)
    return(
      <div className={css(styles.container)}>
        <OverviewUser data={OverviewData.Users}/>
        <OverviewSessions data={OverviewData.Sessions}/>
        <OverViewEvents data={OverviewData.Events}/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2.5,
    backgroundColor: '#F5F5F7',
    // border: '2px solid orange'
  },
  titleContainer: {
    display: 'flex',
    flex: .2,
    justifyContent: 'center',
    // border: '1px solid white',
  },
  title: {
    color: '#29292E',
    marginTop: 10,
    fontStyle: 'bolder'
  }
})

// export default connect(mapStateToProps, mapDispatchToProps)(Overview);
