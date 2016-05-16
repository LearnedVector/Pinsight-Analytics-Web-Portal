import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './Header'
import OverView from './Overview';

import { fetchFromGraphQL } from '../../actions/FetchAction'
import { STARTING_REQUEST_OVERVIEW, FINISHED_REQUEST_OVERVIEW } from '../../actions/actionTypes';

class App extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchFromGraphQL(`{events{id}}`, STARTING_REQUEST_OVERVIEW, FINISHED_REQUEST_OVERVIEW)
  }

  render() {
    return(
      <div className ={css(styles.AppContainer)} >
        <div className ={css(styles.SecondaryContainer)}>
          <Header />
          {this.props.children}
        </div>
        <OverView overview={this.props.overview}/>
      </div>
    )
  }

}

const styles = StyleSheet.create({
  AppContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex:1,
    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    minWidth: 1000,
    minHeight: 900
    // border: '2px solid green'
  },
  SecondaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 8,
    // border: '2px solid purple'
  }
})

function mapStateToProps(state){
  return { overview: state.overview }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchFromGraphQL }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
